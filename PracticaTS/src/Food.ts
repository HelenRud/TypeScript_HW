import {Item} from "./Item"

export abstract class Food extends Item{
    constructor(cost: number, name: string, fromCountry:string, private expDate: string, private weight: number){
        super(cost, name, fromCountry);
    }
    getInfo():string{
        let baseInfo=super.getInfo();
        return `${baseInfo}, expDate: ${this.expDate}, weight: ${this.weight}`
    }
    get className(){return 'food'}
}