import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Navtop from '../Navbar/Navtop';
import './popupDetail.css';
import caseflow from '../../img/criminal-process.png';

const PopupDetail = () => {
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

    return (
        <>
            <div className="detailCont">
                <Navtop />
                <div className="caseLefRigCont">
                    <div className="caseLeftContainer">
                        <div className="caseidandname">
                            <span id="caseid">Case Id:</span>
                            <span id="casename">{complaintData.compId}</span>
                        </div>
                        <div className="tagcontainer">
                            Tags: <div className="casetags">{complaintData.category}</div>
                        </div>
                        <div className="compDetailsContainer">
                            <span>Complainee Name: <span id="compName">{complaintData.compName}</span></span>
                            <span>Place: <span id="compId">{complaintData.location}</span></span>
                            <span>Mobile Number:<span id="mobNum">{complaintData.mobNum}</span></span>
                            <span>Date of Incident: <span id="dateOfInci">{complaintData.dateOfInci}</span></span>
                            <span>Category:<span id="category">{complaintData.category}</span></span>
                        </div>
                        <div className="caseDet">
                            {complaintData.details}
                        </div>
                    </div>
                    <div className="caseRightCon">
                        <h1>Case Flow</h1>
                        <img src={caseflow} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupDetail;
