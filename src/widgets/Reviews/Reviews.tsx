"use client";

import Image from "next/image";
import styles from "./Reviews.module.scss"
import {asset} from "@/lib/asset";

interface FeedbacksProps {
  reviews: {
    img: string
    occupation : string
    name: string
    calling : string
    review: string
  }[];
}

export default function Reviews({ reviews }: FeedbacksProps) {
  return (
    <div className={styles.section}>
      <ul
        className={styles.row} >
        { reviews.map((review , index) => (
          <li key={index} className={styles.item}  >
          <article className={styles.article}  >
            <h3 className={styles.occupation}>
              {review.occupation}
            </h3>
            <div className={styles.imageWrapper}>
              <Image
                alt={review.name}
                fill
                src={asset(review.img)}
                className={styles.foto}
              />
            </div>
            <p className={styles.name} >
              {review.name}
            </p>
            <p className={styles.calling} >
              {review.calling}
            </p>
            <p className={styles.review} >
              {review.review}
            </p>

          </article>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
