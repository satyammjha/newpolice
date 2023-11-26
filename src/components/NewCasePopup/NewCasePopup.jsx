import React, { useState, useEffect, Link } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './newcasepopup.css';
import loader from '../../img/loader.gif'

const NewCasePopup = () => {
    const [complaintData, setComplaintData] = useState({
        compId: 'Not available',
        compName: 'Not available',
        mobNum: 'Not available',
        dateOfInci: 'Not available',
        category: 'Not available',
        details: 'Not available',
    });
    const closePopup = () => {
        document.querySelector('.newPopupMainContainer').style.display = 'none'

    }
    const loaderAnim = () => {
        const loaderContent = document.querySelector('.loaderContent');
        const spans = loaderContent.querySelectorAll('span');

        // Hide other elements
        document.querySelector('.popupttl').style.display = 'none';
        document.querySelector('.compDetailsContainer').style.display = 'none';
        document.querySelector('.compDetailsCont').style.display = 'none';
        document.querySelector('.btnCont').style.display = 'none';
        document.querySelector('#loader').style.display = 'block';

        // Show the loader content initially
        loaderContent.style.display = 'block';

        let currentSpanIndex = 0;

        // Function to update the display of spans
        const updateSpanDisplay = () => {
            spans.forEach((span, index) => {
                span.style.display = index === currentSpanIndex ? 'block' : 'none';
            });

            currentSpanIndex = (currentSpanIndex + 1) % spans.length;
        };

        // Initial display
        updateSpanDisplay();

        // Set an interval to update the display every 2 seconds
        const intervalId = setInterval(() => {
            updateSpanDisplay();
        }, 2000);

        // Clear the interval after 6 seconds (3 spans x 2 seconds each)
        setTimeout(() => {
            clearInterval(intervalId);
        }, 6000);
        setTimeout(() => {
            window.location.href = '/casedetails'
        }, 9000);

    };

    useEffect(() => {
        // Initialize Firebase (replace with your Firebase config)
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

        // Get a reference to the Firestore database
        const db = firebase.firestore();

        // Replace 'your_collection_name' and 'your_document_id' with your actual values
        const documentRef1 = db.collection('aM2yd3KJ09Ym92GQ7JymaOSwTbi1').doc('Alleged Details');
        const documentRef2 = db.collection('aM2yd3KJ09Ym92GQ7JymaOSwTbi1').doc('Incident Details');

        // Fetch data from Firestore
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
            } else {
                console.log('No such document2!');
            }
        });




    }, []);


    console.log(complaintData);



    return (




        <div className="newPopupMainContainer">
            <span className="popupttl">New Case Reported</span>
            <div className="compDetailsContainer">
                <span>Complainee Name: <span id="compName">{complaintData.compName}</span></span>
                <span>Place: <span id="compId">{complaintData.location}</span></span>

                <span>Mobile Number:<span id="mobNum">{complaintData.mobNum}</span></span>
                <span>Date of Incident: <span id="dateOfInci">{complaintData.dateOfInci}</span></span>
                <span>Category:<span id="category">{complaintData.category}</span></span>
            </div>
            <div className="compDetailsCont">
                <h3>Details:</h3>
                <div className="compDetails">{complaintData.details}</div>
            </div>

            <div className="loaderContent">
                <span className="sending">Sending data.....</span>
                <span className="processing">Processing data.....</span>
                <span className="receiving">Getting data.....</span>

            </div>
            <img src={loader} alt="" id='loader' />
            <div className="btnCont">



                <div className="takeAction" onClick={loaderAnim}>Take Action</div>

                <div className="closePop" onClick={closePopup}>Close</div>
            </div>
        </div>
    );
};

export default NewCasePopup;
