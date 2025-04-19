import { useNavigate } from 'react-router-dom';
import duocook from '../assets/duocook.png';
const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div className='d-flex ml-5'>
            <div className='d-flex flex-column justify-content-center w-50 text-start align-items-center'>
                <div className='home home-header pl-2 mb-3'>Welcome to CookingLingo!</div>
                <button className='home green-btn home-header-btn px-2 align-self-start' onClick={() => navigate('/Login')}>
                    Start your cooking Journey
                </button>
            </div>
            <img src={duocook}/>  
        </div>
        
    );
};
export default Home;