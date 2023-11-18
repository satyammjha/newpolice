import React from 'react'
import Navtop from '../Navbar/Navtop'
import './communication.css'
import profile from '../../img/userpfp.png'
import dialer from '../../img/dialer.png'
import videodialer from '../../img/video.png'
import voice from '../../img/voice.png'


const style = {
    width: '100%'
}

const pfpstyle = {
    height: "60px",
    borderRadius: "50%"

}





const communication = () => {
    return (
        <>
            <div className="communicationMainContainer" style={style}>

                <Navtop />

                <div className="communiLeftRighContainer">

                    <div className="communiLeftContainer">

                        <div className="communiSearch">
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="communiItemContainer">


                            <div className="communiItem">
                                <span className="chatImg"><img src={profile} alt="" style={pfpstyle} /></span>
                                <span className="ChatNameContainer">
                                    <span className="chatName">John Smith</span>
                                    <span className="chatDesc">Lorem ipsum dolor </span>
                                </span>
                                <span className="chatTime">Today, 03:30 PM</span>
                            </div>
                            <div className="communiItem">
                                <span className="chatImg"><img src={profile} alt="" style={pfpstyle} /></span>
                                <span className="ChatNameContainer">
                                    <span className="chatName">John Smith</span>
                                    <span className="chatDesc">Lorem ipsum dolor </span>
                                </span>
                                <span className="chatTime">Today, 03:30 PM</span>
                            </div>

                        </div>
                    </div>



                    <div className="communiRightContainer">

                        <div className="communiRightTop">
                            <span className="chatImg"><img src={profile} alt="" style={pfpstyle} /></span>
                            <span className="ChatNameContainer">
                                <span className="chatName">John Smith</span>
                                <span className="activeStatus">Online</span>
                            </span>
                            <span className="chatOptionContainer">

                                <img src={dialer} alt="" height="30px" />
                                <img src={videodialer} alt="" height="30px" />
                                <span className="threeDotsContainer">
                                    <span className="dots"></span>
                                    <span className="dots"></span>
                                    <span className="dots"></span>


                                </span>

                            </span>



                        </div>



                        <div className="communiBottomContainer">
                            <input type="text" />
                            <img src={voice} alt="" height="50px" />

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default communication
