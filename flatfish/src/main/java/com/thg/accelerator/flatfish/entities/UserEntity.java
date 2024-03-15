package com.thg.accelerator.flatfish.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users")
@SecondaryTables({
        @SecondaryTable(name = "Preferences"),
        @SecondaryTable(name = "UserLocations")
})
public class UserEntity {

    @Id
    @Column(name = "user_id")
    private String userId;

    @Column(name = "Name")
    private String name;

    @Column(name = "Birthday")
    private String birthday;

    @Column(name = "Age")
    private long age;

    @Column(name = "Description")
    private String description;

    @Column(name = "UserGender")
    private String userGender;

    @Column(name = "Instagram")
    private String instagram;

    @Column(name= "Smoker")
    private boolean smoker;

    @Column(name = "BudgetMin", table = "Preferences")
    private long budgetMin;

    @Column(name = "BudgetMax", table = "Preferences")
    private long budgetMax;

    @Column(name = "AgeMin", table = "Preferences")
    private long ageMin;

    @Column(name = "AgeMax", table = "Preferences")
    private long ageMax;

    @Column(name = "Gender", table = "Preferences")
    private Gender gender;

    @OneToMany(mappedBy = "userEntity")
    private List<UserLocationsEntity> locationEntities;

    // TODO: May need a new constructor for when a UserDto w/o UserId comes in and needs its id generated by this class
}
