class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    set setName(name) {
        if (name == '') {
            throw new Error;
        }
        this.name = name;
    }
    set setSurname(surname) {
        if (surname == '') {
            throw new Error;
        }
        this.surname = surname;
    }
    get getName() {
        return this.name;
    }
    get getSurname() {
        return this.surname;
    }
}
let worker = new Person('Cristina', 'Cretu');
console.log(worker.getName);
console.log(worker.getSurname);
console.log(worker.setSurname = 'Petrov');
console.log(worker.getSurname);