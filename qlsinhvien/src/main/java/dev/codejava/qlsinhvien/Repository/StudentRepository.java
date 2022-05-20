package dev.codejava.qlsinhvien.Repository;

import dev.codejava.qlsinhvien.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query(value = "select * from qlsinhvien.tblstudent order by diemthi desc", nativeQuery = true)
    public List<Student> getAllStudentByPointDesc();

    @Query(value = "select * from qlsinhvien.tblstudent order by diemthi asc", nativeQuery = true)
    public List<Student> getAllStudentByPointAsc();

}
