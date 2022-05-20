package dev.codejava.qlsinhvien.Service;

import dev.codejava.qlsinhvien.Entity.Student;
import dev.codejava.qlsinhvien.Model.dto.Studentdto;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    List<Student> getAllStudent();
    List<Student> getAllStudentByPointDesc();
    List<Student> getAllStudentByPointAsc();
    Student save(Student stu);
    void update(Student stu);
    Student getStudentById(Long id);
    void delete(Long id);
    List<Studentdto> searchStudent(String key, List<Studentdto> list);
}
