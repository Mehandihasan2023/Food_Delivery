import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-tittle">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder="your name" required />}
            <input type="email" placeholder="your email" required/>
            <input type="password" placeholder="your Password" required />
        </div>
        <button>{currState==="Sign up"?"Create account": "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>I agree to the <a href="#">Terms and Conditions</a></p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")} >Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")} >Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
