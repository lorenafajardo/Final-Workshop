package com.usersBingo.repository;

/**Imporación de librerias */
import org.springframework.data.jpa.repository.JpaRepository;
import com.usersBingo.model.UserModel;

/**
 * la Interface ContactRepository, se extiende JpaRepository para obtener operaciones CRUD básicas 
 * 
 * @author LORENA FAJARDO
 * @version 1.0
 */
public interface UserRepository extends JpaRepository <UserModel, Integer>{ 

}
