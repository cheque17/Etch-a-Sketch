const container = document.querySelector('#container');

let items = [];
for(i=0; i<(16*16); i++){
    let item = document.createElement('div');
    items.push(item);
    container.appendChild(item);
}
