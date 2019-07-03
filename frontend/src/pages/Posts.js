import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:3900/api/posts/';

const Posts = () => {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const result = await axios.get(url);
    console.log(result);
    return setPosts(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="pt-3 pb-3">Posts</h2>
          {posts.map(post => <div className="card mb-2" key={post._id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.text}</p>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Posts;
