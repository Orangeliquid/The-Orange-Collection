import React from 'react';

const ContentBoxes = ({ content }) => {
  return (
    <div className="justify-center grid grid-cols-1 md:grid-cols-2 gap-24">
      {content.map((item, index) => (
        <div key={index} className="content-box">
          {item.type === 'text' && (
            <>
              <h2 className={item.titleClassName}>{item.title}</h2>
              <p className={item.textClassName}>{item.data}</p>
            </>
          )}
          {item.type === 'image' && <img src={item.data} alt={item.alt} className={item.className} />}
        </div>
      ))}
    </div>
  );
};

export default ContentBoxes;
