import React,{useState} from 'react'
import logo from './pics/logo.png'
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [logErr,setlogErr]=useState('')
    const [token,settoken]=useState('')

    const emailHandler=(e)=>{
        setemail(e.target.value)
        setlogErr(false)
    }
    const passHandler=(e)=>{
        setpassword(e.target.value);
        setlogErr(false)
    }

    const login=(email,password)=>{
        axios.post(`http://localhost:5000/login`,{email,password})
            .then((response)=>{
                if(response.data==="Invalid Email or password.."){
                    setlogErr(true)
                }else{
                    const stoken=response.data
                    settoken(stoken);
                    history.push("/");
                }
            })
            .catch((err)=>{throw err})
            
    }

    return (
        <div className="loginCont">
            <div className="login">
                <div className="login-logo">
                    <img src={logo} alt=""></img>
                    <p>Log In as student or Instructor</p>
                    <div className="l-border"></div>
                    
                </div>
                <div className="inputs">

                <input placeholder="Email" name="email" onChange={emailHandler} required/>
                <input placeholder="Password" name="password" type="password" onChange={passHandler}  required/>
                <h5>{logErr?(<span>Invalid Email or password..</span>):""}</h5>
                </div>
                <div className="signup">
                    <button onClick={()=>login(email,password)} >Login</button>
                    <p>Login to enroll in courses and more . </p>
                </div>
            </div>
            <div className="not-sign">
                <p>Don't have an account?</p><a href="http://localhost:3000/register">Sign up</a>
            </div>  
        </div>
    )
}

export default Login
