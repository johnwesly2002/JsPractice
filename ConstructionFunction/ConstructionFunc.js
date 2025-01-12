function Person(name,age){
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log(`Hello ${this.name} age: ${this.age}`);
    }
}

const person1 = new Person('Alice',25);
person1.sayHello();