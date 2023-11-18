import React, { useState } from "react";
import userpfp from "../../img/userpfp.png";
import policepfp from "../../img/policepfp.jpg"
import "./officers.css";
import { ranks, officers } from "./MockData";
import Navtop from "../Navbar/Navtop";

const Officers = () => {
  const [selectedRank, setSelectedRank] = useState(null);

  const handleRankClick = (rank) => {
    setSelectedRank(rank);
  };

  const filteredOfficers = selectedRank
    ? officers.filter((officer) => officer.rank === selectedRank)
    : officers;

  return (
    <div className="officers-page">
      <Navtop />
      <div className="police-list">
        <div className="ranks">
          <h2 className="ranks-head">Officers</h2>
          <ul>
            {ranks.map((rank, index) => (
              <li
                key={index}
                onClick={() => handleRankClick(rank)}
                className={rank === selectedRank ? "selected" : ""}
              >
                {rank}
              </li>
            ))}
          </ul>
        </div>
        <div className="officers">
          <div className="Cases officers-list">
            <input
              className="mainLoginInput CaseSearch"
              type="text"
              placeholder="Search..."
            />
            <div className="data-container officer-data-container">
              {/* <div className="data-row header">
                <div className="data-cell">Officer ID</div>
                <div className="data-cell">Officer Name</div>
                <div className="data-cell">Rank</div>
                <div className="data-cell">Station</div>
              </div> */}
              {filteredOfficers.map((officer) => (
                // <div className="data-row" key={officer.id}>
                //   <div className="data-cell">{officer.id}</div>
                //   <div className="data-cell">{officer.name}</div>
                //   <div className="data-cell">{officer.rank}</div>
                //   <div className="data-cell">{officer.station}</div>
                // </div>

                <div className="officer-list">
                  <div className="officer-list-top">
                    <div>
                      <img src={policepfp} alt="" className="policepfp" />
                    </div>
                    <div>
                      <div className="officer-list-name">Name</div>
                      <div className="officer-list-rank">Rank</div>
                    </div>
                  </div>
                  <div className="officer-list-bottom">
                    <div className="contact-details">
                      <div> 9990000343    </div>
                      <div>sukhuna lake, chandigarh</div>
                    </div>
                    <div>
                      <div className="officer-list-about">About :</div>
                      <div className="officer-list-desc">
                        <span className="exp">Year of experience:  11Years
                        </span>
                        <span className="achievements">Achievements: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum delectus facilis voluptatum?
                        </span>
                        <span className=""></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officers;