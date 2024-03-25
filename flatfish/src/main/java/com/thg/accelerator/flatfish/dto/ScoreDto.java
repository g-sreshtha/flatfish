package com.thg.accelerator.flatfish.dto;

import com.thg.accelerator.flatfish.entities.Gender;
import com.thg.accelerator.flatfish.entities.Role;
import lombok.*;

@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@ToString
public class ScoreDto {

    private String userId;
    private String name;
    private String password;
    private String birthday;
    private long age;
    private String description;
    private String userGender;
    private String instagram;
    private String picture;
    private long budgetMin;
    private long budgetMax;
    private long ageMin;
    private long ageMax;
    private Gender gender;

    private String location1;
    private String location2;
    private String location3;

    private Role role;

    private Double score;
}
