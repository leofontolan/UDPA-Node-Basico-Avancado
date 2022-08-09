module.exports = class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} says woof!`;
    }
}