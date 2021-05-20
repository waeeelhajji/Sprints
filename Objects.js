var fullName ={
 firstName: 'Yan',
 lastname: 'Fan' 
}

var alfa = {
 a: 1,
 b:2,
 c: 3,
 d: 4
}    
var pet = { 
 animal: 'dog', 
 noise: 'bark', 
 age: 3, 
 type: 'Golden Retriever', 
 color: 'Yellow' 
}
///////////////////////////////////
var person = {
    firstName:"wael",
    lastName:"hajji",
    age:24,
    homeTown:"hay fath"
}
////////////////////////////////////
person["favFood"]="pasta";
"pasta"
person.favFood="mlawi"
"mlawi"
person
//{firstName: "wael", lastName: "hajji", age: 24, homeTown: "hay fath", favFood: "mlawi"}
///////////////////////////////////
person.name={first:"wael",middle:"mourad",last:"hajji"}
//{firstName: "wael", lastName: "hajji", age: 24, homeTown: "hay fath", favFood: "mlawi", …}age: 24favFood: "mlawi"firstName: "wael"homeTown: "hay fath"lastName: "hajji"name: {first: "wael", middle: "mourad", last: "hajji"}first: "wael"last: "hajji"middle: "mourad"__proto__: Object__proto__: Object
delete person.firstName;
true
delete person.lastName;
true
person
/*
{age: 24, homeTown: "hay fath", favFood: "mlawi", name: {…}}
age: 24
favFood: "mlawi"
homeTown: "hay fath"
name: {first: "wael", middle: "mourad", last: "hajji"}
*/
/////////////////////////////////
function emptyObject(){
    return {}
}
///////////////
function addProperty(object,key){
    return object[key]=true
}
addProperty(person,"single")
true
person
/*
{age: 24, homeTown: "hay fath", favFood: "mlawi", name: {…}, single: true}
age: 24
favFood: "mlawi"
homeTown: "hay fath"
name: {first: "wael", middle: "mourad", last: "hajji"}
single: true
*/
///////////////////////////////
function addProperty(object,key){
    delete object[key]
}
addProperty(person,"single")
/*
{age: 24, homeTown: "hay fath", favFood: "mlawi", name: {…}}
age: 24
favFood: "mlawi"
homeTown: "hay fath"
name: {first: "wael", middle: "mourad", last: "hajji"}
*/
//////////////////////////////
function addObjectProperty(object1,key,object2){
    object1[key]=object2  
  
  }
var person1={name:"ahmed",role:"worker"};
var person2={name:"fadi",role:"supercisor"};
addObjectProperty(person1,"manager",person2)
person1
/*
{name: "ahmed", role: "worker", manager: {…}}
manager: {name: "fadi", role: "supercisor"}
name: "ahmed"
role: "worker"
*/
////////////////////////////////////////
function addFullNameProperty(object){
    object["fullname"]= object["firstName"] + " " + object["lastName"]
}
var persssone = {firstName:"leena",lastName:"atia"};
addFullNameProperty(persssone)
persssone
/*
{firstName: "leena", lastName: "atia", fullname: "leena atia"}
*/
//////////////////////////////////////
function printAllProPerties(object){
    return Object.values(object)
}
var perone = {firstName:"leena",lastName:"atia"};
printAllProPerties(perone)
(2) ["leena", "atia"]
////////////////////////////////////
////////////////////////////////////
function removeNumbersLargerThan(number,object){
      for (var key in object){
          if (object[key]>number){
              delete object[key]
          }
      }
      
    }
var obj ={a:8,b:2,c:"montana"}
//removeNumbersLargerThan(5,obj‌)
//{b: 2, c: "montana"}
/////////////////////////////
function removeALLEvenValues(object){
    for(var key in object){
        if (object[key]%2===0){
            delete object[key]
        }
    }
}
var salam={ a:9 , b:2 , c: "montana"}
salam
//{a: 9, c: "montana"}
///////////////////////////////
function removePropertiesNotEqualTo10(object){
    for(var key in object){
        if(object[key]!=10){
            delete object[key]
        }
    }
}
var obbjj={a: 10 , b: 2 , c: "montana", d:10, e:"ohio",f:10}
removePropertiesNotEqualTo10(obbjj)
//{a: 10, d: 10, f: 10}
////////////////////////////////////////////////
function removeStringsLongerThan(object,number){
    for(var key in object){
        if (object[key].length>number){
            delete object[key]
        }
    }
}
var obiji = {a:"texas",b:2,c:"montana"}
removeStringsLongerThan(obiji,6)
//{a: "texas", b: 2}
//////////////////////////////////////////////
function removeAllNumbers(object){
    for(var key in object){
        if (typeof(object[key])==="number"){
            delete object[key]
        }
    }
}
var obijiiii = {a:9 , b: 2,c:"montana"}
removeAllNumbers(obijiiii)
obijiiii
//{c: "montana"}
//////////////////////////////////////
function removeArrays(object){
    for (var key in object){
        if (typeof(object[key])==="object"){
            delete object[key]
        }
    }
}
var ooooobj = { a : [1 , 3 , 4], b : 2, c:["hi","there"] } 
ooooobj
//{b: 2}
/////////////////////////////////////
function getFirstElementOfProperty(object,key){
        for (var key in object){
            if (object[key]==="object"){
                return undefined
            }else if (object[key]===key){
                return undefined
            }else {
                return object[key][0]
            }
        }
    }
getFirstElementOfProperty(ooooobj,"array")
1
//////////////////////////////////////////////
function getNthElementOfProperty(object,key,number){
    for(var key in object){
        if(object[key]==="object"){
            return undefined
        }else if(object[key]===key){
            return undefined
        }else {
            return object[key][number]
        }
    }
}
getNthElementOfProperty(ooooobjjjj,"array",2)
6
//////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////
function isPropertyPresent(object,key){
    return object.hasOwnProperty(key)
}
isPropertyPresent(obbj,"a")
true
isPropertyPresent(obbj,"c")
////////////////////////////////////////////
function getAllKeys(object){
    var array=[]
    for(var key in object){
       array.push(object[key])
    }
    return array
}
var obj = {a:1,b:2}
getAllKeys(obj)
(2) [1, 2]
//////////////////////////////////////////////



















