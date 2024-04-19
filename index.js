class Execute {
    name = ""
    lastname = ""
    
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    mountFullName() {
        return `${this.name} ${this.lastname}`
    }
}

const execute = new Execute("John", "Doe")
console.log(execute.mountFullName());