//1
var myArray=["hana","wael","hello"];
//4
function emptyArray() {
   var array=[]; 
    return array;
} 
//5
function numbersArray() {
   var array=[1,2,3,4,5];
   return array; 
}
//6
function booleansArray() {
   var array=[true,true,true] ;
   return array;
}
//7
function stringsArray() {
   var array=["wael", "hajji"] 
   return array;
}
//8
function arrayLength(array) {
   return array.length; 
} 
//more practice
//1
function firstElement(array) {
    return array[0];
}
//2
function lastElement(array) {
   return array[array.length-1]; 
}
//3
function getNthElement(array, number) {
   return array[number] ;
}
//4
function push(array, element) {
   array.push(element);
   return array; 
}
//5
function pop(array) {
   array.pop();
   return array; 
}
//6
function unshift(array, element) {
   array.unshift(element);
    return array; 
}
//7
function shift(array) {
   array.shift();
return array; 
} 
//8
function reassignLast(array, element) {
   array.pop();
   array.push(element);
   return array; 
}
//9
function reassignNthElement(array, index, element) {
   array[index]=element;
   return array; 
}
//advanced
//1
function indexOf(array, element) {
   var i=0;
    while(i<array.length){ 
        if (array[i]===element){
            return i;}
        i++;
}
}
//2
function addElement(array, index, element) {
   array.splice(index,0,element);
   return array; 
}
//3
function removeElement(array, index) {
   array.splice(index,1);
   return array; 
}
//4
function concatArrays(array1, array2) {
   var i=0;
    while(i<array2.length){
        array1.push(array2[i]);
        i++;
    } 
    return array1;
}
//5
function concatThreeArrays(array1, array2,array3) {
   var i=0;
    while(i<array2.length){
                array1.push(array2[i]);
        i++;
    } 
    i=0;
    while(i<array3.length){
    array1.push(array3[i]);
    i++;
    }
    return array1;
} 
//6
function joinStrings(array, string) {
   return array.join(string); 
}
//7
function applySplit(string, splitter) {
   return string.split(splitter); 
}
//8
function getElementsAfter(array, index) {
  var i =index+1;
  var array2=[];
  while(i<array.length){
     array2.push(array[i]);
     i++;
  }
return array2;
}
//9
​
function getElementsBefore(array, index) {
  var i =0;
  var array2=[];
  while(i<index){
     array2.push(array[i]);
     i++;
  }
return array2;
} 
//10
function getAllElementsButFirst(array) {
   array.shift();
   return array; 
}
//11
function getAllElementsButLast(array) {
   array.pop();
   return array; 
}