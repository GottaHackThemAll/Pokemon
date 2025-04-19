import React from 'react';
import '../index.css';

const Forum = () => {
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
    <div className="forum-container">
      {/* Your post section */}
      <div className="your-post">
        <h2>Your Submission</h2>
        <img src="https://via.placeholder.com/200" alt="Your Dish" style={{ borderRadius: '10px', width: '100%', marginTop: '10px' }} />
        <p style={{ marginTop: '10px' }}>This was my take on the Moroccan Tagine recipe 🌿</p>
      </div>

      {/* Others' posts section */}
      <div className="others-header">See what others made</div>
      <div className="posts-container">
        {otherPosts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.photo} alt="User Post" />
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;