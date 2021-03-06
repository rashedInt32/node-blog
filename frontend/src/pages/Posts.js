import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { config } from "../config";

const url = `${config.url}/posts/`;

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
    id = data[0].title.split(' ').join('-');
    history.push(`/post/${id}`, { post });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="pt-3 pb-3">Posts</h2>
          {posts.map(post => (
            <div className="card mb-2" key={post._id}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <div
                  className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: post.text
                  }}
                />

                <p onClick={() => getSinglePost(post._id)}>View Post</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
