import React, { useState, useEffect } from 'react';
import food from '../assets/food.jpg';
import { HandThumbsUp } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const Forum = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [imgbinary, setImgbinary] = useState("");
  const [postBody, setPostBody] = useState("");
  const [likes, setLikes] = useState(0);

  const [cuisineType, setCuisineType] = useState("");
  const [cuisineLevel, setCuisineLevel] = useState(0);

  const [otherPosts, setOtherPosts] = useState([]);
  const [otherPics, setOtherPics] = useState([]);

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First fetch for the latest post
        const uri = "http://localhost:5000/posts/getUserLatest";
        const res1 = await fetch(uri, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data1 = await res1.json();
  
        // Update state with the first fetch result
        setTitle(data1.post.title);
        setImgbinary(data1.post.foodImage);
        setPostBody(data1.post.body);
        setLikes(data1.post.likeCount);
        setCuisineLevel(data1.post.cuisineLevel);
        setCuisineType(data1.post.cuisineType);
        const uri2 = `http://localhost:5000/posts/getByLevelAndType?cuisineLevel=${data1.post.cuisineLevel}&cuisineType=${data1.post.cuisineType}`;
        const res2 = await fetch(uri2, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data2 = await res2.json();
        setOtherPosts(Object.values(data2.posts));
        setOtherPics(data2.pictures);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);


return (
  <div className="d-flex justify-content-center w-50">

    <div className="forum-container d-flex flex-column text-left">
    <Button variant="link" className='d-flex align-self-start align-items-center' style={{ color:"#7EBB5F", gap:"5px"}} onClick={() => navigate("/LevelSelect")}> <ArrowLeft/> Level Select </Button> 
      {/* Your post section */}
      <div className="your-post px-5">
        <h2 className="your-post-header">{title}</h2>
        <img src={`data:image/png;base64,${imgbinary}`} className="img-fluid" />
        <div className="d-flex p-3 align-items-end justify-content-between">
          <p style={{ marginTop: '10px' }}>{postBody}</p>
          <HandThumbsUp  width="40" height="40" />
        </div>
      </div>

      {/* Others' posts section */}
      <div className="others-header">See what others made</div>
      <div className='hr'/>
      <div className="posts-container">
        {otherPosts.map((post, index) => (
          <div>
            <div key={post.id} className="post-card d-flex flex-column text-left">
              <img src={`data:image/png;base64,${otherPics[index]}`} className="post-img img-fluid" />
              <div className="d-flex p-3 align-items-end justify-content-between w-100">
                <p style={{ marginTop: '10px' }}> {post.body} </p>
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