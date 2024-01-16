import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function Create() {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        console.log(users)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        dispatch(createUser(users));
        navigate('/users')
    }
    return (
        <div>

            <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" name="name" class="form-control" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Age</label>
                    <input type="text" name="age" class="form-control" onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <input
                        class="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                    />
                    <label class="form-check-label mx-2">Male</label>
                </div>
                <div class="mb-3">
                    <input
                        class="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                    />
                    <label class="form-check-label mx-2">Female</label>
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Create;
