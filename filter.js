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
function filter(array,predicate){
    var acc = [];
    each(array,function(element){
        if (predicate(element)){
            acc.push(element);
        }
    });
    return acc;
}
function filter(array,predicate){
    var acc = [];
    each(array,function(element,i){
        if (predicate(element,i)){
            acc.push(element);
        }
    });
    return acc;
}

/////////////////////////////////////////////////////////////////
function evens(array){
    return filter(array,function(element){
        return element%2===0
    });
}
///////////////////////////////////////////
function multiplesOfthree(array){
    return filter(array,function(element){
        return element /3===0
    });
}
//////////////////////////////////////////
function psitives(array){
    return filter(array,function(element){
        return element>0
    });
}
/////////////////////////////////////////
function evenLength(array){
    return filter(array,function(element){
        return element.length%2===0
    });
}
///////////////////////////////////////////////////////////////////
function odds(array){
    return filter(array,function(element){
        return element%2===1
    });
}
/////////////////////////////////////////
function negatives(array){
    return filter(array,function(element){
        return element<0
    });
}
/////////////////////////////////////////
function largerThanSix(array){
    return filter(array,function(element){
        return element>6
    });
}
///////////////////////////////////////////////////////////////////
function starsWithChar(array,char){
    return filter(array,function(element){
        return element.CharAt(0)===char
    });
}
///////////////////////////////////////////
function evenIndexedEvenLength(array){
    return filter(array,function(element,i){
        return element.length%2===0 && i%2===0
    })
}
///////////////////////////////////////////
function newFilter(coll, predicate) { 
    var acc = []; 
    if(!Array.isArray(coll)){ 
         acc = {}; 
    } 
    each(coll, function(value, key) { 
         if (predicate(value, key)) { 
              if(Array.isArray(coll)){ 
                   acc.push(value); 
         } else { 
              acc[key] = value; 
         } 
         } 
    }); 
    return acc; 
};
//////////////////////////////////////////
function filteronobject(object){
    return newFilter(object,function(value){
         return typeof value ==="number"
    });
}
//////////////////////////////////////////
function moveZero(numbers){
  var y= filter(numbers,function(element){
     return element>0
     
      })
      var x=filter(numbers,function(element){
        return   element===0
        
    })
    return(y.concat(x))
}