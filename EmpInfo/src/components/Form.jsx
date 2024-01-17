import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUser, createUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import "../styling/Form.css";

function Form(props) {
    const [users, setUsers] = useState({ ...props });
    const [isEditing, setIsEditing] = useState(users.id ? true : false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };
    console.log(users);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            //dispatch put
            dispatch(UpdateUser(users));
            setIsEditing(false);
        } else {
            dispatch(createUser(users));
        }
        navigate("/users");
    };

    return (
        <>
            <div className="Form-container">
                <form className="container-info" onSubmit={handleSubmit}>
                    <div className="field-div">
                        <label>Name</label>
                        <input
                            type="text"
                            value={users.name}
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field-div">
                        <label>Email</label>
                        <input
                            type="email"
                            value={users.email}
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field-div">
                        <label>Age</label>
                        <input
                            type="text"
                            value={users.age}
                            name="age"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="gender-section">
                        <div className="gender-div">
                            <input name="gender" onChange={handleChange} checked={users && users.gender === "Male"} value="Male" type="radio" />
                            <label>Male</label>
                        </div>
                        <div className="gender-div">
                            <input name="gender" onChange={handleChange} checked={users && users.gender === "Female"} value="Female" type="radio" />
                            <label>Female</label>
                        </div>
                    </div>

                    <div className="submit-button">
                        <button type="submit">{isEditing ? "Update" : "Add"}</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;
