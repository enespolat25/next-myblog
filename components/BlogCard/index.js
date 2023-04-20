import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

function BlogCard({id,title,body}) {
  return (
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={`https://picsum.photos/id/${id}/96/96`} alt="Blog resmi" fill />
      </div>

      <div className={styles.cardBody}>
		<h3>{title}</h3>
		<p>{body}</p>
	  </div>
    </Link>
  );
}

export default BlogCard;
