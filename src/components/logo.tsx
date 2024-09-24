import type { FC } from 'react';
import SquarLogo from '../assets/parcelab-logo-square.svg?react';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <SquarLogo className="bg-[#002172] fill-white rounded-xl p-2 w-20 shadow-xl" />
  );
};

export default Logo;
