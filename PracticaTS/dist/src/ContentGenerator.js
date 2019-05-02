export class ContentGenerator {
    static print(div, data) {
        let ul = document.createElement('ul');
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = data[i].getInfo();
            li.className = data[i].className;
            ul.appendChild(li);
        }
        div.appendChild(ul);
    }
}
//# sourceMappingURL=ContentGenerator.js.map