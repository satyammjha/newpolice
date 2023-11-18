import React, { useState } from 'react';
import Navtop from '../Navbar/Navtop';
import './registercase.css';

const RegisterCase = () => {
  const [formData, setFormData] = useState({
    complaineeName: '',
    complaineePhoneNumber: '',
    victimName: '',
    victimPhoneNumber: '',
    timeOfIncident: '',
    dateOfIncident: '',
    locationOfIncident: '',
    typeOfIncident: '',
    descriptionOfIncident: '',
    suspectName: '',
    knownInformation: '',
    addressOfSuspect: '',
    typeOfSuspect: '',
    // evidenceFile: null,
    evidenceDescription: '',
  });

  const style = {
    backgroundColor: 'rgba(255, 0, 0, 0.101)',
    marginBottom: '20px',
    width: '30vw',
    borderRadius: '5px',
    marginLeft: '10%',
    height: '20px',
    alignItems: 'center',
    textAlign: 'center'

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     evidenceFile: e.target.files[0],
  //   });
  // };



  //Submitting the case to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      complaineeName,
      complaineePhoneNumber,
      victimName,
      victimPhoneNumber,
      timeOfIncident,
      dateOfIncident,
      locationOfIncident,
      typeOfIncident,
      descriptionOfIncident,
      suspectName,
      knownInformation,
      addressOfSuspect,
      typeOfSuspect,
      evidenceDescription } = formData


    const res = await fetch("https://ct-test-eb719-default-rtdb.firebaseio.com/registeredCases.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        complaineeName,
        complaineePhoneNumber,
        victimName,
        victimPhoneNumber,
        timeOfIncident,
        dateOfIncident,
        locationOfIncident,
        typeOfIncident,
        descriptionOfIncident,
        suspectName,
        knownInformation,
        addressOfSuspect,
        typeOfSuspect,
        evidenceDescription
      })
    })



    if (res) {
      setFormData({
        complaineeName: '',
        complaineePhoneNumber: '',
        victimName: '',
        victimPhoneNumber: '',
        timeOfIncident: '',
        dateOfIncident: '',
        locationOfIncident: '',
        typeOfIncident: '',
        descriptionOfIncident: '',
        suspectName: '',
        knownInformation: '',
        addressOfSuspect: '',
        typeOfSuspect: '',
        // evidenceFile: null,
        evidenceDescription: '',

      })
    }
    alert("Submitted")



  };

  return (
    <>
      <Navtop className="navtop-register" />
      <div className="registercasecontainer">
        <h1>Register a New Case</h1>
        <form onSubmit={handleSubmit} method='POST'>
          {/* Basic details */}
          <div className="basicDetailsContainer">
            <h3>Basic details</h3>
            <div className="complaineeDetails">
              <input
                type="text"
                name="complaineeName"
                placeholder="Name of complainee"
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="complaineePhoneNumber"
                placeholder="Phone Number"
                onChange={handleInputChange}
              />
            </div>
            <div className="victimDetails">
              <input
                type="text"
                name="victimName"
                placeholder="Name of victim"
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="victimPhoneNumber"
                placeholder="Victim's phone number"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Incident details */}
          <div className="incidentDetailsContainer">
            <h3>Incident Details</h3>
            <div className="timeanddateofincident">
              <input
                type="time"
                name="timeOfIncident"
                placeholder="Time of incident"
                onChange={handleInputChange}
              /> <p>*</p>
              <input
                type="date"
                name="dateOfIncident"
                placeholder="Date of incident"
                onChange={handleInputChange}
              />
            </div>
            <div className="locationandtypeofincident">
              <input
                type="text"
                name="locationOfIncident"
                placeholder="Location of incident"
                onChange={handleInputChange}
              /><p>*</p>
              <input
                type="text"
                name="typeOfIncident"
                placeholder="Type of incident"
                onChange={handleInputChange}
              /><p>*</p>
            </div>
            <input
              type="text"
              name="descriptionOfIncident"
              placeholder="Description of incident"
              onChange={handleInputChange}
            /><p>*</p>
          </div>

          {/* Suspect details */}
          <div className="suspectDetailsContainer">
            <h3>Suspect Details:</h3>
            <div className="suspectnameandinfo">
              <input
                type="text"
                name="suspectName"
                placeholder="Name of suspect"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="knownInformation"
                placeholder="Known information"
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="addressOfSuspect"
              placeholder="Address if available"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="typeOfSuspect"
              placeholder="Type of suspect"
              onChange={handleInputChange}
            />
          </div>

          {/* Evidence details */}
          <div className="evidenceDetailsContainer">
            <h3>Evidence (if any):</h3>
            {/* <input type="file" onChange={handleFileChange} /> */}
            <input
              type="text"
              name="evidenceDescription"
              placeholder="Evidence description"
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" style={style} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterCase;