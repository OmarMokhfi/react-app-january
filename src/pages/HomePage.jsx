import React from "react";
import { getPosts } from "../lib/posts";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  // STEP 3: Fetching all posts
  // in future we can have it fetch the posts from Backend
  const posts = getPosts();
  return (
    <div>
      {posts.map((item, index) => (
        <div key={index}>
          {/* STEP 4: Adding navigation to the post slug */}
          {/* Eg: /posts/page-1 and /posts/page-2 */}
          <NavLink to={"/posts/" + item.slug}>
            <button>Go To post {item.id}</button>{" "}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

const getSomething = () => (
  <div>
    <p></p>
    <h2></h2>
  </div>
);
