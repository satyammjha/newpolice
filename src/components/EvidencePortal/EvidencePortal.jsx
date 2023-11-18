// EvidencePortal.js

import React, { useState } from 'react';
import Navtop from '../Navbar/Navtop';
import './EvidencePortal.css';

const CaseFolder = ({ caseId, caseName, caseDate, evidenceUsed, evidenceList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="case-folder">
      <div className="folder-header" onClick={toggleFolder}>
        <span>Case ID: {caseId}</span>
        <span>{caseName}</span>
        <span>Case Date: {caseDate}</span>
        <span className='viewEvidence'>View evidence </span>
      </div>
      {isOpen && (
        <ul className="evidence-list">
          {evidenceList.map((evidence, index) => (
            <li key={index}>
              <a href="#">{evidence}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const EvidencePortal = () => {
  const caseFolders = [
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    {
      caseId: '12345',
      caseName: 'Case 1',
      caseDate: '11/11/23',
      evidenceUsed: 'Investigation',
      evidenceList: ['Evidence 1', 'Evidence 2']
    },
    // Add more case folders as needed
  ];

  return (
    <div className="EvidencePortal">
      <Navtop />
      <div className="EvidencePortal-container">
        <h2 className="EvidencePortal-container-head">Evidence Portal</h2>
        <div className="case-folders">
          {caseFolders.map((caseFolder) => (
            <CaseFolder
              key={caseFolder.caseId}
              caseId={caseFolder.caseId}
              caseName={caseFolder.caseName}
              caseDate={caseFolder.caseDate} // Pass caseDate to CaseFolder
              evidenceUsed={caseFolder.evidenceUsed}
              evidenceList={caseFolder.evidenceList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvidencePortal;
