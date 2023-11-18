import React from 'react'
import Solvedunsolved from './Solvedunsolved'
import fakecases from '../Allcases/fakeCases'
import Navtop from '../Navbar/Navtop'

const Allcases = () => {

  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'

  }

  const customInputFieldStyle = {
    // Add your custom styles here
    width: '20rem',
  };



  const customCaseItemContainerStyle = {
    width: '45vw'
  };


  return (
    <>

      <div style={style}>
        <Navtop />
        <div className="solUnsolParentContainer">
          <Solvedunsolved cases={fakecases} height="50rem" width="50rem" inputFieldStyle={customInputFieldStyle} caseItemContainerStyle={customCaseItemContainerStyle} />


        </div>
      </div>
    </>
  )
}

export default Allcases
