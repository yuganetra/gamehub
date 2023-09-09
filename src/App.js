import React, {useState} from 'react';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {

   // gate click handling section
   const [click, setClick] = useState(false);
   const ClickHandler = () => {
     setClick(true);
   }

  return (
    <div className='App'>

    {/* gate code */}
     <div className={`gate-container ${click ? "gate-opened" : ""}`}>
        <button onClick={ClickHandler} className="glowing-btn">
         <span className="glowing-txt">E<span className="faulty-letter">X</span>PLORE</span>
        </button>
      </div>

    {/* sidebar */}
      <Sidebar />


    {/* Home Js inside which every homepage components are imported */}
      <Home />
    </div>
  );
}

export default App;
