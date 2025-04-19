import { Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate(); 
    return (
        <div className='login-container p-5' style={{borderRadius: "20px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.25)", minWidth:"500px", minHeight:"300px"}}>
            <h1> Signup </h1>
                {/* Input forms  */}
            <div class="text-start">
                {/* Username */}
                <Form.Label>Enter Username</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control 
                        className='login-input-box'
                        type = "text"
                        // value = {username}
                        // onChange = {handleUsernameChange}
                        placeholder="Username"
                    />
                </InputGroup>
                {/* Password */}
                <Form.Label>Enter Password</Form.Label>
                <InputGroup  className="mb-3">
                    <Form.Control
                    className='login-input-box'
                        type = "password"
                        // value = {password}
                        // onChange = {handlePasswordChange}
                        placeholder="Password"
                    />
                </InputGroup>
                {/* Confirm password */}
                <p>Confirm Password</p>
                <InputGroup className="mb-3">
                    <Form.Control
                        className='login-input-box'
                        type = "password"
                        // value = {confirmPassword}
                        // onChange = {handleConfirmPasswordChange}
                        placeholder="Confirm Password"
                    />
                </InputGroup>
                <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/Login")}> Back to Login </Button>  
            </div>
            <button class="login-submit-btn mt-5" onClick={() => navigate("/Login")} type="submit">Submit</button>
                  
        </div>
    );
};
export default Signup;