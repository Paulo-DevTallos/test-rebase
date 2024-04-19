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

    getAge() {
        return this.age;
    }
}

const execute = new Execute("John", "Doe")
console.log(execute.mountFullName());


const executeClass = new Execute(32)
console.log(executeClass.getAge()); 
