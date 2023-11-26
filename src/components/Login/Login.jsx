import React, { useState } from 'react';
import './Login.css';
import police1 from '../../img/police1.jpeg';
import police2 from '../../img/police2.jpeg';
import police3 from '../../img/police3.jpeg';
import logo from '../../img/logo.png';
import captureImg from '../../img/capture.png';
import Webcam from 'react-webcam';
const Login = () => {
  const [showWebcam, setShowWebcam] = useState(false);

  let openCam = () => {
    // Check if Officer Id and Password are filled
    const officerIdInput = document.querySelector('input[aria-labelledby="officerIdLabel"]');
    const passwordInput = document.querySelector('input[aria-labelledby="passwordLabel"]');

    if (officerIdInput && passwordInput) {
      const officerId = officerIdInput.value;
      const password = passwordInput.value;

      if (officerId && password) {
        console.log('cam Opened');
        setShowWebcam(true);

        // Close webcam after 5 seconds
        setTimeout(() => {
          setShowWebcam(false);
          console.log('cam Closed');

          document.querySelector('.loginInputContainer').style.display = 'none'
          document.querySelector('.loginMsg').style.display = 'flex'

          // setTimeout(() => {
          //   // Redirect to a new page
          //   history.push('/'); // replace '/new-page' with the actual path
          // }, 2000);


        }, 5000);
      } else {
        console.log('Please fill in Officer Id and Password before scanning.');
      }
    } else {
      console.error('Could not find input elements.');
    }
  };


  return (
    <>
      <div className="loginMainContaier">
        <div className="leftImagesContainer">
          <img src={police1} alt="" />
          <img src={police2} alt="" />
          <img src={police3} alt="" />
        </div>

        <div className="loginFieldContainer">
          <img src={logo} alt="" />

          <div className="loginInputContainer">

            <fieldset>
              <legend id='officerIdLabel'>Officer Id</legend>
              <input type="text" aria-labelledby="officerIdLabel" />
            </fieldset>

            <fieldset>
              <legend id="passwordLabel">Password</legend>
              <input type="text" aria-labelledby="passwordLabel" />
            </fieldset>

            <div className="faceScanContainer" id="scanFace" onClick={openCam}>
              <img src={captureImg} alt="" />
              <p>Scan with your face to open</p>
            </div>
          </div>
          <div className="webcamContainer">
            {showWebcam && <Webcam />}
          </div>
        </div>

        <div className="rightImagesContainer">
          <img src={police1} alt="" />
          <img src={police2} alt="" />
          <img src={police3} alt="" />
        </div>
        <div className="loginMsg"><h2>Loggedin Succesfully</h2><p>redirecting to dashboard...</p></div>
      </div>
    </>
  );
};

export default Login;
