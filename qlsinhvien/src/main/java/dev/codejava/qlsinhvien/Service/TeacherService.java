package dev.codejava.qlsinhvien.Service;

import dev.codejava.qlsinhvien.Entity.Student;
import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;

import java.util.List;

public interface TeacherService {
    List<Teacherdto> getAllTeacher();

}
