const container = document.querySelector('#container');

let items = [];
for(i=0; i<(16*16); i++){
    let item = document.createElement('div');
    items.push(item);
    container.appendChild(item);
}

items.forEach( function(item) {
    item.style.height = '32px';
    item.style.width = '32px';
}
)

items.forEach ( (item) => {
    item.addEventListener('mouseover', function () {
        item.style.backgroundColor = 'black';
    })
})