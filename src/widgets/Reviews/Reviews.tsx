"use client";

import styles from "./Reviews.module.scss"

interface ReviewsProps {
  reviews: {
    img: string
    position : string
    name: string
    calling : string
    review: string
  }[];
}

export default function Reviews({reviews}: ReviewsProps) {
  return (
    <section className={styles.section} >
      <ul
        className={styles.row} >
        { reviews.map((review , index) => (
          <li key={index}>
          <article className={styles.review}  >
            <h5 className={styles.row__title}>
              {review.title}
            </h5>
            <p className={styles.row__text}>
              {review.text}
            </p>
            <p className={styles.row__number}>
              {review.value}
            </p>
          </article>
          </li>
        ))
        }
      </ul>
      <button className={styles.row__button}>Узнать подробнее</button>
    </section>
  )
}
