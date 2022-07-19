

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
 
function show_user(localStorage){
    for (const [key, value] of Object.entries(localStorage)) {

        var usersList = document.getElementById('usersList')
        var newEle  = document.createElement('li')
        const ob = JSON.parse(localStorage.getItem(key))

        newEle.appendChild(document.createTextNode(ob.name+ " " + ob.mail))
        usersList.appendChild(newEle)
    }

}
show_user(localStorage)







// function print_Users(user){
//     const create = document.getElementById('usersList')
//     const new_ele =  `<li> ${user.name} - ${user.mail}</li>`

//     create.innerHTML = create.innerHTML + new_ele;
// }

// var store = localStorage.getItem
