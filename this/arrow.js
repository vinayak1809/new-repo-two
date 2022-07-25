
// Write the code which the youtuber writes by yourself and upload it here

let cube = a => a*a*a
// // let cube = (a) => {return a*a*a}            //this line is simliar as above

// console.log(cube(5))

// using arrow we its ok if we dont put parameters 

var a = 5;
var b = 10;

let calculate = () => a*b 
console.log(calculate(a,b))

// n number of paramter can be passed

var x = (...n) => {            
    console.log(n[0])
}
x(1,2,3);

//arrow function is used to access this variable inside a function scope
this.school_name = "NMHS"

function Persons(param1){
        const innerFunc = (param2) => {
            console.log(`That's my School Name: ${this.school_name} which is located in ${param2}`)
        }
        innerFunc(param1);
    }
   

Persons.call(this,"bombay")

//Take the student class
class Student{
    static num_of_students = 0
    constructor( name , age , phone_number, board_marks){
        this.name = name
        this.age = age
        this.phone_number = phone_number
        this.board_marks = board_marks  
        Student.num_of_students +=1 
    }

    eligible_for_placements(){
            return (age) => {
                if (this.board_marks > 50 && age >= 21 ){
                    console.log(`you are selected ${this.name}`)
                } else{
                    console.log(`Your are disqualified ${this.name}`)
                }
            }
        }
    

    total_num_of_stu(){
        console.log(`Total num of students: ${Student.num_of_students}`)
    }
}

const stu1 = new Student('rohit',20,123456,35) 
const stu2 = new Student('sneh',21,123456,63)
const stu3 = new Student('kartik',20,123456,55)
const stu4 = new Student('Jhon',20,123456,56)
const stu5 = new Student('sarthak',21,123456,30)

var check = stu1.eligible_for_placements()
check(22)
stu2.eligible_for_placements()(24)
stu3.eligible_for_placements()(20)
stu4.eligible_for_placements()(19)
stu5.eligible_for_placements()(30)
