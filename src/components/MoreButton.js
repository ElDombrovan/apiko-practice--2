import React from "react";

const MoreButton = ({ perPage, limit, setLimit }) => {
  return (
    <button className="button-more" onClick={() => setLimit(limit + perPage)}>
      Load more
    </button>
  );
};

export default MoreButton;
