// src/pages/Home.jsx
import React from 'react';
import TextSpan from '../components/TextSpan';

function Home() {
  const title = "Welcome To My Website!".split("");

  return (
    <div>
      <h1 className="text-3xl text-white font-lato py-10">
        {title.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter}
          </TextSpan>
        ))}
      </h1>
      <p className="bg-scatter-BO">Welcome to the home page!</p>
    </div>
  );
}

export default Home;
