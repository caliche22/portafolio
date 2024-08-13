import React from 'react';
import '../styles/Section.css';

const Section = ({ title, content }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      {content.map((item, index) => (
        <div key={index} className="section-content">
          <h3>{item.title}</h3>
          <p>{item.dates}</p>
          <ul>
            {item.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Section;
