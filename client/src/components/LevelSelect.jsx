import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChooseLevel from './ChooseLevel';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import Axios from "axios";

const LevelSelect = () => {
    const navigate = useNavigate();
    const levels = [1, 2, 3, 4, 5];
    const id = '52954';
    const Meals_by_Country = {
        china: ['52956', '52955', '52951', '52953', '52947', '52950', '52952', '52947', '52948'],
        filipino: ['53071', '53070', '53068', '53069', '53072', '53075', '53073', '53074']
    }
    const [mealID, setMealID] =useState([])

    const [showFilter, setShowFilter] = useState(false);
    const [mealsByDifficulty, setMealsByDifficulty] = useState({
        easy: [],
        intermediate: [],
        hard: []
    })
    const [selectedLevel, setSelectedLevel] = useState(null); 
    const location = useLocation();
    const selectedCountry = location.state?.country;

    useEffect (() => {
        Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => {
        setMealID(res.data.meals[0].strMeal);
        })

        console.log(selectedCountry)
    })

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                // Get meal IDs for the selected country
                const mealIds = Meals_by_Country[selectedCountry] || [];
                constol
                // Fetch all meals
                mealIds.map(async (id) => {
                    // const response = await Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                    // setMealID(response)
                    // console.log(mealID)
                    // return response.data.meals[0];
                    Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => {
                        setMealID(res.data.meals[0].strMeal);
                    })
                })

                // Split meals into difficulty groups
                const totalMeals = meals.length;
                const third = Math.ceil(totalMeals / 3);
                
                setMealsByDifficulty({
                    easy: meals.slice(0, third),
                    intermediate: meals.slice(third, 2 * third),
                    hard: meals.slice(2 * third)
                });
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        };

        if (selectedCountry) {
            fetchMeals();
        }
    }, [selectedCountry]);
    
    // Determine difficulty for each level
    const getDifficulty = (level) => {
        const totalLevels = levels.length;
        const third = Math.ceil(totalLevels / 3);
        if (level <= third) return 'easy';
        if (level <= 2 * third) return 'intermediate';
        return 'hard';
    };
    
    const handleLevelClick = (level) => {
        setShowFilter(true);
        setSelectedLevel(level);
    };

    return (
        <Container className='d-flex flex-column level-select-container align-items-center'>
            <Button variant="link" className='d-flex align-self-start align-items-center' style={{ color:"#7EBB5F", gap:"5px"}} onClick={() => navigate("/CountrySelect")}> <ArrowLeft/> Country Select </Button> 
            <div className='level-select-header d-flex flex-column mb-5'>
                <h1 className='level-select-header title'> Course: {selectedCountry} </h1>
                <h1 className='level-select-header level'> Levels </h1>
            </div>

            {/* Level bubbles in zigzag pattern */}
            <div className='level-bubbles-wrapper w-25'>
                {levels.map((level, index) => {
                    const difficulty = getDifficulty(level);
                    const isEven = index % 2 === 0;
                    return (
                        <Row 
                            key={level} 
                            className={`level-row ${isEven ? 'justify-content-start' : 'justify-content-end'}`}
                        >
                            <Col xs='auto'>
                                <div 
                                    className={`level-select-bubble rounded-circle ${difficulty}`}
                                    onClick={handleLevelClick}
                                >
                                    <span className='level-number'>{level}</span>
                                </div>
                            </Col>
                        </Row>
                    );
                })}
            </div>
            <ChooseLevel 
                show={showFilter} 
                onHide={() => {
                    setShowFilter(false)
                    setSelectedLevel(null)
                }} 
                country={selectedCountry}
                meals={mealsByDifficulty[getDifficulty(selectedLevel)] || []}
                level={selectedLevel}
            />
        </Container>
    );
};

export default LevelSelect;