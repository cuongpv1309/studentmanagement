package dev.codejava.qlsinhvien.Repository;

import dev.codejava.qlsinhvien.Entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Teacher, Long> {
}
