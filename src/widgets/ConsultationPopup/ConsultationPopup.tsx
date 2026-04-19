'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './ConsultationPopup.module.scss';
import Button from "@/components/ui/Button/Button";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
  const [formData, setFormData] = useState({
    city: '',
    name: '',
    phone: '',
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const originalOverflowRef = useRef<string | null>(null);

  // Закрытие по клавише Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
//вариант 1
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed || isSubmitting) return;

    setIsSubmitting(true);

    // 1. Создаем FormData — MODX (AjaxForm) ожидает именно такой формат
    const body = new FormData();
    body.append('name', formData.name);
    body.append('phone', formData.phone);
    body.append('city', formData.city);

    // 2. Технические поля для AjaxForm (обязательно!)
    body.append('af_action', 'd6583993043e69310439c04901f4c7f0'); // любой хеш
    body.append('submit', '1'); // соответствует &submitVar=`submit` в вашем вызове

    try {
      // 3. Отправляем на основной домен (MODX)
      const response = await fetch('https://akvahold.ru/consultation', {
        method: 'POST',
        body: body,
      });

      // AjaxForm возвращает JSON
      const result = await response.json();

      if (result.success || response.ok) {
        alert('Спасибо! Ваша заявка успешно отправлена.');
        setFormData({ city: '', name: '', phone: '' });
        setIsAgreed(false);
        onClose();
      } else {
        alert('Ошибка: ' + (result.message || 'попробуйте позже'));
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Не удалось отправить форму. Проверьте соединение.');
    } finally {
      setIsSubmitting(false);
    }
  };

  //вариант 2

 /* const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed || isSubmitting) return;

    setIsSubmitting(true);

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('city', formData.city);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('agree', isAgreed ? '1' : '0');
    formDataToSend.append('submit', '1');

    try {
      const response = await fetch('https://akvahold.ru/ajax/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        onClose();
        setFormData({ city: '', name: '', phone: '' });
        setIsAgreed(false);
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    } catch (error) {
      alert('Не удалось отправить заявку. Проверьте подключение.');
    } finally {
      setIsSubmitting(false);
    }
  };*/



  useEffect(() => {
    if (isOpen) {
      // сохраняем только один раз
      if (originalOverflowRef.current === null) {
        originalOverflowRef.current = document.body.style.overflow;
      }

      document.body.style.overflow = 'hidden';
    } else {
      // возвращаем назад
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current;
        originalOverflowRef.current = null;
      }
    }

    return () => {
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current;
        originalOverflowRef.current = null;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !popupRef.current) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea',
      'input',
      'select',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    const elements = popupRef.current.querySelectorAll<HTMLElement>(focusableSelectors);

    if (!elements.length) return;

    const first = elements[0];
    const last = elements[elements.length - 1];

    // сохраняем прошлый фокус
    const previouslyFocused = document.activeElement as HTMLElement;

    // фокус в попап
    first.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus(); // возврат фокуса назад
    };
  }, [isOpen]);


  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      // Даём время на анимацию закрытия
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup}  ref={popupRef} role="dialog"
           aria-modal="true" onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть попап">✕</button>

        <h2 className={styles.title}>good line</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="city"
            placeholder="Ваш город"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Как к вам обращаться"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label className={styles.checkboxLabel}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              required
            />
            <span className={styles.checkboxText}>Согласен на обработку персональных данных</span>
          </label>
          <Button heightClass="small" type="submit"
                  className={styles.submitBtn}
                  disabled={!isAgreed || isSubmitting}>
            {isSubmitting ? 'Отправляем...' : 'Получить консультацию'}
          </Button>
        </form>
      </div>
    </div>
  );
}
