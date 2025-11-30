interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  className = '',
}) => {
  const variantClasses = {
    primary: 'bg-primary text-text hover:bg-[#B3B4A9] focus:ring-secandory',
    secondary:
      'bg-secandory text-background hover:bg-[#484C2E] focus:ring-primary',
    accent: 'bg-accent text-text hover:bg-[#E68A0F] focus:ring-accent',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-7 py-3 text-lg',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed hover:opacity-50 active:scale-100'
    : 'cursor-pointer';

  const finalClassName = `font-semibold rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95
     ${variantClasses[variant]} 
     ${sizeClasses[size]} 
     ${disabledClasses} ${className}`;

  return (
    <button className={finalClassName} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
