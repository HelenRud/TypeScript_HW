import { Candy } from "./Candy";
import { Fruit } from "./Fruit";
import { Coat } from "./Coat";
import { Boots } from "./Boots";
import { ContentGenerator } from "./ContentGenerator";
window.onload = function () {
    let items = [];
    items.push(new Candy(150, 'Monblan', 'Ukrain', '2019', 1000, 'sold by weight'));
    items.push(new Candy(20, 'Mars', 'Poland', '2020', 100, 'sold by the piece'));
    items.push(new Fruit(30, 'Orange', 'Egypet', '2019', 1000, 'king size'));
    items.push(new Fruit(40, 'Banan', 'Italy', '2019', 1000, 'mini'));
    items.push(new Coat(800, 'long coat', 'Ukrain', 'male', 52, 'black'));
    items.push(new Coat(1200, 'short coat', 'France', 'female', 44, 'pink'));
    items.push(new Boots(2000, 'sandals', 'China', 'male', 44, 'tecstil'));
    items.push(new Boots(1200, 'slap', 'Poland', 'female', 37, 'skin'));
    let div = document.getElementById('section');
    ContentGenerator.print(div, items);
};
//# sourceMappingURL=main.js.map