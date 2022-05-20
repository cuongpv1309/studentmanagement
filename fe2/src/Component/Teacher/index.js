import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";


const Teacher = () => {

    const navigate = useNavigate();


    const [teachers, setTeachers] = useState(null)

    useEffect(() => {
        if (!(localStorage.getItem("role"))) navigate('/login')
        else
            getListTeacher()
    }, [])



    const getListTeacher = async () => {

        const response = await fetch('http://localhost:8080/admin');

        const myJson = await response.json();

        setTeachers(myJson)
    }

    const handleDelete = async (id) => {

        let temp = teachers.filter(item => item.id !== id)

        setTeachers(temp)


        const response = await fetch(`http://localhost:8080/admin/${id}`, {
            method: 'DELETE'

        })

        const myJson = await response.json();

    }

    const handleUpdate = (student) => {
        // navigate('/update' , {state  :student})
    }

    return (
        <>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">

                <a class="navbar-brand" href="#">Teacher Management System</a>


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Teacher Management</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item ml-auto">
                            <a class="nav-link" href="#" onClick={() => {
                                localStorage.clear()
                                navigate('/login')
                            }}>Logout</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>

            <div class="container">
                <div class="row">
                    <h1>List Teachers</h1>
                </div>

                <div class="row">
                    <div class="col-lg-3">
                        <Link to="/create_teacher">
                            <a class="">
                                Add new teacher
                            </a>
                        </Link>

                    </div>
                </div>
                <table class="table table-striped table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>User name</th>
                            <th>Password</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            teachers?.map(teacher => (
                                <tr>
                                    <td >{teacher.username}</td>
                                    <td >{teacher.password}</td>
                                    <td>
                                        <a class="btn btn-danger" onClick={() => handleDelete(teacher.id)}>Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>


                </table>
            </div>
        </>
    )
}

export default Teacher