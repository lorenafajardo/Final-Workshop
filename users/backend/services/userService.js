'use srict'

const person_register = async( email, password ) =>{
    
    await axios({
        method: 'post',
        url : 'http://localhost:9090/user',
        responseType : 'json',
        data: {
            'email' : email,
            'password': password,
        }
    }).then (function(response) {
        if(response.ok) {
            return response.text()
        } else {
            throw "Error en la llamada Ajax";
        }
    })
}