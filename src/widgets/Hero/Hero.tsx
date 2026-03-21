"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import { asset } from "@/lib/asset";

export default function Hero() {

  return (
    <section className={styles.hero}>
      <picture className={styles.imageWrapper}>
        {/* Мобильная картинка для экранов <1000px */}
        <source
          srcSet={asset("/images/kupeli/kupeli-hero-vert.jpg")}
          media="(max-width: 750px)"
        />
        {/* Десктопная картинка по умолчанию */}
        <Image
          unoptimized
          src={asset("/images/kupeli/kupeliHero.jpg")}
          fill
          alt=" Премиальная деревянная купель Good Line на улице зимой с подсветкой, окруженная заснеженными деревьями."
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
    </section>
  );
}
