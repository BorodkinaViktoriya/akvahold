import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'hero';
  heightClass?: 'small' | 'big' | 'xs';
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean; // Добавляем проп
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
                  children,
                  variant = 'default',
                  heightClass = 'small',
                  className,
                  onClick,
                  ariaLabel,
                  disabled,
                  type = 'button',
                }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={clsx(
        styles.button,
        styles[variant],
        styles[heightClass],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
