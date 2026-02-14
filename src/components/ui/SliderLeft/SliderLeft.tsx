"use client";

import Image from "next/image";

type SlideLeft = {
  id: number;
  title: {
    strong: string;
    normal: string;
  };
  description: string[];
  image: string;
}

export const leftSlides: SlideLeft[] = [
  {
    id: 1,
    title: {
      strong: "Материалы,",
      normal: "проверенные временем",
    },
    description: [
      "Герметичная и прочная чаша из 8 мм УФ-стойкого полипропилена — долговечна, экологична и полностью безопасна для купания.",
      "Массив кедра и лиственницы подчёркивает естественную красоту и долговечность купели.",
      "Нержавеющая сталь добавляет изящный визуальный акцент и завершает образ изделия."
    ],
    image: "images/Kupeli/slider-left/ls1.jpg/",
  },
  {
    id: 2,
    title: {
      strong: "Эргономичная",
      normal: "чаша",
    },
    description: [
      "Глубина 1100 мм обеспечивает полное погружение плеч, делая отдых в воде максимально комфортным.",
      "Сиденья на высоте 450 мм и прямые стенки обеспечивают простор для ног и естественное положение коленей."
    ],
    image: "images/Kupeli/slider-left/ls2.jpg/",
  },
  {
    id: 3,
    title: {
      strong: "Борт-волнорез",
      normal: "из массива кедра",
    },
    description: [
      "Уникальный «П»-образный борт предотвращает перелив воды даже при активном купании и сохраняет комфортный уровень без лишнего долива и подогрева.",
      "Ширина борта 140 мм позволяет удобно размещать бокалы и аксессуары прямо на борту купели."
    ],
    image: "images/Kupeli/slider-left/ls3.jpg/",
  },
  /*{
    id: 4,
    title: {
      strong: "Продуманная",
      normal: "инженерия",
    },
    description: [
      "Всё доп. оборудование скрыто под обшивкой и доступно через запираемую техдверцу.",
      "Продуманная компоновка обеспечивает простое и удобное обслуживание.",
      "Влагозащищённый электрощиток с дифавтоматом отвечает за безопасность купания."
    ],
    image: "images/slider-test/slide-4.jpg",
  },*/
  {
    id: 4,
    title: {
      strong: "Премиальная",
      normal: "термокрышка",
    },
    description: [
      "Используем термокрышки LibeSpa с продуманной конструкцией и лучшими материалами.",
      "Наружный слой из яхтного винила защищает от влаги и солнца, а плотный утеплитель эффективно сохраняет тепло и выдерживает снеговые нагрузки."
    ],
    image: "images/Kupeli/slider-left/ls4.jpg/",
  },
  {
    id: 5,
    title: {
      strong: "Надежные печи",
      normal: "премиум-класса",
    },
    description: [
      "Используем печи LibeSpa — проверенные годами сотрудничества, надёжные и эффективные.",
      "Изготовлены из пищевой нержавеющей стали AISI 304, устойчивой к коррозии и нагрузкам (в отличие от AISI 430).",
      "Доступны стандартные и PRO-версии для повышенных нагрузок."
    ],
    image: "images/Kupeli/slider-left/ls5.jpg/",
  },
];

import {useState, useEffect, useRef} from "react";
import styles from "./SliderLeft.module.scss";
/*import {slides} from "@/lib/constants/kupeli_main";*/

export default function SliderLeft() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (index < 0) index = leftSlides.length - 1;
    if (index >= leftSlides.length) index = 0;
    setActiveIndex(index);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const currentSlide = leftSlides[activeIndex];

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
      >

        <div className={styles.arrows}>
          <button
            type="button"
            onClick={goPrev}
            className={styles.arrowButton}
            aria-label="Предыдущий слайд"
          >
            <img src="/images/arrow.svg" alt=""/>
          </button>
          <button
            type="button"
            onClick={goNext}
            className={`${styles.arrowButton} ${styles.arrowButton_right}`}
            aria-label="Следующий слайд"
          >
            <img src="/images/arrow.svg" alt=""/>
          </button>
        </div>
        <h4 className={styles.title}>
          {currentSlide.title.strong}
          <span className={styles.subtitle}>{currentSlide.title.normal}</span>
        </h4>
        <div className={styles.description}>
          {currentSlide.description.map((d, index) => (
            <p key={index}>{d}</p>
          ))}
        </div>
        <div ref={navRef} className={styles.navigation}>
          {leftSlides.map((slide, index) => (
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
          <Image alt="Слайд"
                 className={styles.imageFade}
                 fill src={currentSlide.image}
                 style={{objectFit: "cover"}}/>
        </div>
      </div>
    </section>
  );
}

