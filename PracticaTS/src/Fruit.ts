import {Food} from "./Food"

export class Fruit extends Food{
    constructor(cost: number, name: string, fromCountry:string, expDate: string, weight: number, private variety: string){
        super(cost, name, fromCountry, expDate, weight);
    }
    getInfo():string{
        let baseInfo=super.getInfo();
        return `${baseInfo}, type: ${this.variety}`
    }
    get className(){return 'fruit'}
}