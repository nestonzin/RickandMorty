import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alive } from "./pages/Alive";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Alive" element={<Alive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
