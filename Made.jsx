import React, { useEffect, useState } from "react";
import './Made.css';
import { Link, useNavigate } from "react-router-dom";
// import { UserProvider } from './UserContext';
import { useUserContext } from "./UserContext";


function Made (){
  const navigate = useNavigate();
  const {addUser} = useUserContext();
  const {users, setUsers} = useUserContext();


  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const [NAME, setNAME] = useState('');

  const [IDValid, setIDValid] = useState(false);
  const [PWValid, setPWValid] = useState(false);
  const [NAMEValid, setNAMEValid] = useState(false);
  const [NotAllow, setNotAllow] = useState(true);

  const handleID = (e) => {
    setID(e.target.value);
    const regex = /^[a-z]+[a-z0-9]{5,19}$/g;
    if(regex.test(e.target.value)){
      setIDValid(true);
    }
    else{
      setIDValid(false);
    }
  }

  const handlePW = (e)=>{
    setPW(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if(regex.test(e.target.value)){
      setPWValid(true);
    } else{
      setPWValid(false)
    };
  };
  
  const handleNAME = (e)=>{
    setNAME(e.target.value);
    const regex = /^[가-힣]{2,}$/;

    if(regex.test(e.target.value)){
      setNAMEValid(true);
    } else{
      setNAMEValid(false)
    };
  };

  const onClickButton = ()=>{
    const newUser = {NAME, ID, PW};
    setUsers([...users, newUser]);
    addUser(newUser);
    // if(ID===User.ID && PW===User.PW){
      alert('회원가입이 완료되었습니다.');
      navigate("/login");
    // } 
    // else{
    //   alert('등록되지 않은 회원입니다.');
    // }
    };
  

  useEffect(()=>{
    if(NAMEValid && IDValid && PWValid){
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[NAMEValid, IDValid, PWValid])


  return(
    <div className="Web_page_Login">
      <div className="Web_page_Login_Header">
      <Link  to="/"><p>Travel</p></Link>
      </div>
      <div className="Web_page_Login_Body">
        <div className="Web_Login_mini_Box">

          <div className="mini_Box_Header">
            <Link  to="/"><p>Travel</p></Link> 
          </div>
          <div className="mini_Box_Tittle">
            성함
          </div>
          <div className="inputWrap">
            <input type="text" placeholder="성함을 입력해주세요"
            value={NAME}
            onChange={handleNAME}/>
          </div>

          <div style={{marginTop: "20px"}}className="mini_Box_Tittle">
            ID
          </div>
          <div className="inputWrap">
            <input type="text" placeholder="아이디를 입력해주세요"
            value={ID}
            onChange={handleID}/>
          </div>
          
          <div className="errorMessageWrap">
            {
              !IDValid && ID.length > 0 &&(
                <div>
                  *영문,숫자 포함 6자 이상 입력해주세요.
                </div>
              )}
            
          </div>

          <div style={{marginTop: "20px"}}className="mini_Box_Tittle">
            PW
          </div>
          <div className="inputWrap">
            <input type="password" placeholder="비밀번호를 입력해주세요"
            value={PW}
            onChange={handlePW}/>
          </div>
          <div className="errorMessageWrap">
            {
              !PWValid && PW.length > 0 &&(
                <div>*영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )
            }
          </div>

          <div className="mini_Box_button">
            <button onClick={onClickButton}disabled={NotAllow}>
              회원가입
            </button>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Made;