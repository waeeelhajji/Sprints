function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}
//////////////////////////////////
function indexedExponentials(numbers){
    var res = [];
    each(numbers,function(element,i){
       res.push(Math.pow(element,i))
    })
    return res
}
///////////////////////////////////
function IndexedOddNumbers(numbers){
    var res = [];
    each(numbers,function(element,i){
        if(element[i] % 2 !== 0 && i % 2 === 0 ){
            res.push(element)

        }
    })
    return res 
}
///////////////////////////////////
function evenIndexedEvenLenghs(strings){
    var res = [];
    each(strings,function(element,i){
        if(i%2===0&&element.length%2===0){
            res.push(element)
        }
    })
    return res 
}
/////////////////////////////////////////////////////////////////////////////////////
function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}
///////////////////////////////////////////////
function keysLongerThan(objs,num){
    var acc = {};
    each(objs,function(obj,key){
        if(key.length>num){
           acc[key]=obj 

        }
    })
    return acc;
}
//////////////////////////////////////////////
function incrementValues(object){
    var acc = {};
    each(object,function(obj,key){
        if(typeof(obj)==="number"){
            acc[key]=obj; 
        }
    })
    return acc
}
////////////////////////////////////////////////
function objecttoArrayToObject(ArrObj){
    var acc = {};
    var arr = [];
    each(ArrObj,function(obar,key){
        if(Array.isArray(obar)){
            arr.push(obar)
            return arr
        }else {
            acc[key]=obar
        }
    }) 
    return acc
}
















