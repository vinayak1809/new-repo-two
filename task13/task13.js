
var usersList = document.getElementById('usersList')

function myfun(event) {
   

    event.preventDefault();
    const name = event.target.username.value;
    const phno = event.target.phno.value;
    const mail = event.target.mail.value;

    obj = {
        name,
        phno,
        mail
    }
    localStorage.setItem(obj.mail, JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem(mail)))
   

}
 
window.addEventListener("DOMContentLoaded", () =>{
    for (const key of Object.keys(localStorage)) {


        const ob = JSON.parse(localStorage.getItem(key))

        var newEle  = document.createElement('li')
        newEle.appendChild(document.createTextNode(ob.name+ "-" + ob.mail))
        usersList.appendChild(newEle)

        // delete buttun
        var delBtn = document.createElement('button')
        delBtn.className = 'delete'
        mail = ob.mail
        delBtn.setAttribute('onclick',`deleteUser(mail)`);
        delBtn.appendChild(document.createTextNode(" delete"))

        // edit button 
        var editBtn = document.createElement('button')
        editBtn.className = "edit"
        editBtn.setAttribute('onclick',`editUser(mail)`)
        editBtn.appendChild(document.createTextNode(' edit'))

        newEle.appendChild(delBtn);
        newEle.appendChild(editBtn);

    }

})


function deleteUser(user){
            localStorage.removeItem(user);
    }

function editUser(user){
    
    var getItem = JSON.parse(localStorage.getItem(user))
    

    let username = document.getElementById('username');
    let mail = document.getElementById('mail');
    let age = document.getElementById('phno');

    username.value = getItem.name
    mail.value = getItem.mail
    age.value = getItem.phno
}







// function print_Users(user){
//     const create = document.getElementById('usersList')
//     const new_ele =  `<li> ${user.name} - ${user.mail}</li>`

//     create.innerHTML = create.innerHTML + new_ele;
// }

// var store = localStorage.getItem
