import React, {useState} from 'react';
import Leaf from "./Leaf";

const MiddleMan = ({left, right}) => {

  const leftWithMessage = React.cloneElement(left, {message: 'lefty'});
  const rightWithMessage = React.cloneElement(right, {message: 'righty'})

  return <Leaf left={leftWithMessage} right={rightWithMessage}/>

};


export default MiddleMan;
