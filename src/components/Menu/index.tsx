// components/Menu/index.tsx
import React from 'react';
import { useMatch, Link as NavLink } from 'react-router-dom';


const Menu: React.FC = () => {
  return (
    <div className="menu">
      <ul>
        <li><NavLink to="/timemania" className={useMatch("/timemania") ? 'active' : ''}>Timemania</NavLink></li>
        <li><NavLink to="/megasena" className={useMatch("/megasena") ? 'active' : ''}>Mega Sena</NavLink></li>
        <li><NavLink to="/quina" className={useMatch("/quina") ? 'active' : ''}>Quina</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;
