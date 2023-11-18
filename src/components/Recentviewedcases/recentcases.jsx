import React from 'react'
import './recentcases.css'


export const data = [
    { casetype1: 'case1' },
    { casetype2: 'case2' }

]



const recentcases = () => {
    return (
        <>
            {/* <h1 className='lastviewedcaseh1'>Last Viewed Case</h1> */}
            <div className="lastCaseMainContainer">

                <div className="casetypecontainer" data={data}>
                    <div className="casetype1">Casetype1</div>
                    <div className="casetype2">Casetype2</div>

                </div>
                <h2>Case Name</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem modi similique dicta, assumenda odit unde hic itaque perspiciatis nostrum iure.</p>
                <div className="caseStatus">Forwarded to higher authority</div>
            </div>
        </>
    )
}

export default recentcases