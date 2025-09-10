import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <span
        className="text-6xl animate-bounce"
        role="img"
        aria-label="tools"
      >
        🛠️
      </span>
    </div>
  );
};

export default Preloader;
