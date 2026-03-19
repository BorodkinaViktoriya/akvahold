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
      <div
        className={styles.row} >
        { reviews.map((card , index) => (
          <div className={styles.row__card} key={index} >
            <h5 className={styles.row__title}>
              {card.title}
            </h5>
            <p className={styles.row__text}>
              {card.text}
            </p>
            <p className={styles.row__number}>
              {card.value}
            </p>
          </div>
        ))
        }
      </div>
      <button className={styles.row__button}>Узнать подробнее</button>
    </section>
  )
}
