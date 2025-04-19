import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChooseLevel from './ChooseLevel';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const LevelSelect = () => {
    const navigate = useNavigate();
    const levels = [1, 2, 3, 4, 5];

    const [showFilter, setShowFilter] = useState(false);

    const location = useLocation();
    const selectedCountry = location.state?.country;
    
    // Determine difficulty for each level
    const getDifficulty = (level) => {
        const totalLevels = levels.length;
        const third = Math.ceil(totalLevels / 3);
        
        if (level <= third) return 'easy';
        if (level <= 2 * third) return 'intermediate';
        return 'hard';
    };

    const handleLevelClick = () => {
        setShowFilter(true);
    };

    return (
        <Container className='d-flex flex-column level-select-container align-items-center'>
            <Button variant="link" className='d-flex align-self-start align-items-center' style={{ color:"#7EBB5F", gap:"5px"}} onClick={() => navigate("/CountrySelect")}> <ArrowLeft/> Country Select </Button> 
            <div className='level-select-header d-flex flex-column mb-5'>
                <h1 className='level-select-header title'> Course: {selectedCountry} </h1>
                <h1 className='level-select-header level'> Level *number* </h1>
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
                onHide={() => setShowFilter(false)} 
            />
        </Container>
    );
};

export default LevelSelect;