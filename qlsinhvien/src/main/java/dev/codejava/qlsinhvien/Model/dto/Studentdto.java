package dev.codejava.qlsinhvien.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Studentdto implements Serializable {

    private long id;
    private String firstname;
    private String lastname;
    private String email;
    private float diemcc;
    private float diemkt;
    private float diemthi;

}
