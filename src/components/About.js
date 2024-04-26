import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website! We are a team dedicated to providing the best services to our clients.</p>
      <p>Our mission is to deliver high-quality products and to ensure our customers are completely satisfied with our services.</p>
      <p>For more information, contact us or visit our services page.</p>
      <h4>Our Mission</h4>
      <p>In this System, our mission is to leverage technology and innovation to safeguard and showcase the invaluable cultural heritage of India.</p>
      <p>We aim to provide a comprehensive platform that facilitates the preservation, documentation, and dissemination of various aspects</p>
      <p>of Indian culture, including traditions, arts, languages, rituals, cuisine, and more.</p>
      <div>
        {showMore && (
          <div>
            <h4>Our Commitment</h4>
            <p>At Indian Culture Management System, we are committed to excellence, integrity, and inclusivity in all aspects of our work.</p>
            <p>We strive to uphold the highest standards of cultural preservation and management while embracing diversity and celebrating </p>
            <p>the vibrancy of Indian culture in all its forms.</p>
          </div>
        )}
        <a href="#" style={{ textDecoration: 'none', color: 'blue' }} onClick={handleLearnMoreClick}>
          {showMore ? 'Show less' : 'Learn more'}
        </a>
      </div>
    </div>
  );
}
