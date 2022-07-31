//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    mostrarPropiedades(){
        document.write(`<p>El alto del rectangulo es: ${this.alto}, y su ancho es: ${this.ancho} <br></p>`);
        document.write(`<p>El perímetro es: ${this.perimetro()} <br></p>`);
        document.write(`<p>El area es: ${this.mostrarPropiedades()} <br></p>`);
    }
    perimetro(){
        return this.ancho*2 + this.alto*2;
    }
    area(){
        return this.ancho*this.alto;
    }
    modificarPropiedades(alto,ancho){
        let newAlto = parseInt(prompt(`El alto actual es ${this.alto}, ingrese el número de su nueva altura`));
        let newAncho = parseInt(prompt(`El ancho actual es: ${this.ancho}, ingrese el número de su nuevo ancho `));
        if(isNaN(newAlto)|| isNaN(newAncho)|| newAncho <0 ||newAlto < 0 ){
            alert("Ingrese números positivos");
            return this.modificarPropiedades();
        }
    }
};