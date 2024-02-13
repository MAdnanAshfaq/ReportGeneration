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

const DataInputFormEduardo = (props) => {
  const [formData, setFormData] = useState({
   
    applied: 0,
    previousApplies: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/submitEduardo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applies: formData.applied, previousApplies: formData.previousApplies })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Data submitted successfully!');
      } else {
        alert('Submission failed: ' + data.message);
      }
    })
    .catch(error => {
      alert('An error occurred: ' + error.message);
    });
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <HeadingLabel>Raul Eduardo</HeadingLabel>
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

export default DataInputFormEduardo;
