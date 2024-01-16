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
        return <h2>Data is Loading ...</h2>
    }

    return (
        <div className='table-container'>
            <table className="table">
                <thead >
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {users.map((user, index) => (
                    <tbody key={user.id}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <button>View</button>
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Read


