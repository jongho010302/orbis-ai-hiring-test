import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      OrbisAI TEST
      <div className="header-right">
        <Link to="/"><span>Home</span></Link>
        <Link to="/search"><span>Search</span></Link>
        <Link to="/favorite"><span>Favorite</span></Link>
      </div>
    </div>
  )
}

export default Header;
