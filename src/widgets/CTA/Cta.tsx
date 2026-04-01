"use client";

import styles from "./Cta.module.scss";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { asset } from "@/lib/asset";

export default function Cta() {

  return (
    <section className={styles.cta}>
      <div className={styles.cta__image}>
        <Image
          src={asset("/images/kupeli/cta.jpg")}
          alt="Премиальная купель Good Line"
          fill
        />
      </div>

      <div className={styles.cta_content}>
        <h2 className={styles.cta_title}>
          <strong>Подарите себе</strong>
          <span className={styles.cta_title_offset}>
        безупречный отдых
      </span>
        </h2>

        <div className={styles.cta_text}>
          <p>
            Выберите идеальную купель Good Line для себя: комплектацию,
            материалы и цветовое решение.
          </p>
          <p>
            Купель, которая гармонично впишется в архитектуру и ландшафт,
            станет акцентом и украшением участка.
          </p>
        </div>
        <Button
          variant="default"
          heightClass="big"
          className={styles.cta_button}
          ariaLabel="Оставить заявку"
        >
          Оставить заявку
        </Button>

      </div>
    </section>
  );
}
