import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DataInputFormRivas from './DataInputFormRivas';
import DataInputFormSanz from './DataInputFormSanz';
import DataInputFormEduardo from './DataInputFormEduardo';
import SideMenu from './SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState('');

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      navigate('/');
    }
  };

  const handleButtonClick = (profileName) => {
    setSelectedProfile(profileName);
    setShowForm(true);
    navigate(`/${profileName.replace(/\s+/g, '')}Data`);
  };

  const handleSubmitEduardo = async (formData) => {
    await sendData('http://localhost:3000/submitEduardo', formData);
  };

  const handleSubmitSanz = async (formData) => {
    await sendData('http://localhost:3000/Sanz', formData);
  };

  const handleSubmitRivas = async (formData) => {
    await sendData('http://localhost:3000/submitRaul', formData);
  };

  const sendData = async (url, formData) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ applies: formData.applied, fetches: formData.fetched }),
    });
    // Handle response and/or state updates here
  };

  const renderForm = () => {
    switch (selectedProfile) {
      case 'Raul Rivas':
        return <DataInputFormRivas onUpdate={handleSubmitRivas} />;

      case 'Raul Sanz':
        return <DataInputFormSanz onUpdate={handleSubmitSanz} />;

      case 'Raul Eduardo':
        return <DataInputFormEduardo onUpdate={handleSubmitEduardo} />;

      default:
        return null;
    }
  };

  const buttonStyle = {
    padding: '10px',
    margin: '10px',
    fontSize: '16px',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  };

  return (
    <div className="App">
      <Navbar />
      <SideMenu />

      <main style={{ padding: '20px' }}>
        {showForm ? (
          <>
            <button onClick={handleBackButtonClick} className="btn btn-primary">
              Back
            </button>
            {renderForm()}
          </>
        ) : (
          <>
            <div style={{ ...buttonStyle, backgroundColor: '#4CAF50' }} onClick={() => handleButtonClick('Raul Rivas')}>
              Raul Rivas
            </div>
            <div style={{ ...buttonStyle, backgroundColor: '#FF9800' }} onClick={() => handleButtonClick('Raul Sanz')}>
              Raul Sanz
            </div>
            <div style={{ ...buttonStyle, backgroundColor: '#2196F3' }} onClick={() => handleButtonClick('Raul Eduardo')}>
              Raul Eduardo
            </div>
            <div style={{ ...buttonStyle, backgroundColor: '#4CAF50' }} onClick={() => handleButtonClick('Today\'s Report')}>
              Today's Report
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
