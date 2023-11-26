import React from 'react'
import Navtop from '../Navbar/Navtop'
import './Dashboard3.css'
import Chart from 'react-google-charts'
import CrimeRateLineChart from "../Charts/lineChart";
import Criticalcase from '../Recentviewedcases/recentcases';
import Forwardedcases from '../Dashboard/FwdCase'
import Resourcealloc from '../Resourcealloc/Resourcealloc';
import ChandigarhMap from '../Charts/GeoMap';
import DistrictWiseCrimeMap from "../Charts/District";
import NewCasePopup from '../NewCasePopup/NewCasePopup';

const DashboardRole3 = () => {
    return (
        <>
            <div className="dashMainContainer">
                <Navtop />
                <NewCasePopup />
                <div className="dashCompoContain">

                    <div className="dash3LeftContainer">
                        <h1>Officers Dashboard</h1>
                        <div className="mapContainer">
                            <DistrictWiseCrimeMap />
                        </div>

                        <div className="leftBottomContainer">
                            <div className="leftBottomLeftContainer">
                                <h3>Crime rate in your area in past one month</h3>
                                <div className="lineChartContainer">
                                    <CrimeRateLineChart />
                                </div>

                                <div className="crtclHead"><span className="criticalSymbol"><span className="criticalCrcl"></span></span><h3>Critical Case</h3></div>
                                <div className="criticalcasecomcont">
                                    <Criticalcase />
                                </div>
                            </div>
                            <div className="leftBottomRight">
                                <h3>Updates on critical cases</h3>
                                <Forwardedcases />

                            </div>
                        </div>
                    </div>
                    <div className="dash3RightContainer">
                        <div className="dashRightResourcesData">
                            <h2>Resources left under you</h2>
                            <div className="resourceData">
                                <span className="veh">105 vehicles</span>
                                <span className="guns">75 guns</span>
                                <span className="facilities">105 vehicles</span>
                            </div>

                        </div>
                        <div className="resourceAllocContainer">
                            <h2>Resource Allocation</h2>
                            <Resourcealloc />


                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default DashboardRole3