class DicObj {
    set setKey(key) {
        if (key == null || key == undefined)
            throw new Error('Empty key!');
        this.key = key;
    }
    get getKey() {
        return this.key;
    }
    set setValue(value) {
        if (value == null || value == undefined)
            throw new Error('Empty key!');
        this.value = value;
    }
    get getValue() {
        return this.value;
    }
    set setDescr(descr) {
        if (descr == null || descr == undefined)
            throw new Error('Empty key!');
        this.descr = descr;
    }
    get getDescr() {
        return this.descr;
    }
}
class Dict {
    constructor() {
        this.itemsArr = [];
    }
    add(key, value, descr) {
        let item = new DicObj();
        item.setKey = key;
        item.setValue = value;
        item.setDescr = descr;
        this.itemsArr.push(item);
    }
    getSearchItem(key) {
        for (let i = 0; i < this.itemsArr.length; i++) {
            if (this.itemsArr[i].getKey == key) {
                console.log(this.itemsArr[i].getKey + ' - ' + this.itemsArr[i].getValue + ' ' + this.itemsArr[i].getDescr);
            }
        }
        return null;
    }
}
let dictionary = new Dict();
dictionary.add('Крёстный отец', 'Криминальная сага о сицилийской мафиозной семье Корлеоне, которая обладает огромным авторитетом в Нью-Йорке.', 1972);
dictionary.add('Звёздные войны', 'Магистр Йода начинает обучать юного Люка джедайским хитростям, которые очень скоро ему пригодятся.', 1980);
dictionary.add('Тёмный рыцарь', 'Городу в очередной раз требуется герой, и им традиционно становится Бэтмен, задача которого — ликвидировать преступника по кличке Джокер.', 2008);
dictionary.getSearchItem('Крёстный отец');
dictionary.getSearchItem('Звёздные войны');
dictionary.getSearchItem('Тёмный рыцарь');
//# sourceMappingURL=main.js.map