var item = document.getElementsByClassName('list-group-item');

item[2].style.backgroundColor = 'green';

// var items = document.getElementsByClassName('list-group')
// items.style.fontWeight = 'bold';

for(i=0 ; i<item.length ; i++){
    item[i].style.fontWeight = 'bold';
    item[i].style.color = 'red';
}