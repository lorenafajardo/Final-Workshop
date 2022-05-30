package com.usersBingo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usersBingo.model.UserModel;

public interface UserRepository extends JpaRepository <UserModel, Integer>{ 

}
