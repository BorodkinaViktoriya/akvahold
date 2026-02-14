"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {

  return (
    <section className={styles.hero}>
      <picture className={styles.imageWrapper}>
        {/* Мобильная картинка для экранов <1000px */}
        <source
          srcSet="/images/Kupeli/kupeli-hero-vert.jpg"
          media="(max-width: 750px)"
        />
        {/* Десктопная картинка по умолчанию */}
        <Image
          src="/images/Kupeli/kupeliHero.jpg"
          fill
          alt="Деревянная купель Good Line, окруженная заснеженными деревьями и светящаяся ночью фиолетовыми и белыми огнями."
          className={styles.img}
          priority
        />
      </picture>
      <div className={styles.hero__banner}>
        <h1 className={styles.hero__title}>Good Line</h1>
        <h5 className={styles.hero__subtitle}>
          <span>Премиальные</span>
          <span>горячие купели</span>
          <span>для дома и бизнеса</span>
        </h5>
        <button
          type="button"
          /*onClick={}*/
          className={styles.hero__button}
          aria-label="Получить консультацию"
        > Получить консультацию
        </button>
      </div>

      {/*
       Слайд с фоном

      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      >
         Верхние кнопки переключения по центру
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

         Название сверху по центру (внутри слайда)
        <div className={styles.container}>
          <h2 className={styles.maintitle}>{currentSlide.title}</h2>
          <p className={styles.subtitle}>{currentSlide.subtitle}</p>
        </div >
         Описание снизу по центру
        <p className={styles.description}>{currentSlide.description}</p>

         Стрелки снизу слева/справа
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
      </div>*/}
    </section>
  );
}
