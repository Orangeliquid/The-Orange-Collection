import React from 'react';

const GlowingWrapper = ({ children, className }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-2 bg-gradient-to-r rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative rounded-lg overflow-hidden">
      {children}
    </div>
  </div>
);

export default GlowingWrapper;
