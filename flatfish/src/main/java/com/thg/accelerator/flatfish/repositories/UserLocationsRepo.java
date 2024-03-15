package com.thg.accelerator.flatfish.repositories;

import com.thg.accelerator.flatfish.entities.UserLocationsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLocationsRepo extends JpaRepository<UserLocationsEntity, Long> {
}
