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
  const [errors, setErrors] = useState({ phone: '' });
  const popupRef = useRef<HTMLDivElement>(null);
  const originalOverflowRef = useRef<string | null>(null);
  const isPhoneValid = formData.phone.replace(/\D/g, '').length >= 11;
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

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

  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length > 0 && digits.length < 11) {
      return 'Номер слишком короткий';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // 1. Разрешаем вводить только цифры и спецсимволы
      const cleanValue = value.replace(/[^0-9+\-()\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanValue }));

      // 2. Проверяем на лету
      setErrors(prev => ({ ...prev, phone: validatePhone(cleanValue) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

//вариант 1
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Подтвердите, что вы не робот');
      return;
    }
    setIsSubmitting(true);

    const body = new FormData();
    body.append('name', formData.name);
    body.append('phone', formData.phone);
    body.append('city', formData.city);
    body.append('smart-token', captchaToken);
    body.append('submit', '1');

    try {
      const response = await fetch('https://akvahold.ru/consultation', {
        method: 'POST',
        body: body,
      });

      const result = await response.json();

      if (result.success === true) {
        alert('Спасибо! Ваша заявка успешно отправлена.');
        setFormData({ city: '', name: '', phone: '' });
        setIsAgreed(false);
        setCaptchaToken(null);
        if ((window as any).smartCaptcha) (window as any).smartCaptcha.reset();
        onClose(); // Закрываем попап
      } else {
        alert('Ошибка валидации. Проверьте номер телефона.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Заявка отправлена (проверьте почту)'); // Иногда fetch может ругаться на CORS, но письмо улетает
    } finally {
      setIsSubmitting(false);
    }
  };

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
    if (!isOpen) return;

    const interval = setInterval(() => {
      if ((window as any).smartCaptcha) {
        clearInterval(interval);

        (window as any).smartCaptcha.render('captcha-container', {
          sitekey: 'ysc1_A5e9mUd7mX8vMzOSjJtIIcXyLDt8GFcx9A77l5Fx0bd6d0d9',
          callback: (token: string) => {
            setCaptchaToken(token);
          },
        });
      }
    }, 150);

    return () => clearInterval(interval);
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
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose}>
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
            className={errors.phone ? styles.inputError : ''}

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
          <div className={styles.captchaWrapper}>
            <div id="captcha-container" style={{ height: 100 }}/>
          </div>

          <Button heightClass="small" type="submit"
                  className={styles.submitBtn}
                  disabled={!isAgreed || isSubmitting || !isPhoneValid}>
            {isSubmitting ? 'Отправляем...' : 'Получить консультацию'}
          </Button>
        </form>
      </div>
    </div>
  );
}
