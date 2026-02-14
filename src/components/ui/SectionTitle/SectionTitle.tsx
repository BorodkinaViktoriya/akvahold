import styles from "@/components/ui/SectionTitle/SectionTitle.module.scss";

type SectionTitleProps = {
  highlight: string
  text: string
  isDark: boolean
}

export default function SectionTitle({ highlight, text, isDark }: SectionTitleProps) {
  return (
    <section className={`${styles.section__wrapper} ${isDark ? styles.section__wrapper_dark: ''}`} >
      <h2 className={styles.section__title}>
        <span>{highlight}</span>
        {text}
      </h2>
    </section>
  )
}
