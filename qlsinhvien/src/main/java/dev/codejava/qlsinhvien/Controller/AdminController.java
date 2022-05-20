package dev.codejava.qlsinhvien.Controller;

import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Model.dto.Teacherdto;
import dev.codejava.qlsinhvien.Service.AdminService;
import dev.codejava.qlsinhvien.Service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/admin", produces = "application/json")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("")
    public ResponseEntity<?> getAllTeacher() {
        List<Teacherdto> list = adminService.getAllTeacher();
        for(int i = 0; i< list.size(); i++) {
            if(list.get(i).getRole() == 0) {
                list.remove(i);
                break;
            }
        }
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public void createTeacher(@RequestBody Teacher teacher) {
        teacher.setRole(1);
        adminService.createTeacher(teacher);
    }

    @PutMapping()
    public ResponseEntity<?> updateTeacher() {
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTeacherById(@PathVariable Long id) {
        Teacher teacher = adminService.getTeacherById(id);
        return ResponseEntity.ok(teacher);
    }

    @DeleteMapping("/{id}")
    public void deleteTeacher(@PathVariable Long id) {
        adminService.delete(id);
    }

    @GetMapping("/login")
    public ResponseEntity checklogin(@RequestParam(name = "username") String username,
                                        @RequestParam(name = "password") String password){
        Teacherdto teacher = adminService.checklogin(username, password);
        if(teacher == null) {
            return  ResponseEntity.ok(null);
        } else if(teacher.getRole() == 0) {
            return ResponseEntity.ok(teacher);
        } else if(teacher.getRole() == 1) {
            return ResponseEntity.ok(teacher);
        }
        return null;
    }

}
