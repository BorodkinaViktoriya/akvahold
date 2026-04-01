import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'hero' ;
  heightClass?: 'small' | 'big' ;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const Button = ({
                  children,
                  variant = 'default',
                  heightClass = 'small',
                  className,
                  onClick,
                  ariaLabel
                }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
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
