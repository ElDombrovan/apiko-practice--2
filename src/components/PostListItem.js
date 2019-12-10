import React from "react";

const PostListItem = props => {
  const { id, title, text } = props;

  return (
    <div className="container-post">
      <p>id: {id} </p>
      <h4>{title}</h4>
      <p>{text} </p>
    </div>
  );
};

export default PostListItem;
