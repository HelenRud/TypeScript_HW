import{IWritable} from "./IWritable"

export abstract class Item implements IWritable{
    constructor(private cost: number, private name: string, private fromCountry: string){}
    getInfo(): string{
        return `This is ${this.name}, cost: ${this.cost}, made in: ${this.fromCountry}`
    }
    get className(){return 'item'}

}