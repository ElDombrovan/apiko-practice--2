import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts, limit, query }) => {
  return (
    <div className="container-content">
      {posts
        .filter(item => item.title.includes(query) || item.body.includes(query))
        .slice(0, limit)
        .map(post => (
          <PostListItem
            key={post.id}
            title={post.title}
            id={post.id}
            text={post.body}
          />
        ))}
    </div>
  );
};

export default PostList;
