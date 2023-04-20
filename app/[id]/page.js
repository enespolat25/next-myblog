import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

async function getPost(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  return response.json();
}

async function Page({ params }) {
  const { id, title, body } = await getPost(params.id);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/id/${id}/960/400`}
          alt={title}
          fill
        />
      </div>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Page;
