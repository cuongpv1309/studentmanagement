package dev.codejava.qlsinhvien.Controller;

import dev.codejava.qlsinhvien.Entity.Student;
import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Studentdto;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;
import dev.codejava.qlsinhvien.Model.mapper.Studentmapper;
import dev.codejava.qlsinhvien.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/student", produces = "application/json")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }


    @PostMapping("")
    public ResponseEntity<?> listStudent(@RequestBody Teacherdto teacher) {
        List<Student> list  = studentService.getAllStudent();
        List<Studentdto> dto = new ArrayList<>();
        for(int i = 0; i <  list.size(); i++)
        {
            if(list.get(i).getTeacher().getId() == teacher.getId())
                dto.add(Studentmapper.toStudentDto(list.get(i)));
        }
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/desc")
    public ResponseEntity<?> listStudentbyDesc() {
        List<Student> list  = studentService.getAllStudentByPointDesc();
        List<Studentdto> dto = new ArrayList<>();
        for(int i = 0; i <  list.size(); i++)
        {
            dto.add(Studentmapper.toStudentDto(list.get(i)));
        }
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/asc")
    public ResponseEntity<?> listStudentbyAsc() {
        List<Student> list  = studentService.getAllStudentByPointAsc();
        List<Studentdto> dto = new ArrayList<>();
        for(int i = 0; i <  list.size(); i++)
        {
            dto.add(Studentmapper.toStudentDto(list.get(i)));
        }
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/new")
    public void createStudent(@RequestBody Student student) {

//        System.out.println(student.getTeacher().getId());

        studentService.save(student);
    }


    @GetMapping("/edit/{id}")
    public void editStudent(@PathVariable Long id) {
        studentService.getStudentById(id);
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> updateStudent(@RequestBody Student student) {
        //get stu from database
        Long id = student.getId();
        Student stu = studentService.getStudentById(id);
        stu.setFirstname(student.getFirstname());
        stu.setLastname(student.getLastname());
        stu.setEmail(student.getEmail());
        stu.setDiemcc(student.getDiemcc());
        stu.setDiemkt(student.getDiemkt());
        stu.setDiemthi(student.getDiemthi());
        studentService.delete(id);
        studentService.save(stu);
        return ResponseEntity.ok(stu);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseStatusException deleteStudent(@PathVariable Long id) {
        studentService.delete(id);
        return new ResponseStatusException(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchStudent(@RequestParam(name = "keyword") String name) {
        List<Student> list  = studentService.getAllStudent();
        List<Studentdto> dto = new ArrayList<>();
        for(int i = 0; i <  list.size(); i++)
        {
            dto.add(Studentmapper.toStudentDto(list.get(i)));
        }
        List<Studentdto> result =  studentService.searchStudent(name, dto);
        return ResponseEntity.ok(result);
    }

}
