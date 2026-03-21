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
      <ul
        className={styles.row} >
      { cards.map((card , index) => (
        <li className={styles.row__card}key={index} >
        <article  >
          <h2 className={styles.row__title}>
            {card.title}
          </h2>
          <p className={styles.row__text}>
            {card.text}
          </p>
          <p className={styles.row__number}>
            {card.value}
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
