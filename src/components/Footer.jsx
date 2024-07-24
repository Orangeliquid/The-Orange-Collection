import React from "react";

function Footer() {
  return (
    <footer className="orange-glass rounded-none font-montserrat text-white p-8">
      <div className="container mx-auto text-center">
        <p className="text-md">
          Follow me on
          <a 
            href="https://github.com/Orangeliquid" 
            className="text-blue-400 mx-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a> 
        </p>
        <p className="text-md">&copy; 2024 Orangeliquid. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
