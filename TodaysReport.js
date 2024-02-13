import React from 'react';
import styled, { keyframes } from 'styled-components';

// Reusing fadeIn animation from DataInputFormRivas.js
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

// Styled components for TodaysReport
const ReportContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 500px;
  background: linear-gradient(45deg, #6DD5FA, #FF758C);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
`;

const ReportHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
`;

const ReportParagraph = styled.p`
  font-size: 16px;
  color: #333;
  margin: 10px 0;
`;

const TodaysReport = ({ reportData }) => {
  return (
    <ReportContainer>
      <ReportHeading>Today's Report</ReportHeading>
      {Object.entries(reportData).map(([profile, data]) => (
        <div key={profile}>
          {/* Adjusted display for profile data */}
          {data.fetches !== undefined && profile !== 'Raul Sanz' && (
            <ReportParagraph>{profile} Profile fetched: {data.fetches}</ReportParagraph>
          )}
          {data.applies !== undefined && (
            <ReportParagraph>{profile} Profile applied: {data.applies}</ReportParagraph>
          )}
        </div>
      ))}
    </ReportContainer>
  );
};

export default TodaysReport;
