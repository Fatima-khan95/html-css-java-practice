/*let student={
    name:"ALi",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],
}

for (let i=0; i<student.courses.length;i++){
    if (student.courses[i].name==="maths") {
        
    }
    console.log(student.courses[i].name);
} 

/*console.log(student.courses);
student.ispassed=true;
console.log(student.ispassed);
delete student.class

/*function great(){
    return "hello";
}
    console.log(student.great);
/* ARRAY*/

/*let student =["Ali","Ahmed","Faizan"]
console.log(student)
student.push("hamza")
console.log(student);
student.pop()
console.log(student);

/* CONDITION */

/*let marks=75;
if(marks>=90){
    console.log("A Grade");
}
else if(marks>=80){
    console.log("B Grade");
}
else if(marks>=70){
    console.log("C Grade");
}

else{
    console.log("fail");
}
 // SWITCH //

 //LOOPS//

 for (let i=0; i<5; i++){
    console.log("hello");
 }

 while (i<5){
    console.log("Hello");
    i++;
 }

let i=6;
 do{
    console.log("hello");
    i++;
 }while(i<5);*/

 /*let students=[{
    name:"ALi",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],

},
 {name:"hassan",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],
}]

for (let i=0; i<student.length;i++){
   console.log(student[i].name);
   for (let j =0 ;j< student[i].courses.length ;j++) {
    console.log(student[i].courses[j].name);
    
   }
} */

//ARRAY built in methods

/*
 let student=[{
    name:"ALi",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],

},
 {name:"hassan",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],
}]
student.map((Element,index) => {
    console.log(Element.name);
    
})


//how to pass elements of the same array in another one 


let names=[]

for (let i = 0; i < student.length; i++) {
  names.push(student[i].name);
   console.log(student[i].name);
    
}

console.log(names);

let Arrnames=student.map((Element,index)=>{
return Element.name

})

//let arrnames=student.map(Element,index ,Element .name)

student.map((Element, index) => {
    console.log(Element.name);
    Element.courses.map((courses) => {
        console.log(courses.name);

    })

})
    */

//Array size

/*
let student=[{
    name:"ALi",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],

},
 {name:"hassan",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],
}]
    console.log(student.length);
student.forEach((s)=>{
    console.log(s.name,"has registered",s.courses.length,"courses");
    
}
)
*/
    /*

//Functions


function perform() {
    console.log("hello");
    
}
perform()

//Arrow function

let perform=()=>{
    console.log("hi");
}
perform()
*/

//Filter 
/*
const array=[10,20,30,40,50,60]
const newArray=array.filter(array=> array>30);

let filterarray=student.filter((element,index)=> {
    return student.name.toLowerCase()==="kamran".toLowerCase()})
    .map(student=>student.name)
console.log(newArray);
*/
//DESTRUCTING

// Array destructing 

/*
const des =[10,30,40,50,60]

let [x,y]=des;
console.log(x);
console.log(y);

// Object destructing

let pupil={
    name:"ali",
    age:12,
    class:"8th",
}

let {name,age}=pupil;
console.log(name);
console.log(age);

//Nested destructing

let student=[{
    name:"ALi",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],

},
 {name:"hassan",
    Father_name: "Ameen",
    age:15,
    class:6,
    courses:[
        {
            name:"Eng",
            Credit_hours:4,
        },
        {
            name:"maths",
            Credit_hours:5,
        },
    ],
}]
*/
//spread operator  (to merge objects,arrays etc)
/*
let cars=["honda","civic","BMW"]
cars.push("ABC")
const updatedArray=[...cars,"honda"];
*/

//DOM

let name="Fatima"
document.getElementById("name").innerText =name;
//document.getElementById("name").innerHTML=name;
document.getElementById("name").style.color="red";
document.getElementById("submit-btn").add
//document.querySelector("#name").innerText =name;
//document.getElementById("submit_btn").addEventListener("click",function(){
//    document.getElementById("name").style.color ="blue";
  //  console.log("button clicked");
    
//})
