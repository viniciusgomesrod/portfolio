import React from 'react';

const NavLink = ({ section, activeSection, onNavigate, children }) => (
  <li>
    <a
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(section);
      }}
      className={activeSection === section ? 'active' : ''}
    >
      {children}
    </a>
  </li>
);

function Header({ activeSection, onNavigate }) {
  return (
    <header className="header">
      <div className="logo">Thomás Oliveira</div>
      <nav>
        <ul>
          <NavLink section="about" activeSection={activeSection} onNavigate={onNavigate}>About</NavLink>
          <NavLink section="projects" activeSection={activeSection} onNavigate={onNavigate}>Projects</NavLink>
          <NavLink section="education" activeSection={activeSection} onNavigate={onNavigate}>Education</NavLink>
          <NavLink section="contact" activeSection={activeSection} onNavigate={onNavigate}>Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;