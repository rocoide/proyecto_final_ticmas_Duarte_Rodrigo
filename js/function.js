
let boton = document.getElementById(`boton`);
let div_estudios = document.getElementById(`div_estudios`);

boton.onclick = function(){
    console.log("hola mundo");
    if(div_estudios.style.display === "none")
    {
        div_estudios.style.display = "block";
        boton.innerHTML = "ocultar campos de Educacion"
    }
    else
    {
        div_estudios.style.display = "none";
        boton.innerHTML = "mostrar campos de Educacion"
    }
}