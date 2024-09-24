import { type FC, type ReactNode } from 'react';
import { cn } from '../../../utlis/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const SuccessCard: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'm-0 w-full max-w-xs bg-white mx-auto shadow-md rounded-xl flex flex-col gap-y-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export default SuccessCard;
