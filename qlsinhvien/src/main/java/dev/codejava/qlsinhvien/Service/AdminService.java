package dev.codejava.qlsinhvien.Service;


import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;

import java.util.List;

public interface AdminService {
    List<Teacherdto> getAllTeacher();
    void createTeacher(Teacher teacher);
    Teacher getTeacherById(Long id);
    Teacher updateTeacher(Teacher teacher);
    void delete(Long id);
    Teacherdto checklogin(String username, String password);
}
