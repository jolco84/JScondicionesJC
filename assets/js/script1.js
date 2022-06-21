function cambiarBorde() {

    img = document.querySelector(".imagen")


    if (img.style.border == "10px solid blue" || img.style.border == "") {
        img.style.border = "10px solid black"
    } else {
        img.style.border = "10px solid blue"

    }



}