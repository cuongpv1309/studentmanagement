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
public class Teacherdto implements Serializable {

    private long id;

    private String username;

    private String password;

    private int role;

}
