"use client";

import styles from "./CardsRow.module.scss"
import Button from "@/components/ui/Button/Button";

interface CardsRowProps {
  cards: {
    value: string
    title: string
    text: string
  }[];
}

export default function CardsRow({cards}: CardsRowProps) {
  return (
    <div className={styles.section} >
      <ul
        className={styles.row} >
      { cards.map((card , index) => (
        <li className={styles.row__card}key={index} >
        <article  >
          <h2 className={styles.row__title}>
            {card.title}
          </h2>
          <p >
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
      <Button
        variant="default"
        heightClass="big"
        className={styles.row__button}
        ariaLabel="Подобрать купель"
      >Подобрать купель
      </Button>
    </div>
  )
}
