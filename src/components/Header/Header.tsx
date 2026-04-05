"use client";
import React from "react";

import Image from 'next/image';
import { asset } from "@/lib/asset"

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import Button from "@/components/ui/Button/Button";

const menuItems = [
  { label: 'Модели', href: '#models' },
  { label: 'Покупателям', href: '#buyers' },
  { label: 'Контакты', href: '#contacts' },
  { label: 'Вопросы', href: '#faq' }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);

  // 👉 закрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // 👉 active link по скроллу
  useEffect(() => {
    const handleScroll = () => {
      let current = '';

      menuItems.forEach(item => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop - 100;
          if (window.scrollY >= top) {
            current = item.href;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header} ref={menuRef}>
      <div className={styles.container}>

        {/* ЛОГО */}

        <div >
        <Image
          src={"images/logo.png"}
          alt="Good Line"
          width={190}
          height={35}
          sizes="100vw"
          style={{objectFit: 'contain'}}/>
        </div>

        {/* НАВИГАЦИЯ */}
        <nav
          className={clsx(styles.nav, {
            [styles.open]: isOpen
          })}
        >
          <ul className={styles.menu}>
            {menuItems.map(item => (
              <li key={item.href} className={styles.label} >
                <a
                  href={item.href}
                  className={clsx({
                    [styles.active]: active === item.href
                  })}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* КОНТАКТЫ */}
        <div className={styles.contacts}>
          <a href="tel:+74993026143">+7 (499) 302-61-43</a>

          <Button
            variant="default"
            heightClass="small"
            ariaLabel="Получить консультацию"
            className={styles.callback}
          >Заказать звонок
          </Button>
        </div>

        {/* БУРГЕР */}
        <button
          className={styles.burger}
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Меню"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
};



/*
// src/components/Header.tsx
import React from "react";

import Image from 'next/image';
/!*import { asset } from "@/lib/asset";*!/

/!*<nav> СЕМАНТИЧНАЯ НАВИГАЦИЯ
  <ul>
    <li><a href="/about">О нас</a></li>
    <li><a href="/blog">Блог</a></li>
    <li><a href="/contact">Контакты</a></li>
  </ul>
</nav>*!/   //TODO передклать с nav

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo} aria-label="На главную Good Line">
          <Image
            src={"images/logo.png"}
            alt={"Good Line"}
            width={100}
            height={40}
            style={{objectFit: 'contain'}}/>
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
*/
