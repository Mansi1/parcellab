import { forwardRef } from 'react';

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const classes = [
    'bg-[#002172] text-white p-2 rounded shadow-lg hover:bg-[#011955]',
    className,
  ]
    .filter((v) => !!v)
    .join(' ');
  return <button className={classes} ref={ref} {...props} />;
});

export default Button;
