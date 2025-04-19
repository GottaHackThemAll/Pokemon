import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const Submission = () => {
  const [photo, setPhoto] = useState(null);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    alert('Photo submitted!');
    // TODO: Add actual submission logic here
    navigate('/Forum');
  };

  return (
    <div className="submission-container">
      <label htmlFor="upload-photo" className="photo-label">
        {photo ? (
          <img src={photo} alt="Preview" className="photo-preview" />
        ) : (
          <PlusCircle width="40" height="40" />
        )}
        <input
          id="upload-photo"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handlePhotoChange}
        />
      </label>

      <textarea
        className="comment-box"
        placeholder="Type Comments Here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className='d-flex flex-column'>
        <button className="submission-btn" onClick={handleSubmit}>
          Submit Photo
        </button>
        <Button variant="link" style={{ color:"#E7FFD3"}} onClick={() => navigate("/")}>Back to Home </Button>
      </div>

    </div>
  );
};

export default Submission;