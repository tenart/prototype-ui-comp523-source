import "./login.css";

import { useState } from "react";
import Button from "../components/button";
import api from "../api";

import { FaUser, FaLock } from 'react-icons/fa';
import { BiBorderRadius } from "react-icons/bi";

const Login = (props) => {

    const onLogIn = props.onLogIn;

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [validName, setValidName] = useState(false);
    const [validPass, setValidPass] = useState(false);

    const onUserInput = (e) => {
        let value = e.target.value;
        setName(value);
        if (value.length >= 3) {
            setValidName(true);
        } else {
            setValidName(false);
        }
    }

    const onPassInput = (e) => {
        let value = e.target.value;
        setPassword(value);
        if (value.length >= 6) {
            setValidPass(true);
        } else {
            setValidPass(false);
        }
    }

    const handleLogin = (data) => {
        if (data.result) {
            onLogIn(name, data.token);
        } else {
            setValidName(false);
            setValidPass(false);
            setMessage("Invalid username and/or password.");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        const user = {};
        if (validName && validPass) {
            user.name = name;
            user.password = password;
            api.put_login(user, handleLogin);
        } else {
            setMessage("Username and password required.");
        }
    }

    return(
        <>
            <div className="login-screen">
                <div className="login-spacer"/>

                <div className="login-pane">
                    <img src="assets/unc-health-logo.svg"/>
                    <p style={{
                        marginBottom: "10px",
                        color: "var(--theme-red)"
                    }}>
                        {message}
                    </p>
                    <form className="login-form">
                        <div className="login-input-group flex-row">
                            <div className="login-input-icon flex-center">
                                <FaUser/>
                            </div>
                            <input onChange={onUserInput} type="text" className="username" placeholder="jane_doe"/>
                            {name.length > 0 ?
                                validName ?
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
                            {password.length > 0 ?
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