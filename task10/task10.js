function my_fun(){

    const n = document.getElementById('fname');
    const a = document.getElementById('age');
    
    obj = {
        name : n,
        age : a
    }

    localStorage.setItem("user",JSON.stringify(obj));
}

console.log(JSON.parse(localStorage.getItem("user")))