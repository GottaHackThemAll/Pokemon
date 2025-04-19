import React, { useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

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
          '+'
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

      <button className="green-btn" onClick={handleSubmit}>
        Submit Photo
      </button>
    </div>
  );
};

export default Submission;