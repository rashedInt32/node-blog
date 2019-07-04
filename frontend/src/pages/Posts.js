import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:3900/api/posts/';

const Posts = ({history}) => {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const {data} = await axios.get(url);
    return setPosts(data);
  }

  const getSinglePost = async (id) => {
    const { data } = await axios.get(`http://localhost:3900/api/posts/post/${id}`)
    const post = data[0];
    history.push(`/post/${id}`, { post });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="pt-3 pb-3">Posts</h2>
          {posts.map(post => <div className="card mb-2" key={post._id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.text}</p>
              <Link
                to={{
                  pathname: `/post/${post._id}`,
                  state: { post }
                }}
              >View Post</Link>

              <p onClick={() => getSinglePost(post._id)}>View Post</p>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Posts;
