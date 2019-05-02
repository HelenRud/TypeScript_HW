import { Item } from "./Item";
export class Food extends Item {
    constructor(cost, name, fromCountry, expDate, weight) {
        super(cost, name, fromCountry);
        this.expDate = expDate;
        this.weight = weight;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo}, expDate: ${this.expDate}, weight: ${this.weight}`;
    }
    get className() { return 'food'; }
}
//# sourceMappingURL=Food.js.map