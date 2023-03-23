const container = document.querySelector('#container');


let size = 0;
let items = [];

const promptGenerator = document.querySelector('#promptGenerator')

promptGenerator.addEventListener('click', function (size){
    size = prompt('Please, enter the size of the grid');
    if (size>100){
        alert("Please, try again paying attention to the instructions.");
    return; } 
    console.log(size);
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gap = '0';
    for(i=0; i<(size*size); i++){
        let item = document.createElement('div');
        items.push(item);
        container.appendChild(item);   
        }
    items.forEach( function(item) {
        item.style.height = `(512/${size})px`;
        item.style.width = `(512/${size})px`;
        })

    
    items.forEach ( (item) => {
        item.addEventListener('mouseover', function () {
            item.style.backgroundColor = 'black';
        })
        })
})

/*
items.forEach ( (item) => {
    item.addEventListener('mouseover', function () {
        item.style.backgroundColor = 'black';
    })
})*/

 



/*
    for(i=0; i<(size*size); i++){
    let item = document.createElement('div');
    items.push(item);
    container.appendChild(item);   
    }

    items.forEach( function(item) {
    item.style.height = `(512/${size})px`;
    item.style.width = `(512/${size})px`;
    })

    
items.forEach ( (item) => {
    item.addEventListener('mouseover', function () {
        item.style.backgroundColor = 'black';
    })
})

let items = [];
for(i=0; i<(16*16); i++){
    let item = document.createElement('div');
    items.push(item);
    container.appendChild(item);


items.forEach( function(item) {
    item.style.height = '32px';
    item.style.width = '32px';
}
)}*/

