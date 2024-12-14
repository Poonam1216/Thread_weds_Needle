import React, { useState, ChangeEvent, FormEvent } from "react";
import Dropdown from "../../shared/dropdown/Dropdown";
import SignUp from "../signup/Signup";
import './Login.css';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [accountType, setAccountType] = useState<string>("Teacher");

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);
        console.log("account Type", accountType);


        toast.success("Login successful!");
        
        setUsername("");
        setPassword("");
        setAccountType("Teacher");
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleAccountTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAccountType(e.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="login-container">
                    <span className="heading">Welcome Back</span>
                    <small>
                        Hey there! Ready to log in? Just enter your username and
                        password below and you'll be back in action in no time.
                        Let's go!
                    </small>
                    <form onSubmit={handleLogin}>
                        <div className="inputs-container">
                            <span>Please select your account type: </span>
                            <Dropdown
                                value={accountType}
                                onChange={handleAccountTypeChange}
                            />
                        </div>

                        <div className="user-name">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password: </label>
                            <input
                                type="password"
                                id="password"
                                autoComplete={"false"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>

                        <div className="remember-forgot-container">
                            <div className="remember">
                                <input
                                    id="default-radio-1"
                                    type="checkbox"
                                    value=""
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600"
                        
                                />
                                <label
                                    htmlFor="default-radio-1"
                                    className="ms-2 text-sm font-medium text-gray-600"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <div className="forgot-password">
                                <a
                                    href="#"
                                    className="ms-2 text-sm font-medium text-gray-600"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <div className="submit">
                            <button type="submit">
                                <b>Log In</b>
                            </button>
                        </div>

                        <div className="sign-up">
                            <span className="ms-2 text-sm font-medium text-gray-400">
                                Don't have an <Link to="/signup">Sign up</Link>{" "}
                                account?
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
