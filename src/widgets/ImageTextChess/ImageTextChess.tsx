import Image from "next/image"
import styles from "./ImageTextChess.module.scss"

export type ChessItem = {
  id: number
  image: string
  title: string
  alt: string
  text: string[]
}

export default function ImageTextChess ({items}: ChessItem) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <article
          key={index}
          className={`${styles.featureBlock} ${
            item.id % 2 === 1 ?  "" :  styles.reverse
          }`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={item.image}
              alt={item.alt}
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
        </article>
      ))}
    </div>
  )
}

