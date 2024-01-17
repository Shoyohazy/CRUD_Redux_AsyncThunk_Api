import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useParams } from 'react-router-dom';

function UpdateUser() {
    const [currentUser, setCurrentUser] = useState();
    const { id } = useParams();

    useEffect(() => {
        getUser(id);

    }, [])

    async function getUser() {
        try {
            const response = await fetch(`https://65a4f82652f07a8b4a3e0ac5.mockapi.io/crud/users/${id}`);
            const result = await response.json();
            setCurrentUser(result)
            console.log("user", currentUser)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form {...currentUser} />
    )
}

export default UpdateUser