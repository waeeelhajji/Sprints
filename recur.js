function sum(number){
    if (number===0){
       return number + 0 
    }
    return number + sum(number - 1)
}
//////////////////////////
function factorial(number){
    if(number===0){
        return 1 
    }
    return number * factorial(number-1)
} 
///////////////////////////////
function repeatString(string,number){
    if (number===0||number ===1){
        return string
    }
    return string + repeatString(string,number-1)
}
//////////////////////////////////
function fibonacci(number){
    if(number <2){
        return number
    }
    return fibonacci(number-1) + fibonacci(number-2)
}
//////////////////////////////////
function multiplayBy10(firstNumber ,secondeNumber){
    if (secondeNumber===1||secondeNumber===0){
        return firstNumber * 10 
    }
    return multiplayBy10(firstNumber,secondeNumber -1) * 10
}
/////////////////////////////
function sumBetween(start, end) {
    if (start === end) {
        return end
    }
    return end + sumBetween(start, end - 1)
}
//////////////////////////////
function add (number1,number2){
    if (number1===0){
        return number2
    } function inc(x){
        return x+1
    }function dec(x){
        return x-1
    }
    return add(dec(number1),inc(number2))
    
}
/////////////////////////////////
function isEven(number) {
    if (number === 1) {
        return false
    } else if (number === 0) {
        return true
    }
    return isEven(number - 2)

}
//////////////////////////////////
function mulTiply(number1,number2){
    if(number2===0){
        return number1
    }else if (number1===number2){
return number1 * number2}
    return number2 * mulTiply(number1,number2-1)
}
////////////////////////////////
function range(start,end){
 
    if (start===end-1){
        return  start ++ 
    }
    return start ++ +","+ range(start,end)
}
////////////////////////////////
