// Solvedunsolved.js

import React, { useState } from 'react';
import './solvedUnsolved.css';

const CaseItem = ({ caseType1, caseType2, caseName, caseSummary, caseStatus, containerStyle }) => {
    return (
        <div className="caseitem" style={containerStyle}>
            <div className="caseTypecontainer">
                <span className="casetyp1">{caseType1}</span>
                <span className="casetyp2">{caseType2}</span>
            </div>
            <h3>{caseName}</h3>
            <p id="caseSummary">{caseSummary}</p>
            <div id="casestatus">{caseStatus}</div>
        </div>
    );
};

const Solvedunsolved = ({ cases, height, width, caseItemContainerStyle, inputFieldStyle }) => {
    const [showSolved, setShowSolved] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCases = cases.filter((caseData) => {
        const caseIdMatch = String(caseData.id).toLowerCase().includes(searchTerm.toLowerCase());
        const caseNameMatch = caseData.caseName.toLowerCase().includes(searchTerm.toLowerCase());
        return (showSolved ? caseData.solved : !caseData.solved) && (caseIdMatch || caseNameMatch);
    });

    const containerStyle = {
        height: height || 'auto',
        width: width || 'auto',
    };

    return (
        <>
            <div className="solvedUnsolvedContainer" style={containerStyle}>
                <div className="solvedUnsolvedToggleContainer">
                    <span
                        onClick={() => setShowSolved(false)}
                        className={!showSolved ? 'activecasedisplay' : 'inactivecasedisplay'}
                    >
                        Unsolved Cases
                    </span>
                    <span
                        onClick={() => setShowSolved(true)}
                        className={showSolved ? 'activecasedisplay' : 'inactivecasedisplay'}
                    >
                        Solved Cases
                    </span>
                    <span id="searchSolvedUnsolved">
                        <input
                            type="text"
                            placeholder='Search case by ID or name'
                            style={inputFieldStyle || { width: '8rem' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </span>
                </div>
                <div className="caseitemcontainer" style={caseItemContainerStyle}>
                    {filteredCases.map((caseData) => (
                        <CaseItem key={caseData.id} {...caseData} containerStyle={caseItemContainerStyle} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Solvedunsolved;
