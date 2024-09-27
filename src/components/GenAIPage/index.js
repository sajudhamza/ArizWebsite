import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import GenaiSection from '../GenaiSection';
import {
  homeObjOne,
  homeObjTwo
} from '../GenaiSection/genaiData';
import GenAIHome from './GenAIHome';

function GenAI() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GenAIHome />
      <GenaiSection {...homeObjOne} />
      <GenaiSection {...homeObjTwo} />
      {/* <GenaiSection {...homeObjThree} />  */}
    </>
  );
}

export default GenAI;
