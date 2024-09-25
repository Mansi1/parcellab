import type { FC } from 'react';

interface LinearProgressProps {
  percentage: number;
}

const LinearProgress: FC<LinearProgressProps> = ({ percentage }) => {
  return (
    <div>
      <div className="w-full bg-gray-200 h-4 rounded-lg mb-2">
        <div
          className="rounded-lg bg-[#002172] h-4"
          style={{ width: percentage + '%' }}
        ></div>
      </div>
      <div className="flex text-gray-400 text-xs">
        <div>Processed</div>
        <div className="grow" />
        <div>Delivered</div>
      </div>
    </div>
  );
};

export default LinearProgress;
