import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="body2">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to the <strong>Learning Management System Support Platform</strong>, Our web application is designed to provide a seamless platform for managing online education, offering tailored features for admins, instructors, students, and content creators. It simplifies course management, enhances collaboration, 
          and ensures a user-friendly learning experience for everyone involved.
        </p>
        <p>
        We are dedicated to transforming education through innovative digital solutions, creating engaging and effective online learning experiences. Our comprehensive Learning Management System empowers 
        educators and learners alike to achieve their goals in a seamless and interactive environment.
        </p>
        <p>
        We strive to revolutionize the eLearning landscape by providing an intuitive and powerful Learning Management System. 
        Our platform fosters collaboration, engagement, and growth, enabling students, educators, and content creators to thrive
         in an integrated digital environment.
        </p>

        <div className="team-profiles">
          <h2>Meet Our Team</h2>
          <div className="profile">
            <img src="" alt=" Harikailash" className="profile-img"/>
            <h3>Hari kailash</h3>
            
            <a href="https://www.linkedin.com/in/sai-karthik-piratla-906318274/" target="_blank" rel="noopener noreferrer" className="profile-link">LinkedIn Profile</a>
          </div>

          <div className="profile">
            <img src="" alt="saiKarthik Profile" className="profile-img"/>
            <h3>Sai karthik</h3>
            
            <a href="" target="_blank" rel="noopener noreferrer" className="profile-link">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
