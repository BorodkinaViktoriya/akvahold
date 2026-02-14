// src/components/Header.tsx
import React from "react";
import styles from "./Header.module.scss";

/*<nav> СЕМАНТИЧНАЯ НАВИГАЦИЯ
  <ul>
    <li><a href="/about">О нас</a></li>
    <li><a href="/blog">Блог</a></li>
    <li><a href="/contact">Контакты</a></li>
  </ul>
</nav>*/   //TODO передклать с nav

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo} aria-label="На главную Good Line">
                    <img src="/images/logo.png" alt="Good Line" />
                </a>

                <nav className={styles.nav} aria-label="Основная навигация">
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="/catalog/" className={styles.navLink}>
                                Каталог
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/about/" className={styles.navLink}>
                                О бренде
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/delivery/" className={styles.navLink}>
                                Доставка и оплата
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/contacts/" className={styles.navLink}>
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
