import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChooseLevel from './ChooseLevel';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const LevelSelect = () => {
    const navigate = useNavigate();
    const levels = [1, 2, 3, 4, 5];
    const id = '52954';
    const Meals_by_Country = {
        "China": ['52956', '52955', '52951', '52953', '52947'],
        "Phillipines": ['53071', '53070', '53068', '53069', '53072']
    };
    const [mealID, setMealID] = useState([]);
    const location = useLocation();
    const selectedCountry = location.state?.country;

    const handleLevelClick = (mealIDs) => {
        console.log(mealIDs);
        navigate('/Level', { state: { mealID: mealIDs } });
    };

    return (
        <Container className='d-flex flex-column level-select-container align-items-center'>
            <Button
                variant="link"
                className='d-flex align-self-start align-items-center'
                style={{ color: "#7EBB5F", gap: "5px" }}
                onClick={() => navigate("/CountrySelect")}
            >
                <ArrowLeft /> Country Select
            </Button>
            <div className='level-select-header d-flex flex-column mb-5'>
                <h1 className='level-select-header title'> Course: {selectedCountry} </h1>
                <h1 className='level-select-header level'> Levels </h1>
            </div>

            {/* Level bubbles in zigzag pattern */}
            <div className='level-bubbles-wrapper w-25'>
                {levels.map((level, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <Row
                            key={level}
                            className={`level-row ${isEven ? 'justify-content-start' : 'justify-content-end'}`}
                        >
                            <Col xs='auto'>
                                <div
                                    className={`level-select-bubble rounded-circle`}
                                    onClick={() => handleLevelClick(Meals_by_Country[selectedCountry]?.[index])}
                                >
                                    <span className='level-number'>{level}</span>
                                </div>
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </Container>
    );
};

export default LevelSelect;