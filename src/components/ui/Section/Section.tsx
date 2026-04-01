import styles from "./Section.module.scss";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "brown" | "gray";
  className?: string;
};

export default function Section({
                                  id,
                                  title,
                                  children,
                                  variant = "default",
                                  className,
                                }: SectionProps) {
  return (
    <section
      id={id}
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
