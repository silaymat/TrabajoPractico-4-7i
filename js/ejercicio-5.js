/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento, dni = "") {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.nacimiento = nacimiento;
    }
    mostrarGeneracion() {
      switch (true) {
        case this.nacimiento >= 1930 && this.nacimiento <= 1948:
          console.log(
            `Perteneces a la generación Silent Generation y tu razgo característico es la Austeridad 😐`
          );
          break;
        case this.nacimiento >= 1949 && this.nacimiento <= 1968:
          console.log(
            `Perteneces a la generación Baby Boom y tu razgo característico es la Ambicion 🤑`
          );
          break;
        case this.nacimiento >= 1969 && this.nacimiento <= 1980:
          console.log(
            "Perteneces a la generación X y tu razco característico es Obsesión por el Éxito 😎"
          );
          break;
        case this.nacimiento >= 1981 && this.nacimiento <= 1993:
          console.log(
            "Perteneces a la generación Y y tu razco característico es Frustación 😖"
          );
          break;
        case this.nacimiento >= 1994 && this.nacimiento <= 2010:
          console.log(
            "Perteneces a la generación Z y tu razco característico es Irreverencia 😜"
          );
          break;
        default:
          console.log(
            "Perteneces a una generación nueva y tu rasgo característico está por descubrirse 🤔"
          );
          break;
      }
    }
    mostrarDatos() {
      console.log("------Datos personales------");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Dni: ${this.dni}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Peso: ${this.peso}`);
      console.log(`Altura: ${this.altura}`);
      console.log(`Año de nacimiento: ${this.nacimiento}`);
    }
    generarDni() {
      if (!this.dni) {
        for (let i = 0; i < 8; i++) {
          let numerito = Math.round(Math.random() * 9);
          this.dni += String(numerito);
        }
        console.log(`El DNI generado es: ${this.dni}`);
      }
    }
  }