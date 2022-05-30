/** Importacio de librerias*/
package com.usersBingo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

/**
 * La clase userModel contiene la definicion de variables a utilizar en la aplicacion y sus respectivos metodos
 * getters and setters para acceder a ellas
 * 
 * @author LORENA FAJARDO
 * @version 1.0
 */
@Entity
public class UserModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@NotBlank(message = "Campo obligatorio")
	private String email;

	@NotBlank(message = "Campo obligatorio")
	private String password;
	
	private String name;
	
	private String identification;
	
	private String id_game;

	
	/** Genereacion de Getters y Setters para cada atributo*/
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIdentification() {
		return identification;
	}

	public void setIdentification(String identification) {
		this.identification = identification;
	}

	public String getId_game() {
		return id_game;
	}

	public void setId_game(String id_game) {
		this.id_game = id_game;
	}

	/** Definicion de constructor vacio*/
	public UserModel() {
		super();
	}

	/** Definicion de constructor con todos los atributos*/
	public UserModel(Integer id,
			@NotBlank(message = "Campo obligatorio") String email,
			@NotBlank(message = "Campo obligatorio") String password,
			String name, String identification, String id_game) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.identification = identification;
		this.id_game = id_game;
	}
		
}
