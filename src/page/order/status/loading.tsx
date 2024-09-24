import type { FC } from 'react';
import Logo from '../../../components/logo';

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  return (
    <div className="bg-white mx-auto max-w-xs shadow-md border rounded-xl py-12 px-6 text-center flex flex-col gap-y-4 m-auto">
      <div className="mt-[-80px]">
        <Logo />
      </div>
      <h1 className="text-2xl">Loading....</h1>
    </div>
  );
};

export default Loading;
