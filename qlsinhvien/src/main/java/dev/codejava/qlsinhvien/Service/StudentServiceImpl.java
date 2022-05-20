package dev.codejava.qlsinhvien.Service;

import dev.codejava.qlsinhvien.Entity.Student;
import dev.codejava.qlsinhvien.Model.dto.Studentdto;
import dev.codejava.qlsinhvien.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }

    @Override
    public List<Student> getAllStudentByPointDesc() {
        return studentRepository.getAllStudentByPointDesc();
    }

    @Override
    public List<Student> getAllStudentByPointAsc() {
        return studentRepository.getAllStudentByPointAsc();
    }

    @Override
    public Student save(Student stu) {
        return studentRepository.save((Student) stu);
    }

    @Override
    public void update(Student stu) {
         studentRepository.save(stu);
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.getOne(id);
    }

    @Override
    public void delete(Long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public List<Studentdto> searchStudent(String key, List<Studentdto> list) {
        List<Studentdto> result = new ArrayList<>();
        for(int i = 0; i < list.size(); i++) {
            if(list.get(i).getFirstname().contains(key)) {
                result.add(list.get(i));
            }
        }
        return result;
    }


}
