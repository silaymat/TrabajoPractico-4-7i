/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        document.write(`<br><br>Código</br> ${this.codigo}`);
        document.write(`<br><br>Nombre</br> ${this.nombre}`);
        document.write(`<br><br>Precio</br> ${this.precio} <br><br>`);
    }
}

let productos =[]

function agregarProducto(){
    for(let i =0; i <3; i++){
        let codigo = new Date().getTime();
        let nombre = prompt("Ingrese el nombre del producto");
        let precio = prompt("Ingrese el precio del producto");

        productos.push(new Producto(codigo, nombre, precio));
    }
}

function mostrarDatos(){
productos.forEach(function(producto){
    producto.imprimeDatos();
});
}