import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-bold uppercase text-sm tracking-widest py-4 px-8 transition-colors flex items-center justify-center';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'bg-black text-white hover:bg-gray-900',
    outline: 'border border-gray-300 bg-transparent text-black hover:border-black'
  };
  
  const widthStyle = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
