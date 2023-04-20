import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

import { notFound } from "next/navigation";

async function getPost(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function Page({ params }) {
  const { id, title, body } = await getPost(params.id);

  if (!title) {
    return notFound();
  }

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
