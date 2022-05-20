package dev.codejava.qlsinhvien.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tblstudent")
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "firstname", nullable = false)
    private String firstname;
    @Column(name = "lastname", nullable = false)
    private String lastname;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "diemcc", nullable = false)
    private float diemcc;
    @Column(name = "diemkt", nullable = false)
    private float diemkt;
    @Column(name = "diemthi", nullable = false)
    private float diemthi;

    @ManyToOne
    private Teacher teacher;

    public Student(String firstname, String lastname, String email, float diemcc, float diemkt, float diemthi, Teacher teacher) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.diemcc = diemcc;
        this.diemkt = diemkt;
        this.diemthi = diemthi;
        this.teacher = teacher;
    }

    public Student(String firstname, String lastname, String email, Teacher teacher) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.teacher = teacher;
    }
}
