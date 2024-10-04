import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import ArchitectureSection from '../ArchitectureSection';
import {
  homeObjOne,
  homeObjTwo
} from '../ArchitectureSection/ArchitectureData';
import ArchitectureHome from './ArchitectureHome';
import NavbarArch from '../Navbar Architecture';

function Architecture() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarArch toggle={toggle} />
      <ArchitectureHome />
      <ArchitectureSection {...homeObjOne} />
      <ArchitectureSection {...homeObjTwo} />
      {/* <GenaiSection {...homeObjThree} />  */}
    </>
  );
}

export default Architecture;
