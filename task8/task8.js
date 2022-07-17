var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem))

    itemList.append(li);

    var addBtn = document.createElement('button');
    addBtn.className = "btn btn-danger btn-sm float-right delete"
    addBtn.appendChild(document.createTextNode('X'));
    li.appendChild(addBtn);

    var editBtn = document.createElement('button');
    editBtn.className ="btn btn-danger btn-sm float-right delete"
    editBtn.appendChild(document.createTextNode("edit"));
    li.appendChild(editBtn);
}

itemList.addEventListener('click',delList);
// delList.removeEventListener('submit',delList);

function delList(e){

    if (e.target.classList.contains('delete')){
        if (confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}7