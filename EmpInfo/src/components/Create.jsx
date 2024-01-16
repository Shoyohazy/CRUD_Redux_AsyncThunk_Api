import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import '../styling/Create.css';

function Create() {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
        console.log(users);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        dispatch(createUser(users));
        navigate("/users");
    };
    return (
        <div className="Form-container">
            <form className="container-info" onSubmit={handleSubmit}>
                <div className="field-div">
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div className="field-div">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" onChange={handleChange} />
                </div>
                <div className="field-div">
                    <label class="form-label">Age</label>
                    <input type="text" name="age" onChange={handleChange} />
                </div>
                <div className="gender-section">
                    <div className="gender-div">
                        <input name="gender" value="Male" type="radio" />
                        <label>Male</label>
                    </div>
                    <div className="gender-div">
                        <input name="gender" value="Female" type="radio" />
                        <label>Female</label>
                    </div>
                </div>

                <div className="submit-button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Create;
