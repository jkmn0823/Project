import { Route, Routes } from "react-router-dom";
import UserContext from "./UserContext";
import { UserProvider } from './UserContext';
import './App.css';

import Home from './Home';
import Login from './Login';
import Made from './Made';

import axios from 'axios';

function App() {
  

  return (
    <div className="Wrap_container">
      <UserProvider>
      
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/Login" element={<Login/>}></Route> 
          <Route path="/Made" element={<Made/>}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;