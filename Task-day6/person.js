class Person {
    constructor(name, heigth, weigth, age, colour, qualification, city, state) {
        this.name = name;
        this.heigth = heigth;
        this.weigth = weigth;
        this.age = age;
        this.colour = colour;
        this.qualification = qualification;
        this.city = city;
        this.state = state;
    }
    details() {
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1 = new Person("Harivasan", "5.7", "67", "21", "Dark", "B.E", "Tindivanam", "Tamilnadu")
Person1.details()