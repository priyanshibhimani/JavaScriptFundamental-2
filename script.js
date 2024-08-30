'use strict';
/*
//activate strict mode
let hasDriverLience =false;
const passTest =true;
if(passTest) {  hasDriverLience=true};
console.log(hasDriverLience);*/

//function
/*function logger(){
    console.log("function demo");
}
logger();

function juice(apple,orange){
    const juices=`juice of ${apple} apples and ${orange} oranges.`;
    return juices;
}
const appleorange=juice(5,0);
console.log(appleorange);
console.log(juice(2,3));*/

//function expression
/*const age=function calcAge(age1){
    return 2037-age1;
}
const years=age(2000);
console.log(years);*/

//Arrow function
/*const age=(birthYear,firstName)=>{
    const years=2037-birthYear;
    const retirementAge=65-years;
    return `${firstName} has ${retirementAge} years for retire`;
}
console.log(age(2001,'bob'));*/

//function calling inside other
/*function juice(apple,orange){
    const applepiece=pieces(apple);
    const orangepiece=pieces(orange);
    const juices=`juice of ${applepiece} piece apples and ${orangepiece} piece oranges.`;
    return juices;
}
function pieces(fruit){
    return fruit*4;
}
const juicemaker=juice(2,3);
console.log(juicemaker);*/

//coding challange 1 🚀
/*function clacAvg(sc1,sc2,sc3){
        let finalAvg=(sc1+sc2+sc3)/3;
        return finalAvg;
}
const checkWinner= (avg1,avg2)=>{

    if(avg1>=avg2*2){
        console.log(`dolphine wins ${avg1} vs.${avg2}`);
    }
    else if(avg2>=2*avg1){
        console.log(`koalas wins ${avg2} vs.${avg1}`);
    }
    else{
        console.log("no one wins");
    }
}
const avg1=clacAvg(44,23,71);
const avg2=clacAvg(65,54,49);
checkWinner(avg1,avg2);

const avgOfD=clacAvg(85,54,41);
const avgOfK=clacAvg(23,34,27);
checkWinner(avgOfD,avgOfK);*/

//arrays
/*const friends=['om','jay','jit'];
console.log(friends);
function calcAge(age1){
    return 2037-age1;
}
const ages=[1997,2000,2006];
let i;
for (i=0;i<ages.length;i++){
    console.log(calcAge(ages[i]));
}*/

//array methods
/*const a=["jit",'mit','hit','git'];
const b=a.pop();
console.log(b);
a.push('rit');
console.log(a);
a.unshift('prit');
console.log(a);
a.shift();
console.log(a);
console.log(a.includes('hit'));
console.log(a.indexOf('mit'));*/

//coding challange 2🚀
/*const calcTip=(bill)=>{
    if(bill>=50 && bill<=300){
        const tip=bill*0.15;
        return tip;
    }
    else{
        const tip=bill*0.2;
        return tip;
    }
    }
    const bills=[125,555,44];
    const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
    const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills);
console.log(tips);
console.log(total);*/

//objects
/*const a={
    firstName:"john",
    age:18,
    marks:[25,22,30]
}

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  jonas.location="delhi";
  jonas['twitter']="not";
  console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`);*/

  //object methods
  /*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthyear:1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasLienece:true,
    calcAge:function(){
        this.age=2037-this.birthyear;
        return this.age;
    }
  };
  console.log(`${jonas.firstName} is a ${jonas['calcAge']()} years old ${jonas.job} and he has ${jonas.hasLienece?'a':'no'} lienece.`);
  //or
  console.log(`${jonas.firstName} is a ${jonas.calcAge()} years old ${jonas.job} and he has ${jonas.hasLienece?'a':'no'} lienece.`);*/

  //coding challenege 3🚀
 /*const mark={
    FullName:'mark miller',
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
    }
  }
  const john ={
    FullName:'john smith',
    mass:92,
    height:1.55,
    calcBMI:function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
    }
  }
  if(john.calcBMI()>mark.calcBMI()){
    console.log(`${john.FullName} 's BMI (${john.calcBMI()}) is higher than ${mark.FullName}'s BMI (${mark.calcBMI()})`);

  }
  else{
    console.log(`${mark.FullName} 's BMI (${mark.calcBMI()}) is higher than ${john.FullName}'s BMI ${john.calcBMI()}`);
}*/

//for loop
/*for(let rep=1;rep<=10;rep++){
    console.log(`lifting weight in repetation ${rep} `);
}*/

/*const type=[];
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  for(let i=0;i<jonasArray.length;i++){
    console.log(jonasArray[i]);
    type[i]=typeof jonasArray[i];
  }

console.log(type);

const years=[1991,1985,2000,2005];
for(let i=1;i<=jonasArray.length;i++){
 if(typeof jonasArray[i] !=='string') continue;

 console.log(jonasArray[i]);
}
console.log("break ex:")
for(let i=1;i<=jonasArray.length;i++){
    if(typeof jonasArray[i] !=='string') break;
   
    console.log(jonasArray[i]);
   }
*/

/*for(let i=10;i>=0;i--){
    console.log(i);
    for(let j=1;j<5;j++){
            console.log("---------starting ecercise");
    }
    for(let k=0;k<5;k++){
        console.log(`lifting weight for ${i} times`);
    }
}*/

//while
// let dice=Math.trunc(Math.random()*6)+1;
// while(dice!==6){
//     console.log(`you get number ${dice}`);
//     dice=Math.trunc(Math.random()*6)+1;
//     if(dice===6)
//     console.log("you get number 6");
// }

//coding challange 4🚀
const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];
function calcTip(bill){
    return bill>=50 && bill<=300 ? bill*0.15:bill*0.2;
    }
for(let i=0;i<bills.length;i++){
    if(bills[i]>=50 && bills[i]<=300){
        tips[i]= calcTip(bills[i]);
    }
    else{
        tips[i]=calcTip(bills[i]);
    }
    totals[i] =bills[i]+tips[i];
}
console.log(tips);
console.log(totals);

//bonus challange
let sum=0;
// const arr=[1,2,3,4,5];
const avg= (arr)=>{
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
const avarage=avg([1,2,3,4,5,6]);
console.log("avg"+avarage);


