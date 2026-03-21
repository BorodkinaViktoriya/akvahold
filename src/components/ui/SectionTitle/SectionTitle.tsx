import styles from "@/components/ui/SectionTitle/SectionTitle.module.scss";

type SectionTitleProps = {
  highlight: string
  text: string
}

export default function SectionTitle({ highlight, text }: SectionTitleProps) {
  return (
      <h2 className={styles.section__title}>
        <span>{highlight}</span>
        {text}
      </h2>
  )
}
