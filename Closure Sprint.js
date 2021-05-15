function makeAccount(initial) {
    var balance = initial;
   return function(amount) {
        if (balance - amount >= 0) {
        balance = balance - amount;
        return 'Here is your money: $' + amount;
        }
   return 'Insufficient funds.';
   };
}
//this function makeAccount with closure 
//////////////////////////////////////////////////////////////////////////////////////
function makeCounter(){
    var counter = 0
    return function counterr(){
        return counter+=1;
        
    }
}
//this function makecounter with closure 
///////////////////////////////////////////
function makeCounter(start){
    var counter=start;
    return function counterr(){
        return counter+=1
    }
}
//this function makecounter with closure But with Start you want not from 0 like the previeus function 
///////////////////////////////////////////
function pow(exponent) {

    return function(exe) {
         return  exe ** exponent ;    
    }
} 
//this function pow this function present we want to do exponent with closure and work just fine and smouth
//////////////////////////////////////////////
function zipWith(func, arr1, arr2) {
    var result = [];
    if (arr1.length < arr2.length) {
        var shortest = arr1.length;
    } else {
        var shortest = arr2.length;
    }
    for (var i = 0; i < shortest; i++) {
        result.push(func(arr1[i], arr2[i]))
    }
    return result;
}
//this function zipWith is strong function and need alot of work if you do it from the first time 
//but you focus verey well and d'ont give up you can do it if you do it 10000 times you will do it  
////////////////////////////////////////////////////
function add(x) {
    return function(y) {
        while (y !== undefined) {
            x += y;
            return add(x)
        }
        return x;
    }
}
//this function add with closure and is good function to learn and try 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
