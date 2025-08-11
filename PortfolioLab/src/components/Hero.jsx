import React from 'react';
// A linha abaixo foi comentada para evitar o erro de imagem não encontrada
// import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h1>Alice Johnson</h1>
        <h2>Full-Stack Developer | AI & Cloud Enthusiast</h2>
        <p className="intro-text">
          I am a passionate and versatile Full-Stack Developer...
        </p>
        {/* ... resto do conteúdo ... */}
      </div>
      <div className="hero-image">
        {/* A imagem foi temporariamente removida. O círculo cinza do CSS aparecerá. */}
        {/* <img src={profilePhoto} alt="Alice Johnson" /> */}
      </div>
    </section>
  );
};

export default Hero;