"use client";

import styles from "./CardsRow.module.scss"
import Button from "@/components/ui/Button/Button";
import {usePopup} from '@/context/PopupContext';


interface CardsRowProps {
  cards: {
    value: string
    title: string
    text: string
  }[];
}

export default function CardsRow({cards}: CardsRowProps) {
  const {open} = usePopup();

  return (
    <div className={styles.section}>
      <ul
        className={styles.row}>
        {cards.map((card, index) => (
          <li className={styles.row__card} key={index}>
            <article>
              <h2 className={styles.row__title}>
                {card.title}
              </h2>
              <p>
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
        onClick={open}
        className={styles.row__button}
        ariaLabel="Оставить заявку"
      >Оставить заявку
      </Button>
    </div>
  )
}
