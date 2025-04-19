import React from 'react';
import food from '../assets/food.jpg';
import { HandThumbsUp } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const Forum = () => {
  const navigate = useNavigate();
  // Dummy data for others' posts
  const otherPosts = [
    {
      id: 1,
      photo: 'https://via.placeholder.com/100',
      description: 'Tried the Thai curry recipe—so good!',
    },
    {
      id: 2,
      photo: 'https://via.placeholder.com/100',
      description: 'Here’s my Italian pasta with homemade sauce!',
    },
    {
      id: 3,
      photo: 'https://via.placeholder.com/100',
      description: 'Made dumplings for the first time 👩‍🍳',
    },
  ];

return (
  <div className="d-flex justify-content-center w-50">

    <div className="forum-container d-flex flex-column text-left">
    <Button variant="link" className='d-flex align-self-start align-items-center' style={{ color:"#7EBB5F", gap:"5px"}} onClick={() => navigate("/LevelSelect")}> <ArrowLeft/> Level Select </Button> 
      {/* Your post section */}
      <div className="your-post px-5">
        <h2 className="your-post-header">Your Post</h2>
        <img src={food} className="img-fluid" />
        <div className="d-flex p-3 align-items-end justify-content-between">
          <p style={{ marginTop: '10px' }}> This was my take on the Moroccan Tagine recipe 🌿</p>
          <HandThumbsUp  width="40" height="40" />
        </div>
      </div>

      {/* Others' posts section */}
      <div className="others-header">See what others made</div>
      <div className='hr'/>
      <div className="posts-container">
        {otherPosts.map((post) => (
          <div>
            <div key={post.id} className="post-card d-flex flex-column text-left">
              <img src={food} className="post-img img-fluid" />
              <div className="d-flex p-3 align-items-end justify-content-between w-100">
                <p style={{ marginTop: '10px' }}> {post.description} </p>
                <HandThumbsUp  width="40" height="40" />
              </div>
            </div>
            <div className='hr'/>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Forum;