import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='login-container p-5' style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"300px"}}>
                <h1> Login </h1>
                    {/* Input forms  */}
                <div class="text-start">
                    {/* Username */}
                    <Form.Label>Enter Username</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control 
                            className='login-input-box'
                            type = "text"
                            value = {username}
                            onChange = {handleUsernameChange}
                            placeholder="Username"
                        />
                    </InputGroup>
                    {/* Password */}
                    <Form.Label>Enter Password</Form.Label>
                    <InputGroup>
                        <Form.Control
                        className='login-input-box'
                            type = "password"
                            value = {password}
                            onChange = {handlePasswordChange}
                            placeholder="Password"
                        />
                    </InputGroup>
                    <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/Signup")}> Don't have an account? </Button>        
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <button class="login-submit-btn mt-5" onClick={() => navigate("/CountrySelect")} type="submit">Submit</button>
                    <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/")}>Back to Home </Button>    
                </div>
            </div>
        </form>
        
    );
};
export default Login;