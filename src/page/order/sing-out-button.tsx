import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/', { replace: true })}
      className="bg-blue-100 rounded-lg p-1.5 border-2 border-gray-500 hover:bg-gray-300 text-sm"
    >
      🔒 sign out
    </button>
  );
};

export default SignOutButton;
