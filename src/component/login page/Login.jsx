import axios from "axios";
import "./index.css";
import SignUp from "./SignUp";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
    //  const [apiData  , setApiData] = useState("");
    const [emails, setEmails] = useState("");
    const [pasw, setPasw] = useState("");
    const [signUpCall, setSignUpCall] = useState(false);
    const navigete = useNavigate()
    
    const postingData = async () => {
        try{
            const response = await axios.post(
            "http://192.168.29.14:3000/api/users/login",
            {
                email: emails,
                password: pasw,
            }
            );
            message.success("Login")
            navigete("/dashboard")
        console.log(response);
        }
        catch (error){
            message.error(`Please sign up   `)
        }
    };
    const submitHandler = (e) => {
        e.preventDefault();
        postingData();
        console.log(emails);
        console.log(pasw);
    };
    const onClose = () => { 	
        setSignUpCall(false);
    };
    // main function return here
    return (
        <div className="parant_div">
            <div className="container">
                <div id="loginTab">
                    <form action="#" onSubmit={submitHandler}>
                        <div className="input-group">
                            <h1 className="d-block">Login here</h1>
                            <label htmlFor="Username">Email</label>
                            <input
                                type="text"
                                name="Username"
                                placeholder="Enter email"
                                value={emails}
                                onChange={(e) => setEmails(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="loginPassword">Password:</label>
                            <input
                                type="password"
                                name="loginPassword"
                                placeholder="Password"
                                value={pasw}
                                onChange={(e) => setPasw(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn  ">
                            Login
                        </button>
                        {/* <hr /> */}
                        <span className="oR">OR</span>
                        {/* <span>OR</span> */}
                        <button
                            type="button"
                            onClick={()=>{setSignUpCall(true)}}
                            className="btn btn-sign-up "
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
            <SignUp isShow={signUpCall} 
				// cencalEvent={signUpHandler}
				handleCancel={onClose}
			/>
        </div>
    );
};
export default Login;
