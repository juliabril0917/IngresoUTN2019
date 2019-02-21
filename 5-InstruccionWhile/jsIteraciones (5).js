function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();

while (sexo != "f" && sexo != "m") {

    sexo = prompt("error. ingrese f o m");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN