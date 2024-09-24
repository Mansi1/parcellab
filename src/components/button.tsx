import { forwardRef } from 'react';
import { cn } from '../utlis/cn';

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'bg-[#002172] text-white p-2 rounded-lg shadow-p hover:bg-[#011955] disabled:bg-gray-700',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export default Button;
