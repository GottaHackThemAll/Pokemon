import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div>
            Home page
            <button onClick={() => navigate('/CountrySelect')}>
                Go to country select
            </button>
        </div>
        
    );
};
export default Home;