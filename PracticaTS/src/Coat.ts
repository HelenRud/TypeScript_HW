import {Close} from "./Close"

export class Coat extends Close{
    constructor(cost: number, name: string, fromCountry:string, gender: string, size: number, private color: string){
        super(cost, name, fromCountry, gender, size);
    }
    getInfo():string{
        let baseInfo=super.getInfo();
        return `${baseInfo}, color: ${this.color}`
    }
    get className(){return 'coat'}
}