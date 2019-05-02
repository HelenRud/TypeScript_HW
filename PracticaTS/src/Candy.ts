import {Food} from "./Food"

export class Candy extends Food{
    constructor(cost: number, name: string, fromCountry:string, expDate: string, weight: number, private type: string){
        super(cost, name, fromCountry, expDate, weight);
    }
    getInfo():string{
        let baseInfo=super.getInfo();
        return `${baseInfo}, type: ${this.type}`
    }
    get className(){return 'candy'}
}