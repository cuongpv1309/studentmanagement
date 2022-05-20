import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";


const Student = () => {

    const navigate = useNavigate();

    const { state } = useLocation();


    const [students, setStudents] = useState(null)

    const [keyword, setKeyword] = useState(null)

    useEffect(() => {
        console.log(localStorage.getItem("role"))
        if (!(localStorage.getItem("role"))) navigate('/login')
        else
            getListStudent()
    }, [])

    useEffect(() => {
        if (keyword !== null) searchByKeyword()
    }, [keyword])

    const searchByKeyword = async (k) => {

        const response = await fetch(`http://localhost:8080/student/search?keyword=${keyword}`, {

            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'

            }

        });

        const myJson = await response.json();

        setStudents(myJson)
    }

    const getListStudent = async () => {


        const response = await fetch('http://localhost:8080/student', {

            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(

                {
                    id: localStorage.getItem('id'),
                    username: localStorage.getItem('username'),
                    password: localStorage.getItem('password'),
                    role: localStorage.getItem('role'),
                }

            )

        });

        const myJson = await response.json();

        setStudents(myJson)
    }

    const handleDelete = async (id) => {

        let temp = students.filter(item => item.id !== id)

        setStudents(temp)


        const response = await fetch(`http://localhost:8080/student/delete/${id}`, {
            method: 'DELETE'

        })
        const myJson = await response.json();

    }

    const handleUpdate = (student) => {
        navigate('/update', { state: student })
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
                    <h1>List Students</h1>
                </div>

                <div class="input-group">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </div>

                <div class="row">
                    <div class="col-lg-3">
                        <Link to="/create_student">
                            <a class="">
                                Add new student
                            </a>
                        </Link>

                    </div>
                </div>
                <table class="table table-striped table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Student First Name</th>
                            <th>Student Last Name</th>
                            <th>Email</th>
                            <th>Diem CC</th>
                            <th>Diem KT</th>
                            <th>Diem thi</th>
                            <th>Ket qua</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            students?.map(student => (
                                <tr>
                                    <td >{student.firstname}</td>
                                    <td >{student.lastname}</td>
                                    <td >{student.email}</td>
                                    <td >{student.diemcc}</td>
                                    <td >{student.diemkt}</td>
                                    <td >{student.diemthi}</td>
                                    <td >{ ! (student.diemcc == 0 || student.diemkt == 0 || student.diemthi == 0 ) ? student.diemcc*0.1 + student.diemkt * 0.2 + student.diemthi * 0.7 : "Fail" }</td>


                                    <td>
                                        <a class="btn btn-primary" onClick={() => handleUpdate(student)} >Update</a>

                                        <a class="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</a>

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

export default Student