interface Animals{
    name?: string;
    owner?: string;
    weight: number;
    coverType: string;
    sound?: string;
    habitat: string;
    moving: ()=> string;
    generation: () => string;
}

class Cat implements Animals{
    name: string = 'Kate';
    owner: string = 'Bob';
    weight: number=4;
    coverType: string ='wool';
    sound: string = 'Meow';
    habitat: string='land';
    moving(): string{
        return 'running'
    }
    generation(): string{
        return 'viviparous'
    }
}
class Bird implements Animals{
    weight: number=0.3;
    coverType: string ='feathers';
    sound: 'Chirp';
    habitat: string='trees';
    moving(): string{
        return 'fly'
    }
    generation(): string{
        return 'flyblow'
    }
}
class Fish implements Animals{
    weight: number=0.5;
    coverType: string ='squama';
    habitat: string='water';
    moving(): string{
        return 'swimming'
    }
    generation(): string{
        return 'spawning'
    }
}
let cat1 = new Cat();
let bird1 = new Bird();
let fish1 = new Fish();
console.log('Cat' + '\r\n'+ 'Name: ' + cat1.name + '\r\n' + 'Owner: '  + cat1.owner + '\r\n' + 'Cover: ' + cat1.coverType + '\r\n'+ 'Generation: ' + cat1.generation() + '\r\n' + 'Habitat: ' + cat1.habitat + '\r\n'+ 'Moving: ' + cat1.moving() + '\r\n' + 'Sound: ' + cat1.sound + '\r\n'+ 'Weight: ' + cat1.weight + '\r\n');
console.log('Bird' + '\r\n'+ 'Cover: ' + bird1.coverType + '\r\n'+ 'Generation: ' + bird1.generation() + '\r\n' + 'Habitat: ' + bird1.habitat + '\r\n'+ 'Moving: ' + bird1.moving() + '\r\n' + 'Sound: ' + bird1.sound + '\r\n'+ 'Weight: ' + bird1.weight + '\r\n');
console.log('Fish' + '\r\n'+ 'Cover: ' + fish1.coverType + '\r\n'+ 'Generation: ' + fish1.generation() + '\r\n' + 'Habitat: ' + fish1.habitat + '\r\n'+ 'Moving: ' + fish1.moving() + '\r\n' + 'Weight: ' + fish1.weight + '\r\n');


