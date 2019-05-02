import { Close } from "./Close";
export class Boots extends Close {
    constructor(cost, name, fromCountry, gender, size, material) {
        super(cost, name, fromCountry, gender, size);
        this.material = material;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo}, color: ${this.material}`;
    }
    get className() { return 'boots'; }
}
//# sourceMappingURL=Boots.js.map