import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {

    let navigate = useNavigate();

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: ""
    })


    const handleSubmit = (e) => {


        e.preventDefault();
        if (!(localStorage.getItem("role") !== 0)) navigate('/login')
        else {

            fetch(`http://localhost:8080/student/new`, {

                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify(
                    {
                        firstname: data.firstname,
                        lastname: data.lastname,

                        email: data.email,
                        teacher: {
                            id: localStorage.getItem("id"),
                            username: localStorage.getItem("username"),
                            password: localStorage.getItem("password"),
                            role: localStorage.getItem("role")
                        }
                    }
                )

            }).then(res => res.json()).finally(() => navigate("/student"))



        }

    }

    return (
        <>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">

                <a class="navbar-brand" href="#">Student Management System</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Student Management</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 container justify-content-center card">
                        <h1 class="text-center">Create new student</h1>
                        <div class="card-body">
                            <form   >
                                <div class="form-group">
                                    <label>Student first name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        class="form-control"
                                        placeholder="Enter student firstname"
                                        onChange={(e) => setData((prev) => ({ ...prev, firstname: e.target.value }))}
                                        value={data.firstname}
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Student last name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        class="form-control"
                                        placeholder="Enter student lastname"
                                        onChange={(e) => setData((prev) => ({ ...prev, lastname: e.target.value }))}
                                        value={data.lastname}
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Student email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        class="form-control"
                                        placeholder="Enter student email"
                                        onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                                        value={data.email}
                                    />
                                </div>
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateStudent