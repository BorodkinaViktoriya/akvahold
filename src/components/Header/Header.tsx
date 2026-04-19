"use client";
import React from "react";

import Image from 'next/image';
import {asset} from "@/lib/asset"
import {usePopup} from '@/context/PopupContext';
import {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import Button from "@/components/ui/Button/Button";
import {PHONE_NUMBER, PHONE_NUMBER_CLEAN} from '@/lib/constants/contacts';


const menuItems = [
  {label: "Модели", href: "#models"},
  {label: "Покупателям", href: "#buyers"},
  {label: "Контакты", href: "#contacts"},
  {label: "Вопросы", href: "#faq"},
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const {open} = usePopup();

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Блокировка скролла body
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Active link при скролле (с IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection: string | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Берём id секции
            const id = entry.target.id;
            if (id && !id.startsWith('_R_')) {      // игнорируем внутренние React id
              visibleSection = `#${id}`;
            }
          }
        });

        // Если ничего не видно — проверяем, находимся ли мы в самом низу страницы
        if (!visibleSection) {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const pageHeight = document.documentElement.scrollHeight;

          if (scrollY + viewportHeight + 200 >= pageHeight) {
            const lastItem = menuItems[menuItems.length - 1];
            visibleSection = lastItem.href;
          }
        }

        if (visibleSection) {
          setActive(visibleSection);
        }
      },
      {
        // Настройки наблюдателя — самое важное!
        rootMargin: "-80px 0px -20px 0px",   // верхний отступ 80px, нижний -120px
        threshold: 0.1                         // 10% видимости достаточно
      }
    );

    // Наблюдаем за всеми секциями из меню
    menuItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        observer.observe(section);
      }
    });

    // Начальная проверка (на случай, если уже внизу страницы)
    setTimeout(() => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollY + viewportHeight + 250 >= pageHeight) {
        const lastItem = menuItems[menuItems.length - 1];
        setActive(lastItem.href);
      }
    }, 300);

    // Cleanup
    return () => observer.disconnect();
  }, [menuItems]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Десктоп меню */}
        <nav className={styles.desktopNav} aria-label="Основная навигация">
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={clsx(styles.link, {
                    [styles.active]: active === item.href,
                  })}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Десктоп контакты */}
        <div className={styles.contacts}>

          <a href={`tel:${PHONE_NUMBER_CLEAN}`} className={styles.phone}>
            {PHONE_NUMBER}
          </a>
          <Button heightClass='xs' className={styles.callback} onClick={open}>
            Заказать звонок
          </Button>
        </div>
        {/* Лого */}
        <div>
          <Image
            src={asset("/images/logo.png")}
            alt="Good Line"
            width={190}
            height={35}
            priority
            style={{objectFit: "contain"}}
          />
        </div>
        {/* Бургер */}
        <button
          className={clsx(styles.burger, {[styles.open]: isOpen})}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
        >
          <span/>
          <span/>
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={clsx(styles.mobileMenu, {[styles.open]: isOpen})}>

        <div className={styles.mobileMenuContent}>
          <nav aria-label="Мобильная навигация">
            <ul className={styles.mobileMenuList}>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={clsx(styles.link, {
                      [styles.active]: active === item.href,
                    })}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileContacts}>
            <a href={`tel:${PHONE_NUMBER_CLEAN}`} className={styles.phone}>
              {PHONE_NUMBER}
            </a>
            <Button heightClass="xs" className={styles.mobileButton} onClick={() => {
              setIsOpen(false);
              setTimeout(() => {
                open();
              }, 100); // подождать 100мс пока меню начнет исчезать
            }}>
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
