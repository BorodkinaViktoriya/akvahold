"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./CardSlider.module.scss";
import { asset } from "@/lib/asset";
import { Card } from "@/lib/constants/kupeli_main.ts";

export default function CardSlider({ cards }: { cards: Card[] }) {
  const [index, setIndex] = useState(0);
const CARD_WIDTH = 345;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

const maxIndex = cards.length - 1;

const goNext = () => {
  setIndex((prev) => Math.min(prev + 1, maxIndex));
};

const goPrev = () => {
  setIndex((prev) => Math.max(prev - 1, 0));
};

return (
  <div className={styles.slider}>

    <div className={styles.arrows}>
      <button
        type="button"
        onClick={goPrev}
        className={styles.arrowButton}
        aria-label="Предыдущий слайд"
        disabled={index === 0}
      >
        <Image
          width={65}
          height={32}
          style={{ objectFit: 'contain' }}
          src={"images/arrow.svg"}
          alt="arrow"
        />
      </button>
      <button
        type="button"
        onClick={goNext}
        className={`${styles.arrowButton} ${styles.arrowButton_right}`}
        aria-label="Следующий слайд"
        disabled={index === maxIndex}
      >
        <Image
          width={65}
          height={32}
          style={{ objectFit: 'contain' }}
          src={"images/arrow.svg"}
          alt="arrow"
        />
      </button>
    </div>
    <div className={styles.viewport}>
      <div
        className={styles.track}
        style={{
          transform: `translateX(-${index * STEP}px)`
        }}
      >
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className={styles.image}
              />
            </div>

            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.subtitle}>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
