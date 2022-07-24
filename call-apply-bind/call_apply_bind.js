
// Write a function and use 'call' to call the function
   

var obj1={
    num:2,
    fun : function(a,b,c){
        console.log( this.num+a+b+c)
    }
}
obj1.fun(5,6,3)

// as we can see in above code this how we create a method inside a object and work with it
// what if we want a function that can perform with are object variables i.e where "call" come


var obj = {num:2};

    var fun = function(a,b,c){
        return this.num+a+b+c;
    }

console.log(fun.call(obj,4,5,6))


// 2. It as same as call just the difference is we can pass an array as a argument : "apply"


var obj = {num:2};

var fun = function(a,b,c){
        return this.num+a+b+c;
    }
var arr = [4,5,6,7]


// console.log(fun.apply(obj,arr)                      .....here we can see it just takes first three elements as a argument because we have 3 variables in parameter


// 3.Write a program using bind.

var obj = {num:2};

    var fun = function(a,b,c){
            return this.num+a+b+c;
    }
    var bound = fun.bind(obj);

console.log(bound(1,2,3));

// bind is same like "call" the difference is there is more redundancy in code, once var bound is declared bound can be used like a function



// 4. Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.

// Dont pass in args. Read from 'this' and use BIND

var student = {age:20}

    function read(){
        console.log(this.age)
    }

var bi = read.bind(student)
bi()











