/*
// string - ตัวอักษร
let fname = 'John'
const idcard = '123'

// num - ตัสเลข
let age = 30
let height = 150.5
const  pi = 3.14

fname = 'Tom'
idcard = '456'

console.log('idcard',idcard)

console.log('name',fname,'age',age )
//console.log('age',age)
console.log('Height',height)
*/

/**
 + บวก
 - ลบ 
 * คูณ
 / หาร
 % mod หารเอาเศษ
 */

 /**
  condition statement (if, else , switch)
  == ,!=
  && || !
  */

/**
  == เท่ากับ
  != ไม่เท่ากับ
  >  มากกว่า
  >= มากกว่าเท่ากับ
  < น้อยกว่า
  <= น้อยกว่าเท่ากับ
 */
/*
 let num1 = 5 
 let num2 = 5
*/
// if else condition
/*
if (num1 > num2) {
    console.log('Condition True')
}else if  (num1 == num2) {
    console.log('this else if ')
}
else {
    console.log('This else')
}
*/
/*
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
F
*/
 /*
 && และ
 || หรือ 
 !  ไม่ 
 */
/*
let num = 20
if (num % 2 == 0) {
    console.log('You are event.')
}
*/

/*
for 
*/

/*
array
*/
/*
let ages = [20,25,30]

// การแทนที่
ages = [200,100,50]

console.log('Array',ages)

// การต่อ array
ages.push(25)
console.log('push array ',ages)

// ลบ array
ages.pop()
console.log('pop array',ages)
*/

/*
object
*/
 /*
let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
    age: 35,
    name: 'bb',
    grade: 'b'
}]
student.push({
    age: 40,
    name: 'dd',
    grade: 'D'
})

student.pop()

for (let index = 0 ; index < student.length;index++){
    console.log('Student Number ',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}
    */
/*
funtion
*/
/*
let score1 = 55
let score2 = 65
//ประกาศ ฟังชั่น
function calculat_grade(score){
if (score >=80 ){
    grade = 'A'

}else if (score >=70){
    grade = 'B'

}else if (score >=60){
    grade = 'C'

}else if (score >=50){
    grade = 'D'

}else {
    grade = 'F'
}
return grade
}

//เรียกใช้ฟังชั่น
let grade1 = calculat_grade(score1)
console.log('Grade',grade1)
*/

/*
let score = [20,30,40,50]

for (let index =0; index < score.length;index++){
    console.log('score',score[index])
}

let newScore = score.filter((s) => {
  return s>= 30
})

newScore.forEach((ns) => {
    console.log('new score',ns)
})
*/

/*
object function
*/

let students = [
    {
        name :'aa',
        score: 50,
        grade: 'D'

    },
    {
        name :'bb',
        score: 80,
        grade: 'A'
   }
]

let student = students.find((s) =>{
    if (s.name == 'aa'){
        return true
    }

})

let double_score = students.map((s) => {
    s.score = s.score*2
    return s
})

let  hightScore = students.filter((s)=>{
    if(s.score >=120){
        return true
    }
})

console.log(student)

console.log('double_score',double_score)
console.log('hightScore',hightScore)