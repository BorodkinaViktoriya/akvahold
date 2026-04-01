"use client";

import { useState } from 'react';
import clsx from 'clsx';
import styles from './Accordion.module.scss';

interface Item {
  question: string;
  answer: string[]
}

interface AccordionProps {
  items: Item[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className={styles.item}>
            <button
              className={styles.header}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-label={item.question}
            >
              <span className={styles.question}>
                {item.question}
              </span>

              {/* SVG стрелка */}
              <svg
                className={clsx(styles.icon, {
                  [styles.open]: isOpen
                })}
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div
              className={clsx(styles.content, {
                [styles.open]: isOpen
              })}
            >
              <div className={styles.inner}>
                {item.answer.map((text, i) => (
                  <p key={i} className={styles.text}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
