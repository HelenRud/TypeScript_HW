
let sum: number = 0;
let j: number = 0;
let size = ()=> prompt('Large/Small');
let stuffing = ()=> prompt('Inpup one or more stuffings (comma separated): chocolate, caramel, berries');
let sprinkling = ()=> prompt('Sprinkling marshmallow? Yes/No');

let myIce = {
    sizeIce: size(),
    stuffingIce: stuffing().split(', '),
    sprinklingIce: sprinkling()
}

function cost(s: string,  sprink: string, stuff: Array<string>){
    if (s=='Large') sum += 25;
    else if (s=='Small') sum += 10;
    else {alert('Incorrect size!'); return;}

    if (sprink=='Yes') sum +=5;
    else if ((sprink!='Yes') && (sprink!='No')) {alert('Input Yes/No to choose sprinkling!'); return;}
    
    for (let i: number = 0; i<stuff.length; i++){
        switch (stuff[i]){
        case "chocolate": 
            sum +=5;
            break;
        case "caramel": 
            sum +=6;
            break;  
        case "berries": 
            sum +=10;
            break;
        default: 
            {alert('Incorrect stuffing!'); return}      
        }
    }
    return sum;
}
console.log(myIce);
console.log(cost(myIce.sizeIce, myIce.sprinklingIce, myIce.stuffingIce));

