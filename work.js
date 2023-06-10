import {msg,arr,StudentData} from "./demo.js"

console.log(msg);

import {add, StudentData as std} from "./main.js"

add()

let stu = new std()

stu.carinfo()

 function arrSort(a){

let sortAdd = a.sort(function(a,b) {return( a-b)})
console.log(sortAdd)
    
}

arrSort(arr)

let student = new StudentData()

student.msg()
StudentData.greet()
