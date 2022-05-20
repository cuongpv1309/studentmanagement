package dev.codejava.qlsinhvien.Service;

import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;
import dev.codejava.qlsinhvien.Model.mapper.Teachermapper;
import dev.codejava.qlsinhvien.Repository.AdminRepository;
import dev.codejava.qlsinhvien.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public List<Teacherdto> getAllTeacher() {
        List<Teacherdto> list = new ArrayList<>();
        List<Teacher> teachers = adminRepository.findAll();
        for(Teacher teacher : teachers) {
            list.add(Teachermapper.toTeacherDto(teacher));
        }
        return list;
    }

    @Override
    public void createTeacher(Teacher teacher) {
        adminRepository.save(teacher);
    }

    @Override
    public Teacher getTeacherById(Long id) {
        return adminRepository.getOne(id);
    }

    @Override
    public Teacher updateTeacher(Teacher teacher) {

        return null;
    }

    @Override
    public void delete(Long id) {
         adminRepository.deleteById(id);
    }

    @Override
    public Teacherdto checklogin(String username, String password) {
        List<Teacher> list = adminRepository.findAll();
        List<Teacherdto> tmp = new ArrayList<>();

        for(Teacher teacher : list) {
            tmp.add(Teachermapper.toTeacherDto(teacher));
        }

        for(int i = 0; i < list.size(); i++) {
            if(tmp.get(i).getUsername().equals(username) && tmp.get(i).getPassword().equals(password)) {
                return tmp.get(i);
            }
        }
        return null;
    }
}
