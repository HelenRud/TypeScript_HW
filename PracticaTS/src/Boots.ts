import {Close} from "./Close"

export class Boots extends Close{
    constructor(cost: number, name: string, fromCountry:string, gender: string, size: number, private material: string){
        super(cost, name, fromCountry, gender, size);
    }
    getInfo():string{
        let baseInfo=super.getInfo();
        return `${baseInfo}, color: ${this.material}`
    }
    get className(){return 'boots'}
}
