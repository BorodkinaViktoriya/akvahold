"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import { asset } from "@/lib/asset";
import Button from "@/components/ui/Button/Button";

export default function Hero() {

  return (
    <section className={styles.hero}>
      <picture className={styles.imageWrapper}>
        {/* Мобильная картинка для экранов <1000px */}
        <source
          srcSet={asset("/images/kupeli/kupeliHero-vert.jpg")}
          media="(max-width: 750px)"
        />
        {/* Десктопная картинка по умолчанию */}
        <Image
          unoptimized
          src={asset("/images/kupeli/kupeliHero.jpg")}
          fill
          alt=" Премиальная деревянная купель Good Line на улице зимой с подсветкой, окруженная заснеженными деревьями."
          className={styles.hero__img}
          priority
        />
      </picture>
      <div className={styles.hero__banner}>
        <h1 className={styles.hero__title}>Good Line</h1>
        <h2 className={styles.hero__subtitle}>

         <span>Производим</span>
          <span>премиальные купели</span>

          <span>для круглогодичного отдыха</span>

        {/*  <span>Премиальные</span>
          <span>горячие купели</span>
          <span>для дома и бизнеса</span>*/}
        </h2>
        <Button
          variant="default"
          heightClass="big"
          className={styles.hero__button}
          ariaLabel="Получить консультацию"
        >Получить консультацию
        </Button>

      </div>
    </section>
  );
}
