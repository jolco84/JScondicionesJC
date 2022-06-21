function ingresar(){

    dig1 = document.querySelector(".clave1")
    dig2 = document.querySelector(".clave2")
    dig3 = document.querySelector(".clave3")
    msj = document.querySelector(".mensaje")

    if(dig1.value==9 && dig2.value==1 && dig3.value==1 ){
       
        msj.innerHTML = "Password 1 es correcto"
        msj.style.color = "blue"
    }else{
        if (dig1.value==7 && dig2.value==1 && dig3.value==4){
            msj.innerHTML = "Password 2 es correcto"
            msj.style.color = "blue"
        }else{            
            msj.innerHTML = "Password Incorrecto"
            msj.style.color = "red"
        }
    }
}   