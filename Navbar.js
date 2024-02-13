
import React from 'react';

const Navbar = () => {
  const navStyle = {
    background: 'gray',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const linkStyle = {
    padding: '20px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s'
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0 }}>Report Making</h1>
      <div>
        <a href="/agents" style={linkStyle} onMouseOver={({target})=>target.style.color='lightgray'} onMouseOut={({target})=>target.style.color='white'}>Agents</a>
        <a href="/profiles" style={linkStyle} onMouseOver={({target})=>target.style.color='lightgray'} onMouseOut={({target})=>target.style.color='white'}>Profiles</a>
        <a href="/progress" style={linkStyle} onMouseOver={({target})=>target.style.color='lightgray'} onMouseOut={({target})=>target.style.color='white'}>Progress</a>
      </div>
    </nav>
  );
};
export default Navbar;
