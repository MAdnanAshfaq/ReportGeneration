import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  position: fixed;
  left: ${({ isOpen }) => isOpen ? '0' : '-250px'};
  top: 0;
  width: 250px;
  height: 100%;
  background: #333;
  transition: left 0.3s ease-in-out;
  z-index: 1000; // Ensure it's above other content
  padding-top: 60px; // Assuming the navbar height
`;

const DashboardButton = styled.button`
  position: fixed;
  left: 0;
  top: 50px; // Adjust based on your navbar height
  z-index: 1001; // Above the dashboard
  cursor: pointer;
`;

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('#side-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDashboard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DashboardButton onClick={toggleDashboard}>
        {isOpen ? 'Close' : 'Menu'}
      </DashboardButton>
      <DashboardContainer isOpen={isOpen} id="side-menu">
        {/* Dashboard content goes here */}
      </DashboardContainer>
    </>
  );
};

export default SideMenu;
