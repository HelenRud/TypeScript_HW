export class Item {
    constructor(cost, name, fromCountry) {
        this.cost = cost;
        this.name = name;
        this.fromCountry = fromCountry;
    }
    getInfo() {
        return `This is ${this.name}, cost: ${this.cost}, made in: ${this.fromCountry}`;
    }
    get className() { return 'item'; }
}
//# sourceMappingURL=Item.js.map