"use client";

import Image from "next/image";

type models = {
  id: number;
  title: string;
  image: string;
  price: string;
  info: { value: string; unit: string; label: string }[];
}

export const TubModels: models[] = [
  {
    id: 1,
    title: "SPA",
    image: "images/kupeli/models/spa.png",
    price: "от 541 000 р",
    info: [
      {
        value: "45",
        unit: "КВт",
        label: "мощность печи",
      },
      {
        value: "2-4",
        unit: "часа",
        label: "время нагрева",
      },
      {
        value: "4-8",
        unit: "мест",
        label: "вместимость",
      },
      {
        value: "3",
        unit: " ",
        label: "типоразмера",
      },
      {
        value: "3",
        unit: " ",
        label: "базовых цвета",
      },
      {
        value: "1100",
        unit: "мм",
        label: "глубина чаши",
      }
    ]
  },
  {
    id: 2,
    title: "Premium",
    image: "images/kupeli/models/premium.png",
    price: "от 550 000 р",
    info: [
      {
        value: "35",
        unit: "КВт",
        label: "мощность печи",
      },
      {
        value: "3-4",
        unit: "часа",
        label: "время нагрева",
      },
      {
        value: "4-8",
        unit: "мест",
        label: "вместимость",
      },
      {
        value: "2",
        unit: " ",
        label: "типоразмера",
      },
      {
        value: "3",
        unit: " ",
        label: "базовых цвета",
      },
      {
        value: "1100",
        unit: "мм",
        label: "глубина чаши",
      }
    ]
  },
  /*,
  {
    id: 3,
    title: "BOOST",
    image: "images/kupeli/models/boost.png",
    price: "от 500 000 р",
    info: [
      {
        value: "35",
        unit: "КВт",
        label: "мощность печи",
      },
      {
        value: "2-3",
        unit: "часа",
        label: "время нагрева",
      },
      {
        value: "4-6",
        unit: "мест",
        label: "вместимость",
      },
      {
        value: "2",
        unit: " ",
        label: "типоразмера",
      },
      {
        value: "3",
        unit: " ",
        label: "базовых цвета",
      },
      {
        value: "1100",
        unit: "мм",
        label: "глубина чаши",
      }
    ]
  },*/ /*{
    id: 4,
    title: "Quadro",
    image: "images/kupeli/models/quadro.png",
    price: "от 580 000 р",
    info: [
      {
        value: "70",
        unit: "КВт",
        label: "мощность печи",
      },
      {
        value: "3-4",
        unit: "часа",
        label: "время нагрева",
      },
      {
        value: "6",
        unit: "мест",
        label: "вместимость",
      },
      {
        value: "1",
        unit: " ",
        label: "типоразмера",
      },
      {
        value: "3",
        unit: " ",
        label: "базовых цвета",
      },
      {
        value: "1100",
        unit: "мм",
        label: "глубина чаши",
      }
    ]
  }, *//*{
    id: 5,
    title: "Kids",
    image: "images/kupeli/models/kids.png",
    price: "от 520 000 р",
    info: [
      {
        value: "45",
        unit: "КВт",
        label: "мощность печи",
      },
      {
        value: "2-3",
        unit: "часа",
        label: "время нагрева",
      },
      {
        value: "4-6",
        unit: "мест",
        label: "вместимость",
      },
      {
        value: "2",
        unit: " ",
        label: "типоразмера",
      },
      {
        value: "3",
        unit: " ",
        label: "базовых цвета",
      },
      {
        value: "750",
        unit: "мм",
        label: "глубина чаши",
      }
    ]
  },*/
  {
    id: 3,
    title: "Electro",
    image: "images/kupeli/models/premium-e.png",
    price: "от 575 000 р",
    info: [
      {
        value: "3",
        unit: "кВт",
        label: "мощность нагрева",
      },

      {
        value: "10-40",
        unit: "°C",
        label: "регулируемый температурный диапазон",
      },
      {
        value: "4 - 8",
        unit: "мест",
        label: "вместимость",
      },
      {
        value: "2",
        unit: " ",
        label: "типоразмера",
      },
      {
        value: "4500",
        unit: "₽/мес",
        label: "расходы на электроэнергию",
      },
      {
        value: "90",
        unit: "Вт",
        label: "мощность системы фильтрации",
      },

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
    if (index < 0) index = TubModels.length - 1;
    if (index >= TubModels.length) index = 0;
    setActiveIndex(index);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const currentSlide = TubModels[activeIndex];

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
          {TubModels.map((slide, index) => (
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
                 fill
                 src={currentSlide.image}
          />
        </div>
        <div className={styles.actions}>
        <p className={styles.price} key={`price-${activeIndex}`}>{currentSlide.price}</p>
          <button className={styles.consult}>получить консультацию
          </button>
          <button className={styles.prices}>прайс-лист
          </button>
        </div>

        <div className={styles.info} key={`info-${activeIndex}`}>
          {currentSlide.info.map((item, index) => (
            <div key={index} className={styles.infoItem}>
              <p className={styles.value}>{item.value}<span className={styles.unit}>{item.unit}</span></p>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

