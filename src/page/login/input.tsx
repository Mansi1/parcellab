import type { FC } from 'react';

interface InputProps {
  name: string;
  value: string;
  label: string;
  error: boolean;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ value, name, label, error, onChange }) => {
  return (
    <div className="text-left">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        className={
          'border-2 rounded-md bg-gray-50 p-2 w-full' +
          (error ? ' border-red-700' : '')
        }
        name={name}
      />
    </div>
  );
};

export default Input;
