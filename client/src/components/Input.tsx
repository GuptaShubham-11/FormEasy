interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  error = false,
  errorMessage = '',
  label = '',
  size = 'md',
  icon,
  className = '',
}) => {
  const borderClasses = error
    ? 'border-accent focus:border-accent focus:ring-2 focus:ring-accent/30'
    : 'border-primary focus:border-secandory focus:ring-2 focus:ring-secandory/30';

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const disabledClasses = disabled
    ? 'opacity-60 cursor-not-allowed bg-primary/30'
    : 'cursor-text';

  const inputClasses = `w-full bg-background text-text border-2 rounded-lg transition-all duration-200 ease-in-out focus:outline-none placeholder-secandory/50
     ${borderClasses} 
     ${sizeClasses[size]} 
     ${disabledClasses} 
     ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-text mb-2">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 text-accent pointer-events-none flex items-center">
            {icon}
          </div>
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`${inputClasses} ${icon ? 'pl-10' : ''}`}
        />
      </div>

      {error && errorMessage && (
        <p className="text-sm text-accent mt-2 font-medium">{errorMessage}</p>
      )}
    </div>
  );
};
