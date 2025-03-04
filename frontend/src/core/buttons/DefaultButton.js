import React from 'react';

const DefaultButton = ({ label, type, md, onClick, disabled }) => {
  return (
    <button
      className={`bg-indigo-500 text-white active:bg-indigo-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ${md ? 'text-base' : 'text-xs'}`}
      type={type}
      style={{ transition: 'all 0.15s ease' }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
