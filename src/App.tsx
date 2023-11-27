import { useState } from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  // gate click handling section
  const [click, setClick] = useState(false);
  const ClickHandler = () => {
    setClick(true);
  };

  return (
    <div className="App">
      {/* gate code */}
      <div className={`gate-container ${click ? "gate-opened" : ""}`}>
        <button onClick={ClickHandler} className="glowing-btn">
          <span className="glowing-txt">
            E<span className="faulty-letter">X</span>PLORE
          </span>
        </button>
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
