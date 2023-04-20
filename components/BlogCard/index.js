import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

function BlogCard() {
  return (
    <Link href="/">
      <div className={styles.imageWrapper}>
        <Image src="https://picsum.photos/96/96" alt="Blog resmi" fill />
      </div>

      <div>//Başlık //Detay</div>
    </Link>
  );
}

export default BlogCard;
