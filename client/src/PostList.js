import React from 'react';
import map from 'lodash/map';

const postList = posts => (
  map(posts, post => (
    <div className="post">
      <div className="post user-name">{post.user_id}</div>
      <div className="post post-body">{post.text}</div>
    </div>
  ))
);

const PostList = props => (
  <div className="post-list">
    {props.posts ? postList(props.posts) : ''}
  </div>
);

export default PostList;
