import React from 'react';

const SinglePost = ({ post }) =>
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-4">
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
    </div>
  </div>

export default SinglePost;
