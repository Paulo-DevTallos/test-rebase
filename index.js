class Execute {
    name = ""
    lastname = ""
    age = null;
    
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    mountFullName() {
        return `${this.name} ${this.lastname}`
    }

    calculateBorrnYear() {
        return new Date().getFullYear() - this.age;
    }

    getAge() {
        return this.age;
    }

    phraseGenerator() {
        return `Hello, my name is ${this.name} ${this.lastname} and I am ${this.age} years old`;
    }

    joinPhraseAndCalculateBorrnYear() {
        return `${this.phraseGenerator()} and I was born in ${this.calculateBorrnYear()}`
    }
}

const execute = new Execute("John", "Doe")
console.log(execute.mountFullName());


const executeClass = new Execute(32)
console.log(executeClass.getAge()); 
