abstract class Plant{
    constructor(protected type: string, protected maxHeight: number){}
   
    feed(): void{
        console.log(this.type + ': need watering to growing');
    }
    leavesColor (): void {
        console.log(this.type + ': have green leaves');
    }
    maxH(): void {
        console.log('Max haight: ' + this.maxHeight + 'm');
    }
    
}
class Flower extends Plant{
    constructor(public type: string, h: number){
        super('Flower', h);       
    }
    smell(s: boolean): void {
        if (s)   console.log('Have a good smell')
        else  console.log('Don"t smell')
    }
    gorwPlace(p: string): void {
        console.log('Growing place: ' + p)
    }
    decor(): void{
        console.log('Can be put in a vase')
    }
}
class Bush extends Plant{
    constructor(public type: string, h: number){
        super('Bush', h);       
    }
    fruitage(f: string): void{
        console.log('Fruitage: ' + f);
    }
    
}
class Tree extends Plant{
    constructor(public type: string, h){
        super('Tree', h);
   }
   treeType(t: string): void {
       console.log('Type: ' + t);
   } 
}


let rose = new Flower('Rose', 1);
rose.feed();
rose.leavesColor();
rose.maxH();
rose.smell(true);
rose.gorwPlace('flowerbed')
rose.decor();
console.log('-------------------------');

let chamomile = new Flower('Chamomile', 0.5);
chamomile.feed();
chamomile.leavesColor();
chamomile.maxH();
chamomile.smell(false);
chamomile.gorwPlace('Field')
chamomile.decor();
console.log('-------------------------');
console.log('-------------------------');

let viburnum = new Bush('Viburnum', 2);
viburnum.feed();
viburnum.leavesColor();
viburnum.maxH();
viburnum.fruitage('berries');
console.log('-------------------------');

let lilas = new Bush('Lilas', 3);
lilas.feed();
lilas.leavesColor();
lilas.maxH();
lilas.fruitage('No fruitage');
console.log('-------------------------');
console.log('-------------------------');

let spruce: Tree = new Tree('Spruce', 10);
spruce.feed();
spruce.leavesColor();
spruce.maxH();
spruce.treeType('decorative');
console.log('-------------------------');

let appleTree = new Tree('Apple-tree', 3);
appleTree.feed();
appleTree.leavesColor();
appleTree.maxH();
appleTree.treeType('fruit-tree');



