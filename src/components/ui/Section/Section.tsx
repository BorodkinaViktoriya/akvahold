import styles from "./Section.module.scss";
import clsx from "clsx";

type SectionProps = {
  title?: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "brown" | "gray";
  className?: string;
};

export default function Section({
                          title,
                          children,
                          variant = "default",
                          className,
                        }: SectionProps) {
  return (
    <section
      className={clsx(
        styles.section,
        styles[`section_${variant}`],
        className
      )}
    >
      {title}
        {children}
    </section>
  );
}
