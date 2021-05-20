function sum(n){
   var result = 0 ; 
   while (n>0){
       result = result + n 
     n = n - 1 
   }
return result 
}
////////////////////////////
function factorialOfN(n){
    var res = 1 ;
    while (n>=0){
        res = res * n 
      n = n - 1   
    }
    return res 
}
///////////////////////
function repeatString(string,num){
    var res = 0 ;
    while (num>0){
        res = res + string
      num = num -1  
 
    }
    return res

}
/////////////////////////////////
function countMinMax(min,max){
    var count = 0;
    while (min<max){
       max = max - 1 
       count ++ 
    }
    return count  
}
/////////////////////////////////
function sumMinToMax(min,max){
    var result = 0 ; 
    while (min<max){
        max = max - 1 
        result = result + max 
    }
    return result
}
///////////////////////////////
function productMinToMax(min,max){
    var result = 1 ;
    while (min<max){
        max = max - 1 
        result = result * max  

    }
    return result
}
///////////////////////////////
function multiplayBy10NTimes(num,n){
   var result = 1 
   while (n>0){
       n = n-1
       result = result  * 10  
   }
   return result * num 
}
////////////////////////////
function reverseString(string) {
    var count = string.length-1;
    var total = "";
    while (count>=0){
        total = total + string[count]
        count -- 
    }
    return total 
}
