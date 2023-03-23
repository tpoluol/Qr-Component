import { useState } from 'react';
import qr from './assets/image-qr-code.png';

function App() {
  return (
    <div className="text-[15px] bg-LightGray flex justify-center items-center h-[100vh]">
      <div className="p-4 h-[400px] w-[250px] rounded-[15px] flex flex-col font-Outfit bg-white">
        <img className="rounded-[15px] " src={qr} />
        <p className="text-[17px] p-3 font-[700] text-center">
          Improve your front-end skills by building projects
        </p>
        <p className="text-[12px] font-[400] text-center">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
