import React from 'react';

const SinglePost = ({ post }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-4">
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.text }} />
      </div>
    </div>
  </div>
);

export default SinglePost;
