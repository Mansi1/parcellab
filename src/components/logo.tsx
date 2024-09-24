import type { FC } from 'react';
import SquarLogo from '../assets/parcelab-logo-square.svg?react';
import { cn } from '../utlis/cn';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <SquarLogo
      className={cn(
        'bg-[#002172] fill-white rounded-xl p-2 w-20 shadow-xl',
        className
      )}
    />
  );
};

export default Logo;
