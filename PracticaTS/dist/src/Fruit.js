import { Food } from "./Food";
export class Fruit extends Food {
    constructor(cost, name, fromCountry, expDate, weight, variety) {
        super(cost, name, fromCountry, expDate, weight);
        this.variety = variety;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo}, type: ${this.variety}`;
    }
    get className() { return 'fruit'; }
}
//# sourceMappingURL=Fruit.js.map