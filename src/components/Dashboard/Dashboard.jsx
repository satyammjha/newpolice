import React from "react";
import "./Dashboard.css";
import Table from "../Cases/Cases";
import GeoMap from "../Charts/GeoMap";
import DonutChart from "../Charts/DonutChart";
import Navtop from "../Navbar/Navtop";
import ChandigarhGeoChart from "../Charts/chandigarhGeoMap";
import ChandigarhMap from "../Charts/chandigarhGeoMap";
import DistrictWiseCrimeMap from "../Charts/District";
import CrimeRateLineChart from "../Charts/lineChart";
import Recentcases from "../Recentviewedcases/recentcases";
import Navbar from "../Navbar/Navbar";
import Solvedunolved from '../Allcases/Solvedunsolved'
import fakeCases from '../Allcases/fakeCases'
import fwdcase from './FwdCase'
import FwdCase from "./FwdCase";


export const mapStyle = {
  height: '50%',
  width: '30%'
};





const Dashboard = () => {
  return (
    <div className="Dashboard">

      <Navtop />
      <div className="graph-cases">
        <div className="graph-cases-left">
          <div className="graph-cases-left-head">
            Officers Dashboard
          </div>
          <div className="graph-cases-left-geo-graph" style={mapStyle}>

            <div className="m">
              <GeoMap />
            </div>
            <div className="mm">
              <DistrictWiseCrimeMap />
            </div>
          </div>

          <div className="graph-cases-left-other-graph">
            <CrimeRateLineChart />
          </div>
          <div className="recntcases">

            <Recentcases />

          </div>


          <div className="forwardedCaseSection">
          <FwdCase />
        </div>
        </div>



        <div className="graph-cases-right">
          <div className="graph-cases-right-graph">
            <DonutChart />
          </div>
          <div className="cases">
            <Solvedunolved cases={fakeCases} height="50vh" width="max-content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
