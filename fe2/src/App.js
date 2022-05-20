import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Student from './Component/Student'
import CreateStudent from './Component/CreateStudent'
import UpdateStudent from './Component/Update'
import Login from './Component/LoginForm'
import Teacher from './Component/Teacher'
import CreateTeacher from './Component/CreateTeacher'

function App() {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<Student />} />
      <Route path="/create_student" element={<CreateStudent />} />
      <Route path="/update" element={<UpdateStudent />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/create_teacher" element={<CreateTeacher />} />
    </Routes>
  );
}

export default App;

