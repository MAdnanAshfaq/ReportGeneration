import React from 'react';
import styled from 'styled-components';

const ReportContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReportHeader = styled.h2`
  color: #333;
  text-align: center;
`;

const ReportItem = styled.div`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const DailyReport = () => {
  // Placeholder data, replace with actual data from state or props
  const reports = [
    { name: '', profile: '', fetched: 120, applied: 120 },
    // ... other data
  ];

  return (
    <ReportContainer>
      <ReportHeader>Today's Report</ReportHeader>
      {reports.map((report, index) => (
        <ReportItem key={index}>
          <p>{report.name}: {report.profile} - Fetched: {report.fetched}, Applied: {report.applied}</p>
        </ReportItem>
      ))}
    </ReportContainer>
  );
};

export default DailyReport;
