import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserTable from "./components/UserTable";
import Modal from "./components/Modal";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/users/:id" element={<Modal />} />
          <Route path="/user/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
