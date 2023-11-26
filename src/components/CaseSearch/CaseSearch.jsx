// CaseSearch.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CaseSearch.css'

const CaseSearch = () => {
  const [filters, setFilters] = useState({
    caseType: '',
    crimeYear: '',
    area: '',
    keyword: '',
  });




  const [initialCases] = useState([
    {
      id: 1,
      reportingOfficer: 'John Cena',
      caseName: 'Case 1',
      caseDate: '23/03/2023',
      caseType: 'Murder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Area: Mohali',
      area: 'Mohali',
    },
    {
      id: 2,
      reportingOfficer: 'John Doe',
      caseName: 'Case 2',
      caseDate: '23/03/2023',
      caseType: 'Robbery',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Area: Kharar',
      area: 'Kharar',
    },
    // Add more initial data as needed
  ]);

  const [filteredCases, setFilteredCases] = useState(initialCases);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const filteredData = initialCases.filter((caseItem) => {
      const lowerCaseKeyword = filters.keyword?.toLowerCase() || '';
      const caseTypeMatches =
        filters.caseType === '' || (caseItem.caseType && caseItem.caseType.toLowerCase().includes(filters.caseType.toLowerCase()));
      const caseYearMatches = filters.crimeYear === '' || (caseItem.caseDate && caseItem.caseDate.includes(filters.crimeYear));
      const areaMatches =
        filters.area === '' || (caseItem.area && caseItem.area.toLowerCase().includes(filters.area.toLowerCase()));
      const descriptionMatches =
        lowerCaseKeyword === '' || (caseItem.description && caseItem.description.toLowerCase().includes(lowerCaseKeyword));
      const keywordMatches =
        (caseItem.reportingOfficer && caseItem.reportingOfficer.toLowerCase().includes(lowerCaseKeyword)) ||
        (caseItem.area && caseItem.area.toLowerCase().includes(lowerCaseKeyword)) ||
        (caseItem.caseDate && caseItem.caseDate.includes(lowerCaseKeyword)) ||
        (caseItem.caseName && caseItem.caseName.toLowerCase().includes(lowerCaseKeyword));

      return caseTypeMatches && caseYearMatches && areaMatches && (descriptionMatches || keywordMatches);
    });

    setFilteredCases(filteredData);
  };

  useEffect(() => {
    handleSearch();
  }, [filters, handleSearch]);

  return (
    <>
      <div className="CaseSearchMainContainer">















        <div className="searchAndSelectedFilterContainer">
          <div className="searchFilterContainers">
            <select name="caseType" className="searchFilterItem" onChange={handleFilterChange} value={filters.caseType}>
              <option value="" disabled>
                Select Case Type
              </option>
              <option value="Murder">Murder</option>
              <option value="Robbery">Robbery</option>
              <option value="Assault">Assault</option>
              {/* Add more case types */}
            </select>
            <select name="crimeYear" className="searchFilterItem" onChange={handleFilterChange} value={filters.crimeYear}>
              <option value="" disabled>
                Select Crime Year
              </option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              {/* Add more years as needed */}
            </select>
            <select name="area" className="searchFilterItem" onChange={handleFilterChange} value={filters.area}>
              <option value="" disabled>
                Select Area
              </option>
              <option value="Mohali">Mohali</option>
              <option value="Kharar">Kharar</option>
              {/* Add more areas */}
            </select>
            <input
              type="text"
              className="searchFilterItem"
              placeholder="Enter any related keyword"
              name="keyword"
              value={filters.keyword}
              onChange={handleFilterChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <span className="line"></span>
          <div className="selectedFilterContainer">
            <h4>Applied Filters:</h4>
            {Object.entries(filters).map(([filterName, filterValue]) => {
              return filterValue && filterValue !== '' ? (
                <span key={filterName} className="selectedFilterItem">
                  {filterName === 'area' ? 'City' : filterName}: {filterValue}
                  <span
                    className="deleteSelectedFilter"
                    onClick={() => handleFilterChange({ target: { name: filterName, value: '' } })}
                  >
                    X
                  </span>
                </span>
              ) : null;
            })}
          </div>
        </div>










        <div className="filteredCaseItemsContainer">
          {filteredCases.length === 0 ? (
            <p>No cases found</p>
          ) : (
            filteredCases.map((caseItem) => (
              <div className="filteredCaseItem" key={caseItem.id}>
                <span className="caseRprtngOffcrandNameContainer">
                  <h3>
                    Reporting Officer: <span id="reportingOfficer">{caseItem.reportingOfficer}</span>
                  </h3>
                  <span className="caseNameDateAndTypeConntainer">
                    <h3>{caseItem.caseName}</h3>
                    <span className="caseDate">{caseItem.caseDate}</span>
                    <span className="filteredCaseType">{caseItem.caseType}</span>
                  </span>
                </span>
                <div className="filteredCaseDetailsbtnAndDesc">
                  <div className="filteredCaseItemDesc">
                    <p>{caseItem.description}</p>
                  </div>
                  <Link to={{ pathname: `/casedetails`, state: { caseItem } }}>
                    <div id="filteredCaseDetailsBtn">
                      View Case Details
                    </div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CaseSearch;
