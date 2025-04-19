import { useNavigate, useLocation } from 'react-router-dom';
import food from '../assets/food.jpg';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

const Level = () => {
    const navigate = useNavigate();


    return (
        <div className="bg-[#7EBB5F] w-[50vw] rounded-3xl flex flex-column justify-center items-center my-4 p-5">
            <Button variant="link" className='d-flex align-self-start items-center' style={{ color:"#E7FFD3", gap:"5px"}} onClick={() => navigate("/CountrySelect")}> <ArrowLeft/> Country Select </Button>   
            <div className="w-[90%]">
                <div className="flex justify-between text-3xl text-[#F8FFF1] font-semibold">
                    <p>{selectedCountry}</p>
                    <p>Level 1</p>
                </div>
                <div className="text-left text-[#F8FFF1] text-5xl font-bold">
                    Food Name
                </div>
                <div className="w-[100%] mt-2">
                    <img src={food} className='rounded-3xl'></img>
                </div>
                <div className="text-left text-[#F8FFF1] text-5xl font-bold mt-3">
                    Recipe

                </div>
                <div className="bg-[#F8FFF1] w-[100%] text-left mt-4 rounded-3xl p-3 font-bold">
                    Ingredients
                    <ul className="list-disc">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="bg-[#F8FFF1] w-[100%] text-left mt-4 rounded-3xl p-3 font-bold">
                    Directions
                    <ul className="list-decimal">
                        <li>hi</li>
                        <li>hi</li>
                    </ul>
                </div>
                <button className="submitRecipeButton bg-[#F8FFF1] mt-4 px-5 py-2 hover:bg-[#e1facb]" onClick={() => navigate("/Submission")}>
                    Submit Photo
                </button>
            </div>
        </div>
    );
};
export default Level;