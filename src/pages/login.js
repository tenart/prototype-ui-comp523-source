import "./login.css";

import { useState } from "react";
import Button from "../components/button";
import api from "../api";

import { FaUser, FaLock } from 'react-icons/fa';

const Login = (props) => {

    const onLogin = props.onLogin;

    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    const [validId, setValidId] = useState(false);
    const [validPass, setValidPass] = useState(false);

    const onUserInput = (e) => {
        let value = e.target.value;
        setId(value);
        if (value.length >= 3) {
            setValidId(true);
        } else {
            setValidId(false);
        }
    }

    const onPassInput = (e) => {
        let value = e.target.value;
        setPass(value);
        if (value.length >= 6) {
            setValidPass(true);
        } else {
            setValidPass(false);
        }
    }

    const handleLogin = (data) => {
        console.log(data);
        if (data.result) {
            alert("success");
            // BiStreetView();
        } else {
            setValidId(false);
            setValidPass(false);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {};
        if (validId && validPass) {
            user.name = id;
            user.password = pass;
            api.login(user, handleLogin);
        }
    }

    return(
        <>
            <div className="login-screen">
                <div className="login-spacer"/>
                <div className="login-pane">
                    <img src="assets/unc-health-logo.svg"/>
                    <form className="login-form">
                        <div className="login-input-group flex-row">
                            <div className="login-input-icon flex-center">
                                <FaUser/>
                            </div>
                            <input onChange={onUserInput} type="text" className="username" placeholder="jane_doe"/>
                            {id.length > 0 ?
                                validId ?
                                    <div className="indicator theme-bg-carolina"/>
                                :
                                    <div className="indicator theme-bg-red"/>
                            :<></>}
                        </div>
                        <div className="login-input-group flex-row">
                            <div className="login-input-icon flex-center">
                                <FaLock/>
                            </div>
                            <input onChange={onPassInput} type="password" className="password" placeholder="password"/>
                            {validId > 0 ?
                                validPass ?
                                    <div className="indicator theme-bg-carolina"/>
                                :
                                    <div className="indicator theme-bg-red"/>
                            :<></>}
                        </div>
                        <div className="divider-10"/>
                        <Button onClick={onSubmit} className="login-button" special>LOG IN</Button>
                        <Button onClick={(e) => {e.preventDefault()}}>Create Account</Button>
                    </form>
                </div>
                <div className="login-spacer"/>
            </div>
        </>
    );
}

export default Login;