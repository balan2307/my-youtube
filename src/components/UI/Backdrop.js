import React from 'react';
import ReactDOM from 'react-dom';

const BackdropContent = () => {
  return (
    <div className="fixed top-0 left-0 pointer-events-none 
     h-screen w-screen z-40 bg-[#000000] opacity-25"></div>
  );
};

function Backdrop() {
  return ReactDOM.createPortal(<BackdropContent />, document.getElementById('backdrop-root'));
}

export default Backdrop;
