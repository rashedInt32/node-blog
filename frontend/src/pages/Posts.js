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
    <div>
      {posts.map(post => <h1 key={post._id}>{post.title}</h1>)}
    </div>
  )
}

export default Posts;
