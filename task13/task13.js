
var usersList = document.getElementById('usersList')

function myfun(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const age = event.target.age.value;
    const mail = event.target.mail.value;

    obj = {
        name,
        age,
        mail
    }

    localStorage.setItem(obj.mail, JSON.stringify(obj));    
    console.log(JSON.parse(localStorage.getItem(mail)))

}
 
window.addEventListener("DOMContentLoaded", () =>{
    for (const key of Object.keys(localStorage)) {

        document.getElementById('username').value = "";
        document.getElementById('mail').value = "";
        document.getElementById('age').value ="";

        const ob = JSON.parse(localStorage.getItem(key))

        var newEle  = document.createElement('li')
        newEle.appendChild(document.createTextNode(ob.name+ "-" + ob.mail))
        usersList.appendChild(newEle)

        // delete buttun
        var delBtn = document.createElement('button')
        delBtn.className = 'delete'
        mail = ob.mail
        delBtn.setAttribute('onclick',`deleteUser('${mail}')`);
        delBtn.appendChild(document.createTextNode(" delete"))

        // edit button 
        var editBtn = document.createElement('button')
        editBtn.className = "edit"
        editBtn.setAttribute('onclick',`editUser('${mail}')`)
        editBtn.appendChild(document.createTextNode(' edit'))

        newEle.appendChild(delBtn);
        newEle.appendChild(editBtn);

    }

})


function deleteUser(user){
            console.log('a')
            localStorage.removeItem(user);
    }

function editUser(user){
    
    var getItem = JSON.parse(localStorage.getItem(user))
    

    let username = document.getElementById('username');
    let mail = document.getElementById('mail');
    let age = document.getElementById('age');

    username.value = getItem.name
    mail.value = getItem.mail
    age.value = getItem.age

}







