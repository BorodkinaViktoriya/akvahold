// src/components/Header.tsx
import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo} aria-label="На главную Бренд X">
                    <img src="/images/logo.png" alt="Бренд X" />
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
