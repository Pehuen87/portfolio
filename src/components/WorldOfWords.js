import React from 'react';
import './worldOfWords.css';

const WorldOfWords = () => {
  const technologies = [
    'CSS',
    'React',
    'JavaScript',
    'HTML',
    'C#',
    'SASS',
    'MongoDB',
    'TypeScript',
    'SQL',
    'C',
    'LESS',
    'Node.js',
    'Bootstrap',
    'Git',
    '.NET'
  ];

  return (
    <div className="world">
      <span className="worldAnimationCenter">Pehuén Assalone</span>

      {technologies.map((technology, index) => (
        <div key={index}>{technology}</div>
      ))}
    </div>
  );
};

export default WorldOfWords;