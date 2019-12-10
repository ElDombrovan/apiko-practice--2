import React, { useState } from "react";

import PostList from "./PostList";
import SearchBar from "./SearhBar";

import MoreButton from "./MoreButton";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

import "../styles.css";

export const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts/";
  const result = useFetch(API_URL);

  const perPage = 10;
  const [limit, setLimit] = useState(perPage);

  const [query, setQuery] = useState("");

  const isMoreButtonShown =
    result.response && result.response.length >= limit + perPage;
  return (
    <div className="App">
      <nav>
        <SearchBar setQuery={setQuery} />
      </nav>
      <h1>posts</h1>

      {!result.response ? (
        <Loader />
      ) : (
        <PostList posts={result.response} limit={limit} query={query} />
      )}

      {isMoreButtonShown && (
        <MoreButton perPage={perPage} setLimit={setLimit} limit={limit} />
      )}
    </div>
  );
};
