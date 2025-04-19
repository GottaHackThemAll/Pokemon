import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const ChooseLevel = ({show, onHide, mealId ,}) => {
    const navigate = useNavigate();
    
    const handleMealClick = (mealId) => {
        // Save selected meal to localStorage or state management
        console.log(meal.idMeal);
        localStorage.setItem('selectedMeal', JSON.stringify(
            meals.find(meal => meal.idMeal === mealId)  
        ));
        navigate('/Level', { state: { mealId } });
    };

    return (
        <div className='d-flex justify-content align-items-center'>
            <Modal 
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
                dialogClassName='modal-50w'
                centered
                className='choose-level-modal'
            >
                {/* Genre filter header */}
                <Modal.Header closeButton>
                    {/* Title */}
                    <div className='d-flex'>           
                        <Modal.Title className='choose-level-modal-title' > Choose your recipe!  </Modal.Title>
                        {country}
                        {/* {level} */}
                    </div>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column p-3' style={{ gap: "15px" }}>
                    {meals.map(meal => (
                        <button 
                            className='d-flex choose-level-recipes w-100'
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            <div className='d-flex align-items-center' style={{ gap: "20px", maxWidth: "300px" }}>
                                <img src={meal.strMealThumb} />
                                <div className='choose-level-recipes-text text-center flex-fill' style={{ flex: 1, flexGrow: 1}}>
                                    {meal.strMeal}
                                </div>
                            </div>
                        </button>
                    ))}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ChooseLevel;