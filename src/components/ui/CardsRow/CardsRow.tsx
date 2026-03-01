"use client";

import styles from "./CardsRow.module.scss"

interface CardsRowProps {
  cards: {
    value: string
    title: string
    text: string
  }[];
}

export default function CardsRow({cards}: CardsRowProps) {
  return (
    <section className={styles.section} >
      <div
        className={styles.row} >
      { cards.map((card , index) => (
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
