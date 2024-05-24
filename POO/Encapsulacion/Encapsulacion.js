class Persona {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    get getName(){
        return this.name
    }

    set setName(name){
        this.name = name;
    }
}

const agustin = new Persona("Agustin", 21)

agustin.setName = "Brian Agustin";

console.log(agustin.name)


