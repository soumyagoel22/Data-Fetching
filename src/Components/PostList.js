import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://5d5a363e2257cc001496230a.mockapi.io/data")
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("Error in Retreiving Data");
      });
  }, []);

  return (
    <React.Fragment>
      <span style={{ textAlign: "center" }}>
        <h3>List Of Posts</h3>
        <div>{error}</div>
      </span>
      <div className="wrapper">
        {post.length
          ? post.map((post) => (
              <div key={post.id}>
                <img
                  className="img1"
                  src={post.avatar}
                  alt={post.description}
                />
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                  {post.title}
                </div>
              </div>
            ))
          : null}
      </div>
    </React.Fragment>
  );
};

export default PostList;
