'use client';

import { createContext, useContext, useState } from 'react';
import ConsultationPopup from '@/widgets/ConsultationPopup/ConsultationPopup'

type PopupContextType = {
  open: () => void;
  close: () => void;
};

const PopupContext = createContext<PopupContextType | null>(null);

export const usePopup = () => {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error('usePopup must be used inside PopupProvider');
  return ctx;
};

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ open, close }}>
      {children}

      {/* ГЛАВНОЕ — попап рендерится один раз */}
      <ConsultationPopup isOpen={isOpen} onClose={close} />
    </PopupContext.Provider>
  );
};
