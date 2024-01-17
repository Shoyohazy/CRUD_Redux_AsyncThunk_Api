import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserTable from "./components/UserTable";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/users/:id" element={<Modal />} />
          <Route path="/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
