import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { addSearchUser } from "../features/userSlice";

function Navbar() {
  const { users, searchUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // setSearchData(e.target.value);
    dispatch(addSearchUser(e.target.value));
  }

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Create User </Link>
          </li>
          <li className="nav-item">
            <Link to="/users">All Users({users.length})</Link>
          </li>
        </ul>
      </div>
      <input
        className="search-bar"
        type="search"
        id="search-bar"
        placeholder="Search..."
        value={searchUser}
        onChange={(e) => handleSearch(e)}
      />
    </nav>
  );
}
export default Navbar;

{
  /* // <div>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid ">
    //       <a href="#" className="navbar-brand">
    //         RTK
    //       </a>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link to='/' className="nav-link" >
    //               Create Post
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to='/users' className="nav-link" >
    //               All Post
    //             </Link>
    //           </li>
    //         </ul>
    //         <input
    //           className="form-control me-2 w-50"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //       </div>
    //     </div>
    //   </nav>
    // </div> */
}
