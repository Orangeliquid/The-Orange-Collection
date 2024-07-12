import React from 'react';
import ContentBoxes from '../components/ContentBoxes';
import OrangeAlien2D from "../assets/OrangeAlienFlat2d.jpg";

const contentData = [
  {
    type: 'text',
    title: 'My Name is Michael',
    data: 'Following in my father\'s footsteps, I developed an interest in technology at a young age. However, it wasn\'t until recently that I began learning about programming.',
    titleClassName: 'text-2xl font-bold mb-2 text-white',
    textClassName: 'text-lg xl:text-xl font-montserrat text-white font-semibold'
  },
  {
    type: 'text',
    title: 'First Language: Python',
    data: 'As I grew older, friends often suggested that I explore Python. After several attempts to learn this new language, I eventually gained the understanding needed to create my own projects.',
    titleClassName: 'text-2xl font-bold mb-2 text-white',
    textClassName: 'text-lg xl:text-xl font-montserrat text-white font-semibold'
  },

  // Add more content objects here
];

const TestComponent = () => {
  return (
    <div className="container-xl flex flex-col items-center justify-center rounded glass-effect p-8">
      <ContentBoxes content={contentData} />
    </div>
  );
};

export default TestComponent;
