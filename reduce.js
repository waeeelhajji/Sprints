function reduce(array, f, start) { 
    var acc = start; 
    each(array, function(element) { 
          acc = f(acc, element); 
    }); 
    return acc; 
}
//////////////////////////////////////////////////
function sum(numbers) { 
    return reduce(numbers, function(total, number) { 
          return total + number; 
    }, 0); 
} 
////////////////////////
function product(numbers) { 
    return reduce(numbers, function(total, number) { 
          return total * number; 
    }, 1); 
}
/////////////////////////
function averageAge(people){
    return reduce(people,function(total,peop){
          total += people[0].age  
         return total / people.length

    },0)
}
////////////////////////
function range(start, end) { 
    var acc = []; 
    for (var i = start; i < end; i++) { 
          acc.push(i); 
    } 
    return acc; 
} 
function factorial(n) { 
    return reduce(range(1,n+1),function(total,num){
        return total *= num  
    },1)
    
}
//////////////////////////////////////////////////////////////////////////
function sumBy(numbers, f) { 
    var sum = 0; 
    each(numbers, function(number) { 
    sum = sum + f(number); 
    });  

return sum; 
} 
function sumByR(numbers, f){ 
    return reduce(numbers, function (acc, number) { 
    return acc + f(number) 
    }, 0) 
} 
var sumByREx = sumByR([1,2,3], function (number) { 
    return number*number; 
})
///////////////////////////////////////////////////////////////////////////////
function max(numbers){
    return reduce(numbers,function(max,number){
        if (number >max){
            max=number
        }
        return max
    },numbers[0])
}
////////////////////////////////////////////////////////////////////////////
function countOccurrences(string, char) { 
    return reduce(string, function(acc, currentChar){ 
         if(char === currentChar){ 
              return acc + 1 
         } 
         return acc 
    }, 0) 
}
////////////////////////////////////////////////////////////////////////
function everyOdd(numbers) { 
    return reduce(numbers, function (acc, number) { 
         return acc && (number % 2 === 1) 
    }, true) 
} 
//////////////////////////////////////////
function everyPositive(numbers) { 
    return reduce(numbers, function (acc, number) { 
         return acc && (number > 0) 
    }, true) 
}
/////////////////////////////////////////
function everyGreaterThan3(strings) { 
    return reduce(strings, function (acc, string) { 
         return acc && (string.length > 3) 
    }, true) 
} 
////////////////////////////////////////
function everyContainE(numbers) { 
    return reduce(numbers, function (acc, string) { 
         return acc && (string.indexOf('e') >= 0) 
    }, true) 
}
/////////////////////////////////////
function every(array, f) { 
    return reduce(array, function (acc, argument) { 
         return acc && f(argument); 
    }, true) 
}
////////////////////////////////////////////////////////////////////////////////////////
function reduce(array, f, acc) { 
    if (acc === undefined) { 
          acc = array[0]; 
          array = array.slice(1); 
    } 
    each(array, function(element, i) { 
          acc = f(acc, element, i); 
    }); 
    return acc; 
}
////////////////////////////////////////////////////
function factorial(n){
    return reduce(range(1, n + 1), function(acc, element) {
        return acc * element;	
    })
}
///////////////////////////////////////////////////
function max(array) {
    return reduce(array, function(max, element) {
        if (max < element) {
            max = element;
        }
    return max;
    });
}
///////////////////////////////////////////////////
function range(start, end) {
    if (end === undefined) {
    end = start;
    start = 0;
    }
    var acc = [];
    for (var i = start; i < end; i++) {
        acc.push(i);
}
    return acc;
}
///////////////////////////////////////////////////////
function reduceGeneral(coll, f, acc) {
    if (acc === undefined) {
        if (Array.isArray(coll)) {
            acc = coll[0];
            coll = coll.slice(1);
        } else {
            var key = Object.keys(coll)[0]
            acc = coll[key];
            delete coll[key];
        }
    }

each(coll, function(element, i) {
    acc = f(acc, element, i);
});
    return acc;
}

function add(first, second) {
    return first + second;
}
//////////////////////////////////////////////////////////////////////////////////







