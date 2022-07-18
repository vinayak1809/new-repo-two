
function myfun(){
    
    
    var name = document.getElementById("fname").value;
    var age = document.getElementById('age').value;

    localStorage.setItem("user",name);
    localStorage.setItem("age",age);

}