import { Food } from "./Food";
export class Candy extends Food {
    constructor(cost, name, fromCountry, expDate, weight, type) {
        super(cost, name, fromCountry, expDate, weight);
        this.type = type;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo}, type: ${this.type}`;
    }
    get className() { return 'candy'; }
}
//# sourceMappingURL=Candy.js.map