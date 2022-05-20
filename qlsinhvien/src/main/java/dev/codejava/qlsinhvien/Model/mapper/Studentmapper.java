package dev.codejava.qlsinhvien.Model.mapper;

import dev.codejava.qlsinhvien.Entity.Student;
import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Studentdto;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;

public class Studentmapper {

    public static Studentdto toStudentDto(Student student) {
        Studentdto tmp = new Studentdto();
        tmp.setId(student.getId());
        tmp.setFirstname(student.getFirstname());
        tmp.setLastname(student.getLastname());
        tmp.setEmail(student.getEmail());
        tmp.setDiemcc(student.getDiemcc());
        tmp.setDiemkt(student.getDiemkt());
        tmp.setDiemthi(student.getDiemthi());
        return tmp;
    }

}
