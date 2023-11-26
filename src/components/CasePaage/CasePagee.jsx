import React, { useState, useEffect } from "react";
import "./casePaage.css";
import Navtop from "../Navbar/Navtop";
import ImageComponent from "./imgbox";
import caseimage from "../../img/criminal-process.png";
import { useNavigate } from "react-router-dom"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';






const CasePagee = () => {






  const [complaintData, setComplaintData] = useState({
    compId: 'Not available',
    compName: 'Not available',
    mobNum: 'Not available',
    dateOfInci: 'Not available',
    category: 'Not available',
    details: 'Not available',
  });


  useEffect(() => {





    const firebaseConfig = {
      apiKey: "AIzaSyDjsec2TjbFSkTom1C4Xx-fXSagCTPrTJo",
      authDomain: "cyberthon-8e6f0.firebaseapp.com",
      databaseURL: "https://cyberthon-8e6f0-default-rtdb.firebaseio.com",
      projectId: "cyberthon-8e6f0",
      storageBucket: "cyberthon-8e6f0.appspot.com",
      messagingSenderId: "554653440274",
      appId: "1:554653440274:web:3a96eece739f0af215fbcb",
      measurementId: "G-MS3FFCDJDF"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();

    const documentRef1 = db.collection('aM2yd3KJ09Ym92GQ7JymaOSwTbi1').doc('Alleged Details');
    const documentRef2 = db.collection('aM2yd3KJ09Ym92GQ7JymaOSwTbi1').doc('Incident Details');
    const documentRef3 = db.collection('aM2yd3KJ09Ym92GQ7JymaOSwTbi1').doc('Complainant Details');

    documentRef1.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setComplaintData((prevData) => ({
          ...prevData,
          compId: doc.id,
          compName: data.algname || 'Not available',
          mobNum: data.mob || 'Not available',
          location: data.loc || 'Not available',
        }));
      } else {
        console.log('No such document1!');
      }
    });

    documentRef2.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        setComplaintData((prevData) => ({
          ...prevData,
          category: data.nature || 'Not available',
          details: data.desc || 'Not available',
          datefrom: data.datefrom || 'Not available',
          dateOfInci: data.datefrom || 'Not available',
        }));



        documentRef3.get().then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setComplaintData((prevData) => ({
              ...prevData,
              eyewitness: data.email || 'Not available',
              eyewitmob: data.mobile || 'Not available',
              eyewitloc: data.location || 'Not available',

            }));
          } else {
            console.log('No such document2!');
          }
        });



      } else {
        console.log('No such document2!');
      }
    });
  }, []);













  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  // const [isFullScreen,setIsFullScreen]=useState(false);
  const imageUrl = "https://example.com/sample-image.jpg";
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  let nbsp = "\u00A0";
  function openDialog() {
    document.getElementById('fileid').click();
  }
  let closeSummary = () => {
    document.querySelector('#viewNotesSummary').style.display = 'none'
  }
  let viewSummary = () => {
    document.querySelector('#viewNotesSummary').style.display = 'flex'
  }

  let closeComment = () => {
    document.querySelector('#addSummary').style.display = 'none'
  }

  let displayComment = () => {
    document.querySelector('#addSummary').style.display = 'block'

  }

  let addComment = () => {
    let content = document.querySelector('#enterComment').value;
    // Check if content is not empty before adding a new comment
    if (content.trim() !== '') {
      // Create a new div element
      let newComment = document.createElement('div');
      newComment.className = 'notesItem';

      // Set the innerHTML of the new div
      newComment.innerHTML = `
        <span className="noteTimeandDate">23/10/23 - 11:33 AM</span>
        <span className="noteCont">${content}</span>
      `;

      // Append the new div to #notesItemContainer
      document.querySelector('#notesItemContainer').appendChild(newComment);

      // Clear the input field
      document.querySelector('#enterComment').value = '';
      alert("Summary Updated Successfully")
      document.querySelector('#addSummary').style.display = 'none'
    }
  };

  return (
    <div className="casePage">
      <Navtop />
      <div className="casepage-mainsection">
        <div className="casepage-mainsection-left">
          <div className="case-top">
            <div className="case-top-left">
              <div className="case-head">Case Name: {complaintData.compId}</div>

            </div>
          </div>
          <div className="case-gridq">
            <div className="flex-1">
              <div className="flex-1-items">
                <h2 className="flex-head">FIR Image :</h2>
                <div>
                  <ImageComponent
                    imageUrl={imageUrl}
                    isFullscreen={isFullscreen}
                    toggleFullscreen={toggleFullscreen}
                  />
                </div>
              </div>
              <div className="flex-1-items">

                <div className="caseNameAndTag">
                  <h2 className="flex-head">{complaintData.details}</h2>

                  <div id="caseTagCont">
                    <div className="tag g">{complaintData.category}</div>
                    <div className="tag r">Murder</div>
                    <div className="tag">Forwarded</div>
                  </div>
                </div>
                <div>
                  {complaintData.details}
                </div>
              </div>
            </div>
            <div className="flex-2">

              <div className="flex-2-items victim">





                <h2 className="flex-head" onClick={() => navigate("/Communications")}>Victim Details:</h2>
                <div>
                  <span className="d">
                    Name: <span className="bold">{complaintData.compName}</span>
                  </span>
                  <span className="d">
                    Age: <span className="bold">30</span>
                  </span>
                  <span className="d">Address: {complaintData.location}</span>
                  <span className="d">Phone: {complaintData.mobNum}</span>
                </div>

              </div>


              <div className="flex-2-items">
                <h2 className="flex-head">Culprit Details:</h2>
                <div>
                  <span className="d">
                    Name: <span className="bold">Jane Doe</span>
                  </span>
                  <span className="d">
                    Age: <span className="bold">35</span>
                  </span>
                  <span className="d">Address: 456 Elm Street</span>
                  <span className="d">Phone: 555-555-5556</span>
                </div>
              </div>

              <div className="flex-2-items">
                <h2 className="flex-head">Eye Witness Details:</h2>
                <div>
                  <span className="d">
                    Name: <span className="bold">{complaintData.eyewitness}</span>
                  </span>
                  <span className="d">
                    Age: <span className="bold">25</span>
                  </span>
                  <span className="d">Address: {complaintData.eyewitloc}</span>
                  <span className="d">Phone: {complaintData.eyewitmob}</span>
                </div>
              </div>
            </div>
            <div className="flex-3">
              <div>DS</div>
              <div>DS</div>
              <div>DS</div>
            </div>
          </div>
        </div>
        <div className="casepage-mainsection-right">
          <div className="casepage-mainsection-right-top">
            <div className="casepage-mainsection-right-top-tags">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.875 7.5V14.375H6.875V1.875H11.25V5.3125C11.25 6.52 12.23 7.5 13.4375 7.5H16.875ZM13.125 2.02625L16.7237 5.625H13.4375C13.3546 5.625 13.2751 5.59208 13.2165 5.53347C13.1579 5.47487 13.125 5.39538 13.125 5.3125V2.02625ZM6.25 0C5.91848 0 5.60054 0.131696 5.36612 0.366117C5.1317 0.600537 5 0.918479 5 1.25V3.75H2.8125C1.95 3.75 1.25 4.45 1.25 5.3125V18.4375C1.25 19.3 1.95 20 2.8125 20H13.125C13.9875 20 14.6875 19.3 14.6875 18.4375V16.35C14.6876 16.3166 14.6859 16.2832 14.6825 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V5.5175C18.7499 5.18601 18.6182 4.86812 18.3837 4.63375L14.1163 0.36625C13.8819 0.131813 13.564 7.07968e-05 13.2325 0H6.25ZM5 15V5.625H3.125V18.125H12.8125V16.35C12.8125 16.3162 12.8137 16.2825 12.8175 16.25H6.25C5.91848 16.25 5.60054 16.1183 5.36612 15.8839C5.1317 15.6495 5 15.3315 5 15Z"
                  fill="#FFD233"
                />
              </svg>
              <div id="buttonid" onClick={openDialog}>Upload documents</div>
              <input type="file" id="fileid" hidden />
            </div>
            <div className="rightTopTagCont">
              <div className="casepage-mainsection-right-top-tags">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M6.125 7.875H14.875V6.125H6.125V7.875ZM15.75 20.125C14.5396 20.125 13.5077 19.6983 12.6542 18.8449C11.8008 17.9915 11.3744 16.9598 11.375 15.75C11.375 14.5396 11.8017 13.5077 12.6551 12.6542C13.5085 11.8008 14.5402 11.3744 15.75 11.375C16.9604 11.375 17.9923 11.8017 18.8457 12.6551C19.6992 13.5085 20.1256 14.5402 20.125 15.75C20.125 16.9604 19.6983 17.9923 18.8449 18.8457C17.9915 19.6992 16.9598 20.1256 15.75 20.125ZM15.3125 18.375H16.1875V16.1875H18.375V15.3125H16.1875V13.125H15.3125V15.3125H13.125V16.1875H15.3125V18.375ZM2.625 18.375V2.625H18.375V10.2375C17.9521 10.0333 17.5254 9.88021 17.0949 9.77812C16.6644 9.67604 16.2161 9.625 15.75 9.625C15.5896 9.625 15.44 9.62879 15.3011 9.63637C15.1623 9.64396 15.0202 9.66204 14.875 9.69062V9.625H6.125V11.375H11.4625C11.2146 11.6229 10.985 11.8927 10.7739 12.1844C10.5627 12.476 10.3766 12.7896 10.2156 13.125H6.125V14.875H9.69062C9.66146 15.0208 9.64308 15.1632 9.6355 15.302C9.62792 15.4408 9.62442 15.5902 9.625 15.75C9.625 16.2312 9.66875 16.6798 9.75625 17.0957C9.84375 17.5117 9.99687 17.9381 10.2156 18.375H2.625Z"
                    fill="#FFD233"
                  />
                </svg>


                <div id="addSummary">

                  <input type="text" id="enterComment" />
                  <div className="btnCont">
                    <button id="addComment" onClick={addComment}>Add Comment</button>
                    <button id="closeComment" onClick={closeComment}>Close</button>
                  </div>
                </div>

                <div onClick={displayComment}>Add notes <button id="viewSummary" onClick={viewSummary}>View Summary</button></div>
                <div id="viewNotesSummary">
                  <div className="headAndCloseCont">
                    <h1>Summary:</h1>
                    <span id="closeSummaryBtn" onClick={closeSummary}>Close</span>
                  </div>
                  <div id="notesItemContainer">
                    <div className="notesItem">

                      <span className="noteTimeandDate">23/10/23 - 11:33 AM</span>
                      <span className="noteCont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus iusto facere quo officiis vitae.</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="casepage-mainsection-right-top-tags">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M5.72909 9.37435C6.14349 9.37435 6.54091 9.20973 6.83394 8.9167C7.12697 8.62368 7.29159 8.22625 7.29159 7.81185C7.29159 7.39745 7.12697 7.00002 6.83394 6.70699C6.54091 6.41397 6.14349 6.24935 5.72909 6.24935C5.31468 6.24935 4.91726 6.41397 4.62423 6.70699C4.33121 7.00002 4.16659 7.39745 4.16659 7.81185C4.16659 8.22625 4.33121 8.62368 4.62423 8.9167C4.91726 9.20973 5.31468 9.37435 5.72909 9.37435ZM18.1353 12.0618C18.5103 12.4368 18.7499 12.9577 18.7499 13.541C18.7499 14.1139 18.5208 14.6348 18.1353 15.0098L12.927 20.2181C12.7338 20.4123 12.5041 20.5664 12.2512 20.6716C11.9982 20.7767 11.727 20.8308 11.453 20.8308C11.1791 20.8308 10.9079 20.7767 10.6549 20.6716C10.402 20.5664 10.1723 20.4123 9.97909 20.2181L2.69784 12.9368C2.31242 12.5514 2.08325 12.0306 2.08325 11.4577V6.24935C2.08325 5.0931 3.01034 4.16602 4.16659 4.16602H9.37492C9.94784 4.16602 10.4687 4.39518 10.8437 4.77018L18.1353 12.0618ZM14.1041 5.94727L15.1458 4.9056L22.302 12.0618C22.6874 12.4368 22.9166 12.9681 22.9166 13.541C22.9166 14.1139 22.6874 14.6348 22.3124 15.0098L16.7083 20.6139L15.6666 19.5723L21.6145 13.541L14.1041 5.94727Z"
                    fill="#FFD233"
                  />
                </svg>
                <div className="addtagbtn">Add tags</div>
              </div>
            </div>
          </div>
          <div >
            <h3 className="casediscusshead">Case discussion</h3>
            <div className="casediscuss">
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>
              <span className="discussItem">
                <span className="sender">xyz@gmail.com: </span>
                {nbsp}  Hi, have you chcked the files
              </span>

            </div>
          </div>
          <div className="officer-assigned">
            <div className="officer-assigned-head">
              Talk to Officers case assigned to
            </div>
            <div className="officer-assigned-info">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.08325 22.9173V4.16732C2.08325 3.5944 2.28742 3.10378 2.69575 2.69544C3.10409 2.28711 3.59436 2.08329 4.16659 2.08399H20.8333C21.4062 2.08399 21.8968 2.28815 22.3051 2.69649C22.7135 3.10482 22.9173 3.5951 22.9166 4.16732V16.6673C22.9166 17.2402 22.7124 17.7309 22.3041 18.1392C21.8958 18.5475 21.4055 18.7513 20.8333 18.7507H6.24992L2.08325 22.9173ZM6.24992 14.584H14.5833V12.5007H6.24992V14.584ZM6.24992 11.459H18.7499V9.37565H6.24992V11.459ZM6.24992 8.33399H18.7499V6.25065H6.24992V8.33399Z"
                  fill="#F4F4F4"
                />
              </svg>
              <div className="officer-assigned-info-details">
                <div>Mr Sukhpreet Singh</div>
                <div>IPS</div>
              </div>
              <div className="officer-assigned-info-img">hh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasePagee;
