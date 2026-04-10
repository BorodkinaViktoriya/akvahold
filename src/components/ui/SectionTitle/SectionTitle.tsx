import styles from "@/components/ui/SectionTitle/SectionTitle.module.scss";

type SectionTitleProps = {
  highlight: string
  text: string
  id?: string
}

export default function SectionTitle({ highlight, text, id }: SectionTitleProps) {
  return (
      <h2 className={styles.section__title} id={id}>
        <span>{highlight}</span>
        {text}
      </h2>
  )
}
