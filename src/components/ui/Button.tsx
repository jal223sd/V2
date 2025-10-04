import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  // Define base styles based on variant and size
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-sm hover:shadow',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
  };
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-6 py-3 text-lg'
  };
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  // If href is provided, render a Link component
  if (href) {
    return <Link to={href} className={styles}>
        {children}
      </Link>;
  }
  // Otherwise, render a button
  return <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>;
}