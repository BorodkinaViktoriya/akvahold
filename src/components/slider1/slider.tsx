"use client";

import { useState } from "react";
import styles from "./SimpleSlider.module.scss";
import { slides } from "@/lib/constants/kupeli-slides";


export default function SimpleSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goTo = (index: number) => {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        setActiveIndex(index);
    };

    const goPrev = () => goTo(activeIndex - 1);
    const goNext = () => goTo(activeIndex + 1);

    const currentSlide = slides[activeIndex];

    return (
        <section className={styles.slider}>
            {/* Слайд с фоном */}
            <div
    className={styles.slide}
    style={{ backgroundImage: `url(${currentSlide.image})` }}
>console.log('currentSlide.image:', currentSlide.image);
    {/* Верхние кнопки переключения по центру */}
    <div className={styles.leftNav}>
        {slides.map((slide, index) => (
                <button
                    key={slide.id}
            type="button"
            onClick={() => goTo(index)}
    className={`${styles.leftNavButton} ${
        index === activeIndex ? styles.leftNavButton_active : ""
    }`}
    aria-label={`Показать слайд ${index + 1}`}
    aria-current={index === activeIndex}
>
                  <span className={styles.top}>{slide.title}</span>
                  <span className={styles.bottom}>{slide.subtitle}</span>
    </button>
))}
    </div>

    {/* Название сверху по центру (внутри слайда) */}
              <div className={styles.container}>
    <h2 className={styles.maintitle}>{currentSlide.title}</h2>
              <p className={styles.subtitle}>{currentSlide.subtitle}</p>
                </div >
    {/* Описание снизу по центру */}
    <p className={styles.description}>{currentSlide.description}</p>

    {/* Стрелки снизу слева/справа */}
    <div className={styles.arrows}>
    <button
        type="button"
    onClick={goPrev}
    className={styles.arrowButton}
    aria-label="Предыдущий слайд"
        >
      ⟵
          </button>
          <button
    type="button"
    onClick={goNext}
    className={styles.arrowButton}
    aria-label="Следующий слайд"
        >
            ⟶
          </button>
          </div>
          </div>
          </section>
);
}
