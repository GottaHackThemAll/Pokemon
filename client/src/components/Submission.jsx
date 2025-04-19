import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const Submission = () => {
  const [photo, setPhoto] = useState(null);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [userId, setUserId] = useState(0);

  const cuisineLevel = 1;
  const cuisineType = "Italian";

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    const fetchData = async () => {
      try {
        const uri = "http://localhost:5000/users/byUsername?username=" + localStorage.getItem('username');
        const res = await fetch(uri, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await res.json();
        console.log(data)
        setUserId(data.user.id);

        const uri2 = "http://localhost:5000/posts/postPost";
        const formData = new FormData();
        const reqjson = {
          "cuisineLevel": cuisineLevel,
          "cuisineType": cuisineType,
          "title": title,
          "body": comment,
          "userId": data.user.id,
          "likeCount": 0,
          "timeCreated": new Date().toISOString()
        }
        formData.append("buttface", JSON.stringify(reqjson));
        formData.append("foodImage", photo); // Append the file directly
      
        const res2 = await fetch(uri2, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        })

        const data2 = await res2.json();
        console.log(data2)
        if (data2.status != 200) {
          alert("Post submission failed. Please try again.");
        } else {
          alert("Post submitted successfully!");
          navigate("/Forum");
        }
      } catch (e) {
        console.error(e);
      }
    } 

    fetchData();
  };

  return (
    <div className="submission-container">
      <input type='text' onChange={(event) => setTitle(event.target.value)} className="title-input bg-white" placeholder="Title" />
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