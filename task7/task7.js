var itemlist = document.querySelector('#items')
console.log(itemlist.parentElement)
console.log(itemlist.lastElementChild)
console.log(itemlist.lastChild)

// create Child
var newdiv = document.createElement('li')
newdiv.className = 'list-group-item'

newDivText = document.createTextNode('Task 5');

newdiv.appendChild(newDivText);
console.log(newdiv);

var contain = document.querySelector('div #items')
var li = document.querySelector('ul l1')

contain.insertBefore(newdiv,li);

// first child
console.log(itemlist.firstChild)

//next sibling
var title = document.querySelector('.title')
console.log(title.nextElementSibling)

console.log(itemlist.previousElementSibling)


//create element 
// Now go head and add HEllo word before Item Lister
var newEle = document.createElement('h1')
newEle.className = 'head_ele'
newEleText = document.createTextNode('Hello WOrld')

newEle.appendChild(newEleText)
console.log(newEle)

var add_be_container = document.querySelector('header .container')
var before = document.querySelector('header h1')
add_be_container.insertBefore(newEle,before)


// Now go head and add HEllo word before Item 1


var newEleItem = document.createElement('h1')
newEleItem.className = 'head_ele'
newEleItemText = document.createTextNode('Hello')
newEleItem.appendChild(newEleItemText)

var list_group = document.querySelector('div .list-group')
var add_before_item = document.querySelector('div li')

list_group.insertBefore(newEleItem,add_before_item)
