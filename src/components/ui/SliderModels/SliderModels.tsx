"use client";

import Image from "next/image";

type SlideModels = {
  id: number;
  title: string;
  image: string;
  info: [
    {
      value: string;
      title: string;
      subtitle: string;
    }];
}

export const SlidesModels: SlideModels[] = [
  {
    id: 1,
    title: "SPA",
    image: "images/Kupeli/models/Good-LINE-SPA (transparent).png",
    info: [
      {
        value: "3",
        title: "кВт",
        subtitle: "мощность нагрева",
      },
      {
        value: "10 - 40",
        title: "°C",
        subtitle: "регулируемый температурный диапазон ",
      },
      {
        value:"4 - 8",
        title: "мест",
        subtitle: "вместимость",
      },
      {
        value: "4 - 8",
        title: "мест",
        subtitle: "вместимость",
      }
    ]
  },
  {
    id: 2,
    title: "PREMIUM",
    image: "images/Kupeli/models/Good LINE PREMIUM (transparent).png",
    info: [
      {
        value: "5",
        title: "кВт",
        subtitle: "мощность нагрева",
      },
      {
        value: "5",
        title: "кВт",
        subtitle: "мощность нагрева",
      },
    ]
  },
  {
    id: 3,
    title: "PREMIUM-E (электро)",
    image: "images/Kupeli/models/Good LINE PREMIUM-E (transparent).png",
    info: [
      {
        value: "3",
        title: "кВт",
        subtitle: "мощность нагрева",
      },
      {
        value: "10 - 40",
        title: "°C",
        subtitle: "регулируемый температурный диапазон ",
      },
      {
        value: "4 - 8",
        title: "мест",
        subtitle: "вместимость",
      },
      {
        value: "4 - 8",
        title: "мест",
        subtitle: "вместимость",
      }
    ]
  },


];

import {useState, useEffect, useRef} from "react";
import styles from "./SliderModels.module.scss";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
/*import {slides} from "@/lib/constants/kupeli_main";*/

export default function SliderModels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (index < 0) index = SlidesModels.length - 1;
    if (index >= SlidesModels.length) index = 0;
    setActiveIndex(index);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const currentSlide = SlidesModels[activeIndex];

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
        <p className={styles.description}>модельный ряд</p>

        <div ref={navRef} className={styles.navigation}>
          {SlidesModels.map((slide, index) => (
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
             {slide.title}
            </button>
          ))}
        </div>
        <div className={styles.image_container} key={activeIndex}>
          <Image alt="Слайд"
                 className={styles.imageFade}
                 fill src={currentSlide.image}
          />
        </div>
        <div className={styles.info}>
          {currentSlide.info.map((item, index) => (
            <div key={index} className={styles.infoItem}>
              <p >{item.value}</p>
              <p>{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <p>от 541 000 р</p>
        <button >о модели
          </button >
          <button >прайс лист
            </button >
        </div>
        {/*<div className={styles.actions}>
          {currentSlide.info.map((item, index) => (
            <div key={index} className={styles.infoItem}>
              <p >{item.value}</p>
              <p>{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>*/}
      </div>
    </section>
  );
}

