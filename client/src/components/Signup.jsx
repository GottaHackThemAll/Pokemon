import { useState, useEffect } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate(); 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        const uri = "http://localhost:5000/users/addUser";
        
        if (username.length === 0) {
            const err = document.querySelector('#err-msg');
            err.innerHTML = "Empty username field";
        } else if (password.length < 6) {
            const err = document.querySelector('#err-msg');
            err.innerHTML = "Password too short.";
        }
        else if (password !== confirmPassword) {
            const err = document.querySelector('#err-msg');
            err.innerHTML = "Passwords are not the same."
        } else {
            try {
                const reqJSON = {"username": username, "password": password};
                fetch(uri, {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reqJSON)
                }).then((res) => {
                    return res.json();
                }).then((res) => {
                    alert("Account successfully created! Get to cooking!");
                    navigate("/Login")
                }).catch((error) => {
                    console.log(error);
                })
            } catch (e) {
                console.log(e);
            }
            
        }
    }

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <div className='login-container p-5 relative' style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"300px"}}>
            <h1> Signup </h1>
                {/* Input forms  */}
            <div class="text-start">
                {/* Username */}
                <Form.Label>Enter Username</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control 
                        className='login-input-box'
                        type = "text"
                        value = {username}
                        onChange = {handleUsername}
                        placeholder="Username"
                    />
                </InputGroup>
                {/* Password */}
                <Form.Label>Enter Password</Form.Label>
                <InputGroup  className="mb-3">
                    <Form.Control
                    className='login-input-box'
                        type = "password"
                        value = {password}
                        onChange = {handlePassword}
                        placeholder="Password"
                    />
                </InputGroup>
                {/* Confirm password */}
                <p>Confirm Password</p>
                <InputGroup className="mb-3">
                    <Form.Control
                        className='login-input-box'
                        type = "password"
                        value = {confirmPassword}
                        onChange = {handleConfirmPassword}
                        placeholder="Confirm Password"
                    />
                </InputGroup>
                <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/Login")}> Back to Login </Button>  

            </div>
            <button class="login-submit-btn mt-5" onClick={handleSubmit} type="submit">Submit</button>
            <p id='err-msg' className='absolute mt-2 left-[50%] -translate-x-1/2 p-0 text-xs text-red-500'></p>                  
        </div>
    );
};
export default Signup;