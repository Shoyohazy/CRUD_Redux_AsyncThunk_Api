import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Read from "./components/Read";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/users" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
