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
                name="username"
                value={signUpData.username}
                onChange={handleChange}
                />
                <label>Password:</label>
                <input
                name="password"
                value={signUpData.password}
                onChange={handleChange}
                />
                <label>Email:</label>
                <input
                name="email"
                value={signUpData.email}
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default UserSignUp