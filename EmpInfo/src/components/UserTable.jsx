import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userSlice';
import { Link } from 'react-router-dom';
import '../styling/UserTable.css'
import Modal from './Modal';

function UserTable() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users);
    const { users, loading } = user;
    const [id, setId] = useState();
    const [popup, setPopup] = useState(false);
    const handleView = (id) => {
        setId(id);
        setPopup(true);
    }
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }

    useEffect(() => {
        //console.log("first from rea")
        dispatch(showUser())
    }, [])

    if (loading) {
        return <h2 style={{ color: "black" }}>Data is Loading ...</h2>
    }

    return (
        <div className="table-container">
            {/* {popup && <Modal />} */}
            <table className="table-info">
                <thead className="headings">
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {users && users.map((user, index) => (
                    <tbody
                        key={user.id}
                        className={index % 2 == 0 ? "gray-bg" : "white-bg"}
                    >
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td className="table-buttons">
                                <Link to={`/users/${user.id}`}>
                                    <button onClick={() => handleView(user.id)}>
                                        <i className="gg-eye-alt"></i>
                                    </button>
                                </Link>
                                <Link to={`/${user.id}`}>
                                    <button >
                                        <i className="gg-pen"></i>
                                    </button>
                                </Link>
                                <Link>
                                    <button onClick={() => handleDelete(user.id)}>
                                        <i className="gg-trash"></i>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default UserTable;


