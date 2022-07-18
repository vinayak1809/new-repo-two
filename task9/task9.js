var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var Filter = document.getElementById('filter');


form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem))

    itemList.append(li);

    // delete button
    var addBtn = document.createElement('button');
    addBtn.className = "btn btn-danger btn-sm float-right delete"
    addBtn.appendChild(document.createTextNode('X'));
    li.appendChild(addBtn);
    
    //edit button
    var editBtn = document.createElement('button');
    editBtn.className ="btn btn-danger btn-sm float-right delete"
    editBtn.appendChild(document.createTextNode("edit"));
    li.appendChild(editBtn);

    // description 

    var description = document.getElementById('description').value;
    var createDescElem = document.createElement('p');
    createDescElem.style.fontStyle = 'italic';
    createDescElem.appendChild(document.createTextNode(description));
    li.append(createDescElem);



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
}

// var itemList = document.getElementById('items');
// var Filter = document.getElementById('filter');

Filter.addEventListener('keyup',filter_item);

function filter_item(e){

    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
   
    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }

    })
}
var para = document.getElementById('items');
var Desc_filter = document.getElementById('filterDesc');

Desc_filter.addEventListener('keyup',filter_Desc);

function filter_Desc(e){

    var descText = e.target.value.toLowerCase();
    var descItems = para.getElementsByTagName('p');

    Array.from(descItems).forEach(function(item){

        var itemNam = item.firstChild.textContent;
        if (itemNam.toLowerCase().indexOf(descText) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}