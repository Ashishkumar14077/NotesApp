import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    const checklogin = async ()=>{
      const token = localStorage.getItem('tokenStore')
      if(token){
        const verified = await axios.get("/users/verify",{
          headers: {Authorization: token}
        })
        console.log(verified)
        setIsLogin(verified.data)
        if(verified.data === false) return localStorage.clear()

      }else{
        setIsLogin(false)
      }
    }
    checklogin()
  },[])
  return (
    <div className="App">
      <Header />
      {
        isLogin 
        ? <Home /> 
        : <Login setIsLogin={setIsLogin} />
      }
      <Footer />
    </div>
  );
}

export default App;
