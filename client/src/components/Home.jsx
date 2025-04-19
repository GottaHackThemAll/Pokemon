import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import duocook from '../assets/duocook.png';
const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div className='d-flex ml-3' style={{gap:"100px"}}>
            <div className='d-flex flex-column justify-content-center w-50 text-align-left'>
                <div className='home-header'>Welcome to CookingLingo!</div>
                <button className='green-btn home-header-btn' onClick={() => navigate('/CountrySelect')}>
                    Start your cooking Journey
                </button>

                <button className='green-btn' onClick={() => navigate('/Submission')}>
                    Go to Submission Page
                </button>
                
            </div>
            <img src={duocook}/>  
        </div>
        
    );
};
export default Home;