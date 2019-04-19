class Cat {
    constructor() {
        this.name = 'Kate';
        this.owner = 'Bob';
        this.weight = 4;
        this.coverType = 'wool';
        this.sound = 'Meow';
        this.habitat = 'land';
    }
    moving() {
        return 'running';
    }
    generation() {
        return 'viviparous';
    }
}
class Bird {
    constructor() {
        this.weight = 0.3;
        this.coverType = 'feathers';
        this.habitat = 'trees';
    }
    moving() {
        return 'fly';
    }
    generation() {
        return 'flyblow';
    }
}
class Fish {
    constructor() {
        this.weight = 0.5;
        this.coverType = 'squama';
        this.habitat = 'water';
    }
    moving() {
        return 'swimming';
    }
    generation() {
        return 'spawning';
    }
}
let cat1 = new Cat();
let bird1 = new Bird();
let fish1 = new Fish();
console.log('Cat' + '\r\n' + 'Name: ' + cat1.name + '\r\n' + 'Owner: ' + cat1.owner + '\r\n' + 'Cover: ' + cat1.coverType + '\r\n' + 'Generation: ' + cat1.generation() + '\r\n' + 'Habitat: ' + cat1.habitat + '\r\n' + 'Moving: ' + cat1.moving() + '\r\n' + 'Sound: ' + cat1.sound + '\r\n' + 'Weight: ' + cat1.weight + '\r\n');
console.log('Bird' + '\r\n' + 'Cover: ' + bird1.coverType + '\r\n' + 'Generation: ' + bird1.generation() + '\r\n' + 'Habitat: ' + bird1.habitat + '\r\n' + 'Moving: ' + bird1.moving() + '\r\n' + 'Sound: ' + bird1.sound + '\r\n' + 'Weight: ' + bird1.weight + '\r\n');
console.log('Fish' + '\r\n' + 'Cover: ' + fish1.coverType + '\r\n' + 'Generation: ' + fish1.generation() + '\r\n' + 'Habitat: ' + fish1.habitat + '\r\n' + 'Moving: ' + fish1.moving() + '\r\n' + 'Weight: ' + fish1.weight + '\r\n');
//# sourceMappingURL=main.js.map