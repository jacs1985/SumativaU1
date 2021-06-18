var arreglo = new Array();
arreglo["nombre"]="errorNombre";
arreglo["primerAp"]="errorApellido";
arreglo["email"]="errorEmail";
arreglo["password"]="errorPassword";

function validar(obj){
    if(obj.value == ""){
        var element = document.getElementById(arreglo[obj.id]);
        element.className = "alert alert-danger";
        element.innerHTML = "El campo no puede estar vacio";
        element.hidden = false;
        
    }
    else{
        if(obj.id == "email"){
            var element = document.getElementById(obj.id);
            var arroba = element.value.indexOf("@");
            var punto = element.value.lastIndexOf(".");

            if(arroba<1 || punto < arroba + 2 || element.length<punto+2){
                var element = document.getElementById(arreglo[obj.id]);
                element.className = "alert alert-danger";
                element.innerHTML = "Correo no valido";
                element.hidden = false;
            }
            else {
                var element = document.getElementById(arreglo[obj.id]);
                element.innerHTML = "";
                element.hidden = true;
            }
        }
        else{
            var element = document.getElementById(arreglo[obj.id]);
            element.innerHTML = "";
            element.hidden = true;
        }

    }
   

}
function validarTodos(){
    for(i in arreglo){
        //valido
        if(!document.getElementById(arreglo[i]).hidden || document.getElementById(arreglo[i]).innerHTML=="*"){
            var element = document.getElementById("mensajeFinal");
            element.className = "alert alert-danger";
            element.innerHTML = "Hay campos no validos";
            element.hidden = false;
            return false;
        }
        else{
            var element = document.getElementById("mensajeFinal");
            element.innerHTML = "";
            element.hidden = true;
        }
    }
    
    window.location.href="/templates/productos/listaProductos.html";

}