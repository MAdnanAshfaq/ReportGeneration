import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Form = styled.form`
  padding: 20px;
  margin: 20px auto;
  max-width: 500px;
  background: linear-gradient(45deg, #6DD5FA, #FF758C);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.2s ease-in-out;

  &:focus {
    transform: scale(1.05);
    outline: none;
    border-color: #007BFF;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: #007BFF;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  display: block;
`;

const HeadingLabel = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
`;

const DataInputExtra = () => {
  const [formData, setFormData] = useState({
    fetched: '',
    applied: '',
    previousApplies: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/submitData', { // Make sure this endpoint is correct.
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fetched: parseInt(formData.fetched, 10),
          applied: parseInt(formData.applied, 10),
          previousApplies: parseInt(formData.previousApplies, 10),
        }),
      });

      if (response.ok) {
        console.log('Data sent to server');
        // Optionally reset the form here if needed
        setFormData({ fetched: '', applied: '', previousApplies: '' });
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <HeadingLabel>Raul Rivas</HeadingLabel>
      <Label>Total Fetched:</Label>
      <Input
        type="number"
        name="fetched"
        value={formData.fetched}
        onChange={handleChange}
        placeholder="Fetched"
      />
      <Label>Total Applied:</Label>
      <Input
        type="number"
        name="applied"
        value={formData.applied}
        onChange={handleChange}
        placeholder="Applied"
      />
      <Label>Any previous Days Applies???:</Label>
      <Input
        type="number"
        name="previousApplies"
        value={formData.previousApplies}
        onChange={handleChange}
        placeholder="Previous Applies"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default DataInputExtra;
