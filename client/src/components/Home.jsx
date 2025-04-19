<<<<<<< Updated upstream
import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div>
            Home page
            <button onClick={() => navigate('/CountrySelect')}>
                Go to country select
            </button>
=======
import { useNavigate } from 'react-router-dom';
import duocook from '../assets/duocook.png';
const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div className='d-flex'>
            <div className='d-flex flex-column justify-content-center w-50 text-start align-items-center ml-3'>
                <div className='home home-header pl-2'>Welcome to CookingLingo!</div>
                <button className='home green-btn home-header-btn px-2 align-self-start' onClick={() => navigate('/CountrySelect')}>
                    Start your cooking Journey
                </button>
            </div>
            <img src={duocook}/>  
>>>>>>> Stashed changes
        </div>
        
    );
};
export default Home;