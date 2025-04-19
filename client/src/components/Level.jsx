import { useNavigate } from 'react-router-dom';
import food from '../assets/food.jpg';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import Axios from "axios";

const Level = () => {
    const navigate = useNavigate();

    const id = 52954
    const [mealId, setMealId] = useState([])
    const [foodName, setFoodName] = useState("")
    const [image, setImage] = useState(null)
    const [ingredient1, setIngredient1] = useState("")
    const [ingredient2, setIngredient2] = useState("")
    const [ingredient3, setIngredient3] = useState("")
    const [ingredient4, setIngredient4] = useState("")
    const [ingredient5, setIngredient5] = useState("")
    const [ingredient6, setIngredient6] = useState("")
    const [ingredient7, setIngredient7] = useState("")
    const [ingredient8, setIngredient8] = useState("")
    const [ingredient9, setIngredient9] = useState("")
    const [ingredient10, setIngredient10] = useState("")
    const [ingredient11, setIngredient11] = useState("")
    const [ingredient12, setIngredient12] = useState("")
    const [ingredient13, setIngredient13] = useState("")
    const [ingredient14, setIngredient14] = useState("")
    const [ingredient15, setIngredient15] = useState("")
    const [ingredient16, setIngredient16] = useState("")
    const [ingredient17, setIngredient17] = useState("")
    const [ingredient18, setIngredient18] = useState("")
    const [ingredient19, setIngredient19] = useState("")
    const [ingredient20, setIngredient20] = useState("")
    const [instruction, setInstruction] = useState()

    
    useEffect(() => {
        Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => {
            console.log(res.data.meals[0])
            setIngredient1(res.data.meals[0].strMeasure1 + " " + res.data.meals[0].strIngredient1);
            setIngredient2(res.data.meals[0].strMeasure2 + " " + res.data.meals[0].strIngredient2);
            setIngredient3(res.data.meals[0].strMeasure3 + " " + res.data.meals[0].strIngredient3);
            setIngredient4(res.data.meals[0].strMeasure4 + " " + res.data.meals[0].strIngredient4);
            setIngredient5(res.data.meals[0].strMeasure5 + " " + res.data.meals[0].strIngredient5);
            setIngredient6(res.data.meals[0].strMeasure6 + " " + res.data.meals[0].strIngredient6);
            setIngredient7(res.data.meals[0].strMeasure7 + " " + res.data.meals[0].strIngredient7);
            setIngredient8(res.data.meals[0].strMeasure8 + " " + res.data.meals[0].strIngredient8);
            setIngredient9(res.data.meals[0].strMeasure9 + " " + res.data.meals[0].strIngredient9);
            setIngredient10(res.data.meals[0].strMeasure10 + " " + res.data.meals[0].strIngredient10);
            setIngredient11(res.data.meals[0].strMeasure11 + " " + res.data.meals[0].strIngredient11);
            setIngredient12(res.data.meals[0].strMeasure12 + " " + res.data.meals[0].strIngredient12);
            setIngredient13(res.data.meals[0].strMeasure13 + " " + res.data.meals[0].strIngredient13);
            setIngredient14(res.data.meals[0].strMeasure14 + " " + res.data.meals[0].strIngredient14);
            setIngredient15(res.data.meals[0].strMeasure15 + " " + res.data.meals[0].strIngredient15);
            setIngredient16(res.data.meals[0].strMeasure16 + " " + res.data.meals[0].strIngredient16);
            setIngredient17(res.data.meals[0].strMeasure17 + " " + res.data.meals[0].strIngredient17);
            setIngredient18(res.data.meals[0].strMeasure18 + " " + res.data.meals[0].strIngredient18);
            setIngredient19(res.data.meals[0].strMeasure19 + " " + res.data.meals[0].strIngredient19);
            setIngredient20(res.data.meals[0].strMeasure20 + " " + res.data.meals[0].strIngredient20);
            setInstruction(res.data.meals[0].strInstructions);
            setFoodName(res.data.meals[0].strMeal);
            setImage(res.data.meals[0].strMealThumb)
        });
    }, [])

    return (
        <div className="bg-[#7EBB5F] w-[50vw] rounded-3xl flex flex-column justify-center items-center my-4 p-5">
            <Button variant="link" className='d-flex align-self-start items-center' style={{ color:"#E7FFD3", gap:"5px"}} onClick={() => navigate("/CountrySelect")}> <ArrowLeft/> Country Select </Button>   
            <div className="w-[90%]">
                <div className="flex justify-between text-3xl text-[#F8FFF1] font-semibold">
                    <p>Country</p>
                    <p>Level 1</p>
                </div>
                <div className="text-left text-[#F8FFF1] text-5xl font-bold">
                    {foodName}
                </div>
                <div className="w-[100%] mt-2">
                    <img src={image} className='rounded-3xl'></img>
                </div>
                <div className="text-left text-[#F8FFF1] text-5xl font-bold mt-3">
                    Recipe

                </div>
                <div className="bg-[#F8FFF1] w-[100%] text-left mt-4 rounded-3xl p-3 font-bold">
                    Ingredients
                    <ul className="ingredientList list-disc">
                        {ingredient1!=" " && <li>{ingredient1}</li>}
                        {ingredient2!=" " && <li>{ingredient2}</li>}
                        {ingredient3!=" " && <li>{ingredient3}</li>}
                        {ingredient4!=" " && <li>{ingredient4}</li>}
                        {ingredient5!=" " && <li>{ingredient5}</li>}
                        {ingredient6!=" " && <li>{ingredient6}</li>}
                        {ingredient7!=" " && <li>{ingredient7}</li>}
                        {ingredient8!=" " && <li>{ingredient8}</li>}
                        {ingredient9!=" " && <li>{ingredient9}</li>}
                        {ingredient10!=" " && <li>{ingredient10}</li>}
                        {ingredient11!=" " && <li>{ingredient11}</li>}
                        {ingredient12!=" " && <li>{ingredient12}</li>}
                        {ingredient13!=" " && <li>{ingredient13}</li>}
                        {ingredient14!=" " && <li>{ingredient14}</li>}
                        {ingredient15!=" " && <li>{ingredient15}</li>}
                        {ingredient16!=" " && <li>{ingredient16}</li>}
                        {ingredient17!=" " && <li>{ingredient17}</li>}
                        {ingredient18!=" " && <li>{ingredient18}</li>}
                        {ingredient19!=" " && <li>{ingredient19}</li>}
                        {ingredient20!=" " && <li>{ingredient20}</li>}
                    </ul>
                </div>
                <div className="bg-[#F8FFF1] w-[100%] text-left mt-4 rounded-3xl p-3 font-bold">
                    Directions
                    <ul className="list-decimal">
                        {instruction}
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