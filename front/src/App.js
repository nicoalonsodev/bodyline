import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;
