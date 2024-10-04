import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import DataEngineeringSection from '../DataEngineeringSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../DataEngineeringSection/DataEngineeringData';
import DataEngineeringHome from './DataEngineeringHome';
import NavbarData from '../Navbar Data';

function DataEngineering() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarData toggle={toggle} />
      <DataEngineeringHome />
      <DataEngineeringSection {...homeObjOne} />
      <DataEngineeringSection {...homeObjTwo} />
      <DataEngineeringSection {...homeObjThree} />
    </>
  );
}

export default DataEngineering;
