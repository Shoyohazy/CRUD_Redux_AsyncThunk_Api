import { useSelector } from 'react-redux'
import '../styling/Modal.css'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
function Modal() {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState({});

    const data = useEffect(() => {
        getUser();
    }, [])

    async function getUser() {
        try {
            const response = await fetch(`https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users/${id}`);
            const result = await response.json();
            setCurrentUser(result)
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate();

    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => navigate("/users")}>Close</button>
                <h2>{currentUser?.name}</h2>
                <h3>{currentUser?.email}</h3>
                <h4>{currentUser?.age}</h4>
                <h4>{currentUser?.gender}</h4>
            </div>
        </div>

    )
}

export default Modal