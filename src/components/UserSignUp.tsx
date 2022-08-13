import React from "react";
import useFormData from "../custom-hooks/useFormData";

const UserSignUp:React.FC = () => {
    const INITIAL_SIGN_UP_STATE = {
        username: '',
        password: '',
        email: ''
    }
    const [signUpData, handleChange] = useFormData(INITIAL_SIGN_UP_STATE)
    
    return (
        <div>
            <form>
                <label>Username:</label>
                <input
                type="text"
                name="username"
                value={signUpData.username}
                onChange={handleChange}
                />
                <label>Password:</label>
                <input
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleChange}
                />
                <label>Email:</label>
                <input
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default UserSignUp