import React, {useState} from 'react';

const Leaf = ({left, right}) => {
  const [leftIsVisible, setLeftIsVisible] = useState(true);
  const [rightIsVisible, setRightIsVisible] = useState(true);

  return (
    <>
      <div>
        <button type="button" onClick={() => setLeftIsVisible(!leftIsVisible)}>Toggle Left</button>
        <button type="button" onClick={() => setRightIsVisible(!rightIsVisible)}>Toggle Right</button>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        { leftIsVisible && left}
        { rightIsVisible && right}
      </div>
    </>
  );
};

export default Leaf;
