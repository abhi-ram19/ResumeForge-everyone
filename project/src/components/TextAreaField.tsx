import React from 'react';

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  className = ''
}) => {
  return (
    <div className={`${className}`}>
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm input-focus bg-gray-50 hover:bg-white transition-colors resize-vertical text-gray-900 placeholder-gray-500"
      />
    </div>
  );
};