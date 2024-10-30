import React from 'react';
import backgroundImage from "../images/home.jpg"; // Make sure to add an appropriate image

const educationData = [
  {
    institution: "University A",
    degree: "Bachelor of Science in Computer Science",
    year: "2015 - 2019",
    description: "Focused on software development, algorithms, and data structures. Participated in various coding competitions and hackathons."
  },
  {
    institution: "University B",
    degree: "Master of Science in Software Engineering",
    year: "2019 - 2021",
    description: "Specialized in full-stack development and cloud computing. Completed a thesis on microservices architecture."
  },
  {
    institution: "Institute C",
    degree: "Certification in Full Stack Development",
    year: "2021",
    description: "Intensive bootcamp covering modern web development technologies including React, Node.js, and MongoDB."
  },
  {
    institution: "School D",
    degree: "High School Diploma",
    year: "2011 - 2015",
    description: "Graduated with honors. Active member of the computer club and math team."
  }
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={backgroundImage} alt="Education background" />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            listStyleType: "none",
            padding: 0,
          }}
        >
          {educationData.map((edu, index) => (
            <li key={index} style={{ marginBottom: "2rem" }}>
              <h3>{edu.institution}</h3>
              <p>{edu.degree} ({edu.year})</p>
              <p>{edu.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;