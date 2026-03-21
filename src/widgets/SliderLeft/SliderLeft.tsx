"use client";

import Image from "next/image";
import {useState, useEffect, useRef} from "react";
import styles from "./SliderLeft.module.scss";

interface SliderLeftProps {
  details: {
    id: number;
    title: { strong: string; normal: string; };
    description: string[];
    image: string;
    alt: string;
  }[];
}

export default function SliderLeft({ details }: SliderLeftProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (index < 0) index = details.length - 1;
    if (index >= details.length) index = 0;
    setActiveIndex(index);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const currentSlide = details[activeIndex];

  useEffect(() => {
    const container = navRef.current;
    // Выполняем только на экранах меньше 1000px
    if (typeof window !== "undefined" && window.innerWidth <= 1000) {
      const activeBtn = navRef.current?.querySelector(
        `.${styles.navigationButton_active}`
      ) as HTMLElement;

      if (container && activeBtn) {
        // Рассчитываем позицию: левый край кнопки + отступ 20px
        const targetScroll = activeBtn.offsetLeft - 20;

        // Плавно скроллим ТОЛЬКО контейнер кнопок
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);


  return (
    <section className={styles.slider}>

      <div
        className={styles.slide}
        aria-live="polite" aria-atomic="true"
      >

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
              style={{objectFit: 'contain'}}
              src={"images/arrow.svg"}
              alt="стрелка"
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
              style={{objectFit: 'contain'}}
              src={"images/arrow.svg"}
              alt="arrow"
            />
          </button>
        </div>
        <h3 className={styles.title}>
          {currentSlide.title.strong}
          <span className={styles.subtitle}>{currentSlide.title.normal}</span>
        </h3>
        <div className={styles.description}>
          {currentSlide.description.map((d, index) => (
            <p key={index}>{d}</p>
          ))}
        </div>
        <div ref={navRef} className={styles.navigation}>
          {details.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              className={`${styles.navigationButton} ${
                index === activeIndex ? styles.navigationButton_active : ""
              }`}
              aria-label={`Показать слайд ${index + 1}`}
              aria-current={index === activeIndex}
            >
              <span className={styles.top}>{slide.title.strong}</span>
              <span className={styles.bottom}>{slide.title.normal}</span>
            </button>
          ))}
        </div>
        <div className={styles.image_container} key={activeIndex}>
          <Image  alt={`${currentSlide.title.strong} ${currentSlide.title.normal}`}
                 className={styles.imageFade}
                 fill src={currentSlide.image}
                 style={{objectFit: "cover"}}/>
        </div>
      </div>
    </section>
  );
}

