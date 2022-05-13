document.addEventListener("DOMContentLoaded", function(){

    //declara variables
    let imagenes = [
        {
            url:"imagenees/descarga.jpg",
            nombre: "silicon1"
        },
        {
            url:"imagenees/El-futuro-de-la-sede-de-Silicon-Valley.jpg",
            nombre: "silicon2"
        },
        {
            url:"imagenees/images.jpg",
            nombre: "silicon3"
        },
        {
            url:"imagenees/maxresdefault.jpg",
            nombre: "silicon4"
        },
        {
            url:"imagenees/Silicon_Valley_kGrsGzz.png",
            nombre: "silicon5"
        },
        {
            url:"imagenees/VCW_D_SiliconValley_Hero_20140708_Google_19 copy-1280x642_0.jpg",
            nombre: "silicon6"
        },
        {
            url:"imagenees/descarga.jpg",
            nombre: "silicon1"
        },
        {
            url:"imagenees/El-futuro-de-la-sede-de-Silicon-Valley.jpg",
            nombre: "silicon2"
        },
        {
            url:"imagenees/images.jpg",
            nombre: "silicon3"
        },
        {
            url:"imagenees/maxresdefault.jpg",
            nombre: "silicon4"
        },
        {
            url:"imagenees/Silicon_Valley_kGrsGzz.png",
            nombre: "silicon5"
        },
        {
            url:"imagenees/VCW_D_SiliconValley_Hero_20140708_Google_19 copy-1280x642_0.jpg",
            nombre: "silicon6"
        },
    ]
    //guardar tablero
    let tablero = document.querySelector(".tablero");

    //funcion para agregar las imagenes al tablero
    function agregarimagenes(){
        for (let index = 0; index < imagenes.length; index++) {
            let img  = document.createElement("img");
            img.setAttribute("src", "imagenees/pregunta.png");
            img.setAttribute("width", "200px");
            img.setAttribute("height", "200px");
            //pasar al tabalero las imagenes
            tablero.appendChild(img);
        }
    }
agregarimagenes();



})