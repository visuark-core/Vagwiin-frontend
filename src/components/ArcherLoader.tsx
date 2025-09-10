import React from 'react';

const ArcherLoader: React.FC = () => (
  <svg
    className="animate-bounce h-20 w-20 text-blue-400"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" />
    <path
      d="M16 32 L48 32 M32 16 L32 48 M32 32 L44 20 M32 32 L20 44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M44 20 Q48 16 52 20 Q48 24 44 20 Z"
      fill="currentColor"
      opacity="0.7"
    />
    <circle cx="32" cy="32" r="5" fill="currentColor" />
  </svg>
);

export default ArcherLoader;
