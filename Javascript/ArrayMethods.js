//Given an array of objects print only the names and capitalise.

let students = [
  { name : 'Linkedin', roll: 31, marks: 100 },
  { name : 'Github', roll: 12, marks: 80 },
  { name : 'Replit', roll: 39, marks: 60 },
  { name : 'Netlify', roll: 40, marks: 30 }
]
console.log(students)

//Using for loop
let names = [];
for( let i in students){
  console.log((students[i].name).toUpperCase());
  names.push((students[i].name).toUpperCase());
}
console.log(names)

//Using map array method
let mapstu = students.map( stu => stu.name.toUpperCase() )
console.log(mapstu)
                        
//using for Each
let festu = [];
students.forEach( item => festu.push((item.name).toUpperCase() ))
console.log(festu)

//Given an array of objects print only those lements that have marks > 60
//with for loop
let sixtystu = []
for(let i in students){
   students[i].marks > 60 ? sixtystu.push(students[i]) : undefined
}
console.log(sixtystu)

//with forEach loop
let fesixtystu =[]
students.forEach( stu => {
  if( stu.marks > 60 )
    fesixtystu.push(stu)
})
console.log(fesixtystu)

//With Filter array method

let filtstu = students.filter( stu => stu.marks > 60  )

//Print those elements that have roll nuber greater than 16 and marks greater than 60

//With filter
let st = students.filter( stu => stu.marks > 60 && stu.roll > 16  )

//Sum of marks of all the stuents

let sum = students.reduce( (acc,curr) =>  acc + curr.marks, 0 );
console.log(sum)

//Return total marks of students with marks greater than 60 after 20 marks have been added to those who scored less than 60
let totalMarks = students.map( (stu) => {
  if(stu.marks < 60)
    stu.marks = stu.marks + 20
  return stu
}).filter( (stu)=> stu.marks > 60  ).reduce( (acc,curr) => acc+curr.marks,0 )
console.log(totalMarks)
