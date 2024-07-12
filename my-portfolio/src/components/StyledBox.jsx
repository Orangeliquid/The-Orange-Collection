import React from 'react';

const StyledBox = ({ children, className }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative px-7 py-6 rounded-lg bg-black leading-none items-center">
      {children}
    </div>
  </div>
);

export default StyledBox;
