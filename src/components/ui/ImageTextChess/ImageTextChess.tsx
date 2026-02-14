import Image from "next/image"
import styles from "./ImageTextChess.module.scss"

import { items, FeatureItem } from "@//lib/constants/kupeli_main"

export const ImageTextChess = () => {
  return (
    <div className={styles.list}>
      {items.map((item: FeatureItem, index: number) => (
        <section
          key={index}
          className={`${styles.featureBlock} ${
            index % 2 === 1 ? styles.reverse : ""
          }`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={item.image}
              alt={item.title}
              width={760}
              height={860}
            />
          </div>

          <div className={styles.content}>
            <h3 className={styles.chess__title}>{item.title}</h3>
            {item.text.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ImageTextChess
