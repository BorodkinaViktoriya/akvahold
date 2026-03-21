"use client";

import Image from "next/image";
import {asset} from "@/lib/asset";
import {useState, useEffect, useRef} from "react";
import styles from "./SliderTwoTitles.module.scss";

type features = {
  id: number;
  title: string;
  image: string;
  info: string;
}

export const TubFeatures: features[] = [
  {
    id: 1,
    title: "Продуманная инженерия",
    image: "/images/kupeli/specs/ingeneer.png",
    info: "Инженерная система купели создана для спокойной эксплуатации круглый год. Она уверенно работает зимой и летом, а продуманное расположение узлов и быстроразъёмные соединения позволяют легко обслуживать и обновлять оборудование при необходимости",
  },
  {
    id: 2,
    title: "Электробезопасность",
    image: "/images/kupeli/specs/electro.png",
    info: "Система электробезопасности продумана до мелочей. Герметичный электрощиток IP65 с дифференциальным автоматом контролирует утечки тока и короткие замыкания, автоматически обесточивая купель за доли секунды при возникновении опасной ситуации",
  },
  {
    id: 3,
    title: "Обогрев слива",
    image: "/images/kupeli/specs/out.png",
    info: "Система обогрева слива рассчитана на уверенную зимнюю эксплуатацию. Саморегулирующийся греющий кабель защищает слив от замерзания, позволяя без лишних действий слить купель даже в морозы. В тёплый сезон обогрев можно полностью отключить",
  },
  {
    id: 4,
    title: "Эффект термоса",
    image: "/images/kupeli/specs/termos.png",
    info: "Купель с продуманной теплоизоляцией обеспечивает стабильный комфорт. Вода быстрее прогревается, дольше остаётся тёплой и медленно остывает после купания, позволяя наслаждаться купанием в любой момент",
  },
  {
    id: 5,
    title: "Удобная лестница",
    image: "/images/kupeli/specs/ladder.png",
    info: "Продуманная лестница делает вход в купель лёгким и безопасным. Правильная общая высота и удобные ступени позволяют людям любого возраста погружаться без спешки и лишних усилий, а кедровая конструкция остаётся прочной и надёжной",
  },
  {
    id: 6,
    title: "Техническая дверца",
    image: "/images/kupeli/specs/door.png",
    info: "Техническая дверца обеспечивает удобный доступ к оборудованию, оставаясь незаметной для глаз. Замок защищает от посторонних, а элегантная конструкция сохраняет чистые линии купели и ощущение порядка и комфорта",
  },
];

export default function SliderTwoTitles() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (index < 0) index = TubFeatures.length - 1;
    if (index >= TubFeatures.length) index = 0;
    setActiveIndex(index);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const currentSlide = TubFeatures[activeIndex];

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
        <p className={styles.description}>конструктивное превосходство</p>
        <h2 className={styles.title}>{currentSlide.title}</h2>

        <div ref={navRef} className={styles.navigation}>
          {TubFeatures.map((slide, index) => (
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
          <Image alt={currentSlide.title}
                 className={styles.imageFade}
                 fill
                 src={asset(currentSlide.image)}
          />
        </div>
        <p className={styles.info}>{currentSlide.info}</p>
        <div className={styles.arrows}>
          <button
            type="button"
            onClick={goPrev}
            className={styles.arrowButton}
            aria-label="Предыдущий слайд"
          >
            <svg
              width="66"
              height="32"
              viewBox="0 0 66 32"
              style={{color: "white"}}
            >
              <path
                d="M9.89585 9L2 16M2 16L9.89585 23M2 16H64"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className={styles.arrowButton}
            aria-label="Следующий слайд"
          >
            <svg
              width="66"
              height="32"
              viewBox="0 0 66 32"
              style={{color: "white", transform: "rotate(180deg)"}}
            >
              <path
                d="M9.89585 9L2 16M2 16L9.89585 23M2 16H64"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

