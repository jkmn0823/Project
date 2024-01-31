import React from "react";
import "./Home.css"
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "./UserContext";

function Home(){
  const {name} = useParams();
  const {users} = useUserContext();

    // 전역 상태(users)에서 현재 사용자 정보를 찾습니다.
    const currentUser = users.find(user => user.NAME === name);
    
  return(
    <div className="Main_HomePage">
      <div className="Main_Home_Header">
        <div className="Home_Link">
          <Link  to="/"><p>Travel</p></Link>
        </div>
        <div className="User">
          <p>님 환영합니다</p>
      </div>
        <div className="Home_Log">
          <Link  to="/Login"><p>로그인</p></Link>
        </div>
      </div>



      <div className="Main_Home_Body_1">
        <div className="image">
          <p>이미지</p>
        </div>
        <div className="text">
          <p>
            텍스트
          </p>
        </div>

      </div>

      <div className="Main_Home_Body_2">

        <div>

        </div>
        
      </div>

      <div className="Main_Home_Footer">
          <p>
            Copyright &copy;An Lab
          </p>
      </div>
    </div>
  );
};

export default Home;