package dev.codejava.qlsinhvien;

import dev.codejava.qlsinhvien.Entity.Student;
import dev.codejava.qlsinhvien.Entity.Teacher;
import dev.codejava.qlsinhvien.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QlsinhvienApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(QlsinhvienApplication.class, args);
	}

	@Autowired
	StudentService studentService;

	@Override
	public void run(String... args) throws Exception {
//		Student student1 = new Student("cuong" , "ngu" ,"asdfasdf@gmail.com" , 1,2,3  ,new Teacher(4, "tc3" , "1" ,1)) ;
//
//		Student student2 = new Student("cuon1g" , "ngu" ,"asdfasdf@gmail.com" , 1,2,3  ,new Teacher(4, "tc3" , "1" ,1)) ;
//
//		Student student3 = new Student("cuong2" , "ngu" ,"asdfasdf@gmail.com" , 1,2,3  ,new Teacher(4, "tc3" , "1" ,1)) ;
//
//		Student student4 = new Student("cuong3" , "ngu" ,"asdfasdf@gmail.com" , 1,2,3  ,new Teacher(4, "tc3" , "1" ,1)) ;
//
//		studentService.save(student1);
//
//		studentService.save(student2);
//
//		studentService.save(student3);
//
//		studentService.save(student4);

	}
}
