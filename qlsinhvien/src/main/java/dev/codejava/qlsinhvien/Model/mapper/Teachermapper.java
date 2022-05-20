package dev.codejava.qlsinhvien.Model.mapper;

import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;

public class Teachermapper {

    public static Teacherdto toTeacherDto(Teacher teacher) {
        Teacherdto tmp = new Teacherdto();
        tmp.setId(teacher.getId());
        tmp.setUsername(teacher.getUsername());
        tmp.setPassword(teacher.getPassword());
        tmp.setRole(teacher.getRole());
        return tmp;
    }

}
