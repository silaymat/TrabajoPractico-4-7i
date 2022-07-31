//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
    color:"verde",
    marca:"Fiat",
    modelo:"Linea",
    anio:"2015",
    encendido:"false",
    encenderApagar: function(){
        this.encendido = ! this.encendido;
        if(this.encendido) {
            console.log("El vehículo está encendido");

        }else {
            console.log("El vehiculo está apagado");
        }
    }
};
