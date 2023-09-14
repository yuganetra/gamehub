import React, { useState } from 'react';
import {FaUserSecret} from 'react-icons/fa';
import {IoMailOpenOutline} from 'react-icons/io5';
import {RiLockPasswordFill} from 'react-icons/ri';

const Signup =()=> {
    const [action, setaction] = useState("Login");
  return (
    <div id='Signup' className="signup-form">
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                <span className="icon"><FaUserSecret/></span>
                <input type="text" placeholder='Name/UserName'/>
            </div>}
           

            <div className="input">
                <span className="icon"><IoMailOpenOutline/></span>
                <input type="email" placeholder='Email' />
            </div>

            <div className="input">
                <span className="icon"><RiLockPasswordFill/></span>
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgetpassword">forget password ? <span>click here</span></div>}
       
        <div className="submit-container">

            <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
            <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
        </div>
    </div>
    </div>
  )
}

export default Signup