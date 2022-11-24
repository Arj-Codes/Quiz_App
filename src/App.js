import React from "react";
import About from "./components/home/About";
import Quesform from "./components/home/Quesform";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" component={<About />} />
          <Route path="/Quesform" component={<Quesform />} /> */}
          <Route path="/">
            <Route index element={<About />} />
            <Route path="Quesform" element={<Quesform />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
