import { Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import food from '../assets/food.jpg';


const Level = () => {

    
    return (
        <div className="bg-[#7EBB5F] w-[60vw] rounded-3xl flex justify-center items-center my-4 p-5">
            <div className="">
                <div className="flex justify-between text-3xl text-[#F8FFF1] font-semibold">
                    <p>Country</p>
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
                <div className="bg-[#F8FFF1] w-[100%] text-left mt-4 rounded-3xl p-3">
                    Ingredients
                    <ul className="list-disc">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="bg-[#F8FFF1] w-[100%] text-left mt-4 rounded-3xl p-3">
                    Directions
                    <ul className="list-decimal">
                        <li>hi</li>
                        <li>hi</li>
                    </ul>
                </div>
                <button className="submitRecipeButton bg-[#F8FFF1] mt-4 px-5 py-2 hover:bg-[#e1facb]" onClick={console.log("hi")}>
                    Submit Photo
                </button>
            </div>
            
        </div>
    );
};
export default Level;