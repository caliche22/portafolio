import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        title="Experience"
        content={[
          {
            title: "Dreamcode SAS, Cali, Colombia: Development Leader",
            dates: "May 2020 - August 2024",
            description: [
              "Led the development of a real estate mobile application with Ionic and React, TypeScript, Jest.",
              "Developed a mobility application with Ionic and Angular, TypeScript, Jest.",
              "Created an insurance web application with Angular, Typescript, SpringBoot, Java, Jest.",
              "Implemented a Time Management Dashboard with Angular, TypeScript, Jest.",
            ],
          },
          {
            title: "Solar Decathlon, Cali, Colombia: Augmented Reality Engineer",
            dates: "July 2019 - December 2019",
            description: [
              "Developed an augmented reality application for virtual home tours using Unity, Vuforia, and C#.",
            ],
          },
          {
            title: "KeepSafe SAS, Cali, Colombia: Web-Mobile Developer",
            dates: "January 2019 - December 2019",
            description: [
              "Developed a medical records management application using React and React Native.",
            ],
          },
        ]}
      />
      <Section
        title="Education"
        content={[
          {
            title: "Systems and Computer Engineer, Meritorious thesis (VEZoo)",
            dates: "Pontifical Javeriana University, Cali, Colombia, 2020",
            description: [],
          },
        ]}
      />
      <Section
        title="Technical Skills"
        content={[
          {
            description: [
              "FrontEnd Development: Angular (3 years), React (2 years), TypeScript (5 years), Javascript (5 years)",
              "Mobile Development: Ionic (2 years), React Native (1.5 years)",
              "Augmented Reality: Unity (1 year), Vuforia (1 year), C# (1 year)",
              "Databases: SQL (2 years), PostgreSQL (2 years), MongoDB (1 year)",
              "BackEnd Development: Java (1.5 years), SpringBoot (1.5 years), Node.js (1 year)",
              "Unit Tests: Jest (4 years)",
            ],
          },
        ]}
      />
      <Section
        title="Achievements"
        content={[
          {
            description: [
              "IEEE Publication: ",
              <a href="https://ieeexplore.ieee.org/document/9213076" target="_blank" rel="noopener noreferrer">IEEE Publication</a>
            ],
          },
        ]}
      />
      <Section
        title="Languages"
        content={[
          {
            description: ["English (B1)"],
          },
        ]}
      />
      <Section
        title="Certifications"
        content={[
          {
            description: ["SCRUM Master - CertiProf"],
          },
        ]}
      />
    </div>
  );
}

export default App;
