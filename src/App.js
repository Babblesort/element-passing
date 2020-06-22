import React from 'react';
import MiddleMan from "./MiddleMan";
import LeftShark from "./LeftShark";
import RightShark from "./RightShark";
import './App.css';

function App() {
  return (
    <div className="App">
      <MiddleMan left={<LeftShark />} right={<RightShark />} />
    </div>
  );
}

export default App;
