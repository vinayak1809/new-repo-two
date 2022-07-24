
// using bind

function multiply(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

// in closures

function multiply(x){
    return function multiply_again(y){
        console.log(x*y)
    }
}

multiply(2,3)