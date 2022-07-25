// different type of usage of this

//this with function 

this.school_name = "NMHS"

function Person(param1){
    console.log(`That's my School Name: ${this.school_name} which is located in  ${param1}`)
}

this.rohit = {
    school_name : 'lawrence'
}

this.vk = {
    school_name : 'Agnels'
}

Person.call(this,"bobmay")
Person.call(this.rohit,"pune")
Person.call(this.vk,"banglore")

// this inside inner function

this.school_name = "NMHS"

function Persons(param1){
        //arrow function is used to access this variable inside a function scope
        const innerFunc = (param2) => {
            console.log(`That's my School Name: ${this.school_name} which is located in  ${param2} and this is a inner function`)
        }
        innerFunc(param1);
    }
   

Persons.call(this,"vashi")
// Design Pattern Problem

// class Student{
//     static num_of_students = 0
//     constructor( name , age , phone_number, board_marks){
//         this.name = name
//         this.age = age
//         this.phone_number = phone_number
//         this.board_marks = board_marks  
//         Student.num_of_students +=1 
//     }

//     eligible(){
//         if (this.board_marks > 40){
//             console.log(`${this.name} is eligible to appear in exam`)
//         }else{
//             console.log(`${this.name} is not eligible to appear in exam`)
//         }
//     }

//     total_num_of_stu(){
//         console.log(`Total num of students: ${Student.num_of_students}`)
//     }
// } 

// const stu1 = new Student('rohit',20,123456,35) 
// const stu2 = new Student('sneh',21,123456,63)
// const stu3 = new Student('kartik',20,123456,55)
// const stu4 = new Student('Jhon',20,123456,56)
// const stu5 = new Student('sarthak',21,123456,30)

// stu1.eligible()
// stu2.eligible()
// stu3.eligible()
// stu4.eligible()
// stu5.eligible()

// stu1.total_num_of_stu()