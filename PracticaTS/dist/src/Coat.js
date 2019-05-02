import { Close } from "./Close";
export class Coat extends Close {
    constructor(cost, name, fromCountry, gender, size, color) {
        super(cost, name, fromCountry, gender, size);
        this.color = color;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo}, color: ${this.color}`;
    }
    get className() { return 'coat'; }
}
//# sourceMappingURL=Coat.js.map