import { Item } from "./Item";
export class Close extends Item {
    constructor(cost, name, fromCountry, gender, size) {
        super(cost, name, fromCountry);
        this.gender = gender;
        this.size = size;
    }
    getInfo() {
        let baseInfo = super.getInfo();
        return `${baseInfo}, gender: ${this.gender}, size: ${this.size}`;
    }
    get className() { return 'close'; }
}
//# sourceMappingURL=Close.js.map