console.log("hello") //  added new lin

const my_Form = document.querySelector('#myForm')
const btn = document.querySelector('.btn');
const username= document.querySelector('#username')

my_Form.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault();
    console.log(username.value);
}

// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     document.querySelector('#myForm').style.background = 'green';
// });


btn.addEventListener('mouseover',(e) => {
    e.preventDefault();
    document.querySelector('#myForm').style.background = 'yellow';
});


btn.addEventListener('mouseout',(e) => {
    e.preventDefault();
    document.querySelector('#myForm').style.background = 'red';
});

 
// let s = ["h","e","l","l","o"]
// mid = Math.floor(s.length/2)

// for(i=0 ; i<mid; i++){

//     [s[0] , s[s.length-i-1]]=[s[s.length-i-1],s[0]]
   
// }
// console.log(s)