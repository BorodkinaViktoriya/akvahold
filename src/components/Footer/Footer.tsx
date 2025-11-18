// src/components/Footer.tsx
import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>О компании</h2>
                    <p className={styles.text}>
                        Бренд X — премиальные кожаные изделия ручной работы. Работаем с
                        2015 года, используем только отборные материалы и продуманную
                        фурнитуру.
                    </p>
                </section>

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>Контакты</h2>
                    <p className={styles.text}>
                        Телефон:{" "}
                        <a href="tel:+79990000000" className={styles.link}>
                            +7 (999) 000-00-00
                        </a>
                    </p>
                    <p className={styles.text}>
                        Email:{" "}
                        <a href="mailto:info@example.com" className={styles.link}>
                            info@example.com
                        </a>
                    </p>
                    <p className={styles.text}>
                        Адрес шоурума: Москва, ул. Примерная, 1
                    </p>
                </section>

                <section className={styles.block}>
                    <h2 className={styles.blockTitle}>Меню</h2>
                    <ul className={styles.linksList}>
                        <li>
                            <a href="/privacy/" className={styles.link}>
                                Политика конфиденциальности
                            </a>
                        </li>
                        <li>
                            <a href="/offer/" className={styles.link}>
                                Публичная оферта
                            </a>
                        </li>
                        <li>
                            <a href="/sitemap.xml" className={styles.link}>
                                Карта сайта
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <div className={styles.bottomBar}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Бренд X. Все права защищены.
        </span>
            </div>
        </footer>
    );
};
