import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import america from '../assets/america.png';


const CountrySelect = () => {
    const navigate = useNavigate(); 
    const goToLevel = () => {
        navigate("/LevelSelect");
        console.log("hi")
    }
    
    return (
        <div class="bg-[#7EBB5F] rounded-3xl h-[75vh] w-[50vw] flex flex-col justify-center items-center">
            <div className="w-[100%] px-5">  
                <p className="text-[#F8FFF1] text-left text-3xl font-extrabold">Choose your Country</p>
                <div className="bg-[#F8FFF1] px-2 py-1 mb-3 rounded-lg flex items-center text-2xl hover:bg-[#e1facb]" onClick={goToLevel}>
                    <img className="h-10 mr-2" src={america}></img>
                    America
                </div>
                <div className="bg-[#F8FFF1] px-2 py-1 mb-3 rounded-lg flex items-center text-2xl hover:bg-[#e1facb]" onClick={goToLevel}>
                    <img className="h-10 mr-2" src={america}></img>
                    Korea
                </div>
                <div className="bg-[#F8FFF1] px-2 py-1 mb-3 rounded-lg flex items-center text-2xl hover:bg-[#e1facb]" onClick={goToLevel}>
                    <img className="h-10 mr-2" src={america}></img>
                    Japan
                </div>
                <div className="bg-[#F8FFF1] px-2 py-1 mb-3 rounded-lg flex items-center text-2xl hover:bg-[#e1facb]" onClick={goToLevel}>
                    <img className="h-10 mr-2" src={america}></img>
                    China
                </div>
                <div className="bg-[#F8FFF1] px-2 py-1 mb-3 rounded-lg flex items-center text-2xl hover:bg-[#e1facb]" onClick={goToLevel}>
                    <img className="h-10 mr-2" src={america}></img>
                    Italy            
                </div>
            </div> 

            <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/")}>Back to Home </Button> 
        </div>
    );
};

export default CountrySelect;