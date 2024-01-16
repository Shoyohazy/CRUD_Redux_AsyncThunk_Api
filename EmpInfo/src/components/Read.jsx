import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../features/userSlice';
import '../styling/Read.css'

function Read() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users);
    const { users, loading } = user;

    useEffect(() => {
        //console.log("first from rea")
        dispatch(showUser())
    }, [])

    if (loading) {
        return <h2 style={{ color: "black" }}>Data is Loading ...</h2>
    }

    return (
        <div className='table-container'>
            <table className="table-info">
                <thead className='headings'>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {users.map((user, index) => (
                    <tbody key={user.id} className={index % 2 == 0 ? "gray-bg" : "white-bg"}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td className='table-buttons'>
                                <button><i class="gg-eye-alt"></i></button>
                                <button><i class="gg-pen"></i></button>
                                <button><i class="gg-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Read


