import React, { useEffect, useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from './UserContext';



function Login(){
  const navigate = useNavigate();
  const{users} = useUserContext();

  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  const [IDValid, setIDValid] = useState(false);
  const [PWValid, setPWValid] = useState(false);
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
    }
  };

  const onClickButton = ()=>{
    const foundUser = users.find((user)=> user.ID === ID && user.PW === PW);
    if(foundUser){
      alert('로그인에 성공했습니다.');
      navigate("/");
      
    } else{
      alert('등록되지 않은 회원입니다.');
    }
  };
  

  useEffect(()=>{
    if(IDValid && PWValid){
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[IDValid, PWValid]);


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
            ID
          </div>
          <div className="inputWrap">
            <input type="text" placeholder="ID를 입력하세요"
            value={ID}
            onChange={handleID}/>
          </div>
          <div className="errorMessageWrap">
            {
              !IDValid && ID.length > 0 &&(
                <div>
                  *아이디를 입력해주세요.
                </div>
              )}
            
          </div>

          <div style={{marginTop: "20px"}}className="mini_Box_Tittle">
            PW
          </div>
          <div className="inputWrap">
            <input type="password" placeholder="비밀번호를 입력하세요"
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
          <div className="Making_ID">
            <Link  to="/Made"><p>회원가입</p></Link>
          </div>

          <div className="mini_Box_button">
            <button onClick={onClickButton}disabled={NotAllow}>
              로그인
            </button>
          </div>
        </div>

      </div>
      {/* <div className="foot">
        <p>하단페이지</p>
      </div> */}
    </div>
  )
};

export default Login;