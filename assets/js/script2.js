function verfica(){

    s1 = document.querySelector(".stick1")
    s2 = document.querySelector(".stick2")
    s3 = document.querySelector(".stick3")

    total = Number(s1.value) + Number(s2.value) + Number(s3.value)

    msj = document.querySelector(".mensaje")

    if (total>10){
        msj.innerHTML = "Llevas demasiados stickers!!"
    }else if(total>=1){
        msj.innerHTML = " Llevas " + total + " stickers."
    }else if(total==0){
        msj.innerHTML = "Debes introducir cuantos sticker llevas"
    }
   
}