'use client';

import { useEffect, useState } from 'react';
import styles from './ConsultationPopup.module.scss';

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

  // Блокировка скролла при открытом попапе
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city: formData.city,
          name: formData.name,
          phone: formData.phone,
          source: 'Попап консультация',
        }),
      });

      if (response.ok) {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        onClose();
        // Сброс формы
        setFormData({ city: '', name: '', phone: '' });
        setIsAgreed(false);
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <h2 className={styles.title}>Получить консультацию</h2>

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
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              required
            />
            <span>Согласен на обработку персональных данных</span>
          </label>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!isAgreed || isSubmitting}
          >
            {isSubmitting ? 'Отправляем...' : 'Получить консультацию'}
          </button>
        </form>
      </div>
    </div>
  );
}
