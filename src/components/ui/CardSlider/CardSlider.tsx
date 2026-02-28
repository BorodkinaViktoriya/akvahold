"use client";
import { useState, useRef, useEffect, useLayoutEffect  } from "react";
import Image from "next/image";
import styles from "./CardSlider.module.scss";
import { asset } from "@/lib/asset";
import { Card } from "@/lib/constants/kupeli_main";

export default function CardSlider({ cards }: { cards: Card[] }) {

  const viewportRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(0);

  // 📏 Получаем ширину карточки
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (firstCardRef.current) {
        // Прибавляем 20px к ширине
        const width = firstCardRef.current.offsetWidth + 20;
        setStep(width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

      const goNext = () => {
        viewportRef.current?.scrollBy({
          left: step,
          behavior: "smooth"
        });
      };

      const goPrev = () => {
        viewportRef.current?.scrollBy({
          left: -step,
          behavior: "smooth"
        });
      };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - viewport.offsetLeft;
      scrollLeft = viewport.scrollLeft;
      viewport.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      isDown = false;
      viewport.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDown = false;
      viewport.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const walk = x - startX;
      viewport.scrollLeft = scrollLeft - walk;
    };

    viewport.addEventListener("mousedown", handleMouseDown);
    viewport.addEventListener("mouseleave", handleMouseLeave);
    viewport.addEventListener("mouseup", handleMouseUp);
    viewport.addEventListener("mousemove", handleMouseMove);

    return () => {
      viewport.removeEventListener("mousedown", handleMouseDown);
      viewport.removeEventListener("mouseleave", handleMouseLeave);
      viewport.removeEventListener("mouseup", handleMouseUp);
      viewport.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

return (
  <div className={styles.slider}>

    <div className={styles.arrows}>
      <button
        type="button"
        onClick={goPrev}
        className={styles.arrowButton}
        aria-label="Предыдущий слайд"
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
    <div className={styles.viewport} ref={viewportRef}>

        {cards.map((card, i ) => (
          <div key={card.id} className={styles.card} ref={i === 0 ? firstCardRef : null} >
            <div className={styles.imageWrapper}>
              <Image
                src={asset(card.image)}
                alt={card.title}
                fill
                className={styles.image}
              />
            </div>

            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </div>
        ))}
      </div>

  </div>
);
}
