import {Item} from "./Item"

export abstract class Close extends Item{
    constructor(cost: number, name: string, fromCountry:string, private gender: string, private size: number){
        super(cost, name, fromCountry);
    }
    getInfo():string{
        let baseInfo=super.getInfo();
        return `${baseInfo}, gender: ${this.gender}, size: ${this.size}`
    }
    get className(){return 'close'}
}