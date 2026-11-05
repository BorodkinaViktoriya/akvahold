"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import {asset} from "@/lib/asset";
import Button from "@/components/ui/Button/Button";
import {usePopup} from '@/context/PopupContext';

export default function Hero() {
  const {open} = usePopup();

  return (<section className={styles.hero}>
    <picture className={styles.imageWrapper}>
      {/* Мобильная картинка для экранов <1000px */}
      <source
        srcSet={asset("/images/kupeli/hv4.jpg")}
        media="(max-width: 750px)"
      />
      {/* Десктопная картинка по умолчанию */}
      <Image
        className={styles.hero__img}
        unoptimized
        src={asset("/images/kupeli/h4.jpg")}
        fill
        alt=" Премиальная деревянная купель Good Line на улице зимой с подсветкой, окруженная заснеженными деревьями."
        priority
      />
    </picture>
    <div className={styles.hero__banner}>
      <h1 className={styles.hero__heading}>
    <span className={styles.hero__title}>
      Good Line
    </span>

        <span className={styles.hero__subtitle}>
        <span>Производим</span>
        <span>премиальные купели</span>
        <span>для круглогодичного отдыха</span>
          </span>
      </h1>

      {/* <h1 className={styles.hero__title}>Good Line</h1>
        <h2 className={styles.hero__subtitle}>

         <span>Производим</span>
          <span>премиальные купели</span>

          <span>для круглогодичного отдыха</span>

        </h2>*/}
      <Button
        variant="default"
        heightClass="big"
        className={styles.hero__button}
        ariaLabel="Получить консультацию"
        onClick={open}
      >Получить консультацию
      </Button>

    </div>
  </section>);
}
