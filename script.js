const container = document.querySelector('#container');

let items = [];
for(i=0; i<(16*16); i++){
    let item = document.createElement('div');
    items.push(item);
    container.appendChild(item);
}

items.forEach( function(item) {
    item.style.borderColor = 'black';
    item.style.borderStyle = 'solid';
    item.style.backgroundColor = 'white';
    item.style.height = '50px';
    item.style.width = '50px';
}
)