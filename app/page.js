import React from "react";
import BlogCard from "../components/BlogCard";
import styles from "./styles.module.css";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/post?limit=10");

  return response.json();
}

async function Home() {
  const { posts } = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <div className={styles.blogContainer}>
          <BlogCard key={post.id} {...post} />
        </div>
      ))}
    </div>
  );
}

export default Home;
