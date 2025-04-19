import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import food from '../assets/food.jpg';

const ChooseLevel = ({show, onHide}) => {
    const navigate = useNavigate();

    const foodNames = ["Pasta", "Salad", "Soup"];
    
    const handleLevelClick = (level) => {
        navigate('/Level');
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
                    <Modal.Title className='choose-level-modal-title' >Choose your recipe!</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column p-3' style={{ gap: "15px" }}>
                {foodNames.map((name, index) => (
                    <button 
                        key={index}
                        className='d-flex choose-level-recipes w-100'
                        onClick={handleLevelClick}
                    >
                        <div className='d-flex align-items-center' style={{ gap: "20px", maxWidth: "300px" }}>
                            <img src={food} />
                            <div className='choose-level-recipes-text text-center flex-fill' style={{ flex: 1, flexGrow: 1}}>
                                {name}
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