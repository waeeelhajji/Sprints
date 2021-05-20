function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
} 
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}
////////////////////////////////////////////////
var people = [ 
    {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
    {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
    {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
    {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
    {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
]; 
function ages(people) { 
    return map(people, function(person) { 
          return person.age;}); 
}
/////////////////////////////////////
function abs(X){
    return map(X,function(x){
    return -x;});
}
/////////////////////////////////////
function max (array){
    var maxi = array[0]
    each(array,function(arr){
        if(maxi<arr){
            maxi=arr

        }
    })
    return maxi
}
/////////////
function maximums(array){
    return map(array,max)
}
//////////////////////////////////////
function eXponeNtials(array){
    return map(array,function(arr){
        return Math.pow(arr,arr)
    })
}
/////////////////////////////////////
function reverse(string){
    var res = "";
    for (var i =string.length-1;i>=0;i--){
        res += string[i]
    }
    return res 
}
////////////////////////////////
function imProvereverse(string){
   return  string.split("").reverse().join("");

}
function reverseStringRecursion(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  }
  reverseString("hello");
///////////////////////////////////////////////////////////////////////
function pluck(array,str){
    return map(array,function(elm){
        return elm[str]
    })
}
/////////////////
function parseCSV(CsV){
    return map(CsV,function(element){
        return element.split(" ")
    })
}
function parseCSV(str){ 
    var array=str.split('/n'); 
    return map(array,function(elem){ 
         var arr=elem.split(','); 
         var obj={}; 
         if (arr.length === 4){ 
              var obj1={first:arr[0],middle:arr[1],last:arr[2]}; 
              obj.name=obj1; 
              obj.age=arr[3]; 
         } 
         else{ 
              var obj1={first:arr[0],last:arr[1]}; 
              obj.name=obj1; 
              obj.age=arr[2]; 
         } 
    return obj; 
    }); 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function map(coll, f) { 
    var acc = []; 
    if(!Array.isArray(coll)){
        acc={};
    }
    each(coll, function(element, key) { 
          acc[key]=f(element, key); 
    }); 
    return acc; 
}
////////////////////////////////////////////////////
function uppercaseValue(object){
    return map(object,function(element){
        if(typeof element === "number"){
            return element
        }
        return element.toUpperCase()
    })
}
////////////////////
function countNestesKeys(object){
    return map(object,function(element,key){
        return Object.keys(element).length
    })
}
//////////////////
function agesToMinutes(array){
    return map(array,function(element){
        return element.age * 12 * 30 * 24 * 60 
    })
}




