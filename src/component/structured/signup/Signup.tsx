import React, { useState, ChangeEvent, FormEvent } from "react";
import Dropdown from "../../shared/dropdown/Dropdown";
import './Signup.css'
import Login from "../login/Login";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [accountType, setAccountType] = useState<string>("Teacher");

    const handleSignUp = (e: FormEvent) => {
        e.preventDefault();
        console.log("username", username);
        console.log("password", password);
        console.log("confirm password", confirmPassword);
        console.log("account Type", accountType);

        if (
            password.length < 8 ||
            !/[A-Z]/.test(password) || 
            !/[0-9]/.test(password) ||
            !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) 
        ) {
            toast.error("Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.");
            return; 
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return; 
        }

        toast.success("Signup successful!");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setAccountType("Teacher");

        navigate("/");
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleAccountTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAccountType(e.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="login-container">
                    <span className="heading">Sign-Up Here</span>
                    <small>
                        Hey there! Ready to log in? Just enter your username and
                        password below and you'll be back in action in no time.
                        Let's go!
                    </small>
                    <form onSubmit={handleSignUp}>
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
                                autoComplete="false"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="confirm-password">Confirm Password: </label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Re-enter your password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                        </div>


                        <div className="submit">
                            <button>
                                <b>Sign Up</b>
                            </button>
                        </div>

                        <div className="sign-up">
                            <span className="ms-2 text-sm font-medium text-gray-400">
                                Click here for <a href="/">Login</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
