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
          {posts.map(post => <div class="card mb-2" key={post._id}>
            <div class="card-body">
              <h5 class="card-title">{post.title}</h5>
              <p class="card-text">{post.text}</p>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Posts;
