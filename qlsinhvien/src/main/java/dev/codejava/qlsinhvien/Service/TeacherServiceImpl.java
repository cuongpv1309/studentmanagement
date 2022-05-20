package dev.codejava.qlsinhvien.Service;

import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;
import dev.codejava.qlsinhvien.Model.mapper.Teachermapper;
import dev.codejava.qlsinhvien.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService{

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public List<Teacherdto> getAllTeacher() {
        List<Teacherdto> list = new ArrayList<>();
        List<Teacher> teachers = teacherRepository.findAll();
        for(Teacher teacher : teachers) {
            list.add(Teachermapper.toTeacherDto(teacher));
        }
        return list;
    }
}
