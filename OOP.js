function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
              if (balance - amount >= 0) {
                   balance = balance - amount;
                   return 'Here is your money: $' + amount;
              }
         return 'Insufficient funds.';
         },               deposit: function(amount) {
              balance = balance + amount;
              return 'Your balance is: $' + balance;
         }
    };
}
///////////////////OOP"
function makeAccount(initial){
var account={};
account.balance=initial;
account.withdraw=withdraw;
account.deposit=deposit;
return account;
}
var withdraw = function(amount) {
    if (this.balance - amount >= 0) {
         this.balance = this.balance - amount;
         return 'Here is your money: $' + amount;
    }
    return 'Insufficient funds.';
};
    
var  deposit =  function(amount) {
   this.balance = this.balance + amount;
    return 'Your balance is: $' +this.balance;
};

////////////////////////////////////////////////////////////////////////////////////
function makeStopwatch() {
    var stop;
    var time = 0;
    return {
         start: function() {
              stop = setInterval(function() {
              time = time + 1;
              console.log('Elapsed time: ' + time + 's.');
         }, 1000);
    },stop: function() {
              clearInterval(stop);
         },
         reset: function() {
              clearInterval(stop);
              time = 0;
         }
    };
}
///////////////////////////////OOP¨
function makeStopwatch(swatch){
return {
    swatch:swatch,
    stop:undefined,
    time:0,
    start:start,
    stop:stop,
    reset:reset,
    };
}
var start = function() {
     this. stop = setInterval(function() {
          this.time = this.time + 1;
               console.log('Elapsed time: ' + this.time + 's.');
}, 1000);
}
var stop=function() {
     this.time=clearInterval(this.stop);
}
var reset= function() {
     clearInterval(this.stop);
     this.time = 0;
}
//////////////////////////////////////////////////////////////////////////////////////////////
function Toaster() {
     var instance = {};
     instance.addToast = addToast;
     instance.toast = undefined;
     instance.eject = eject;
     instance.start = start;
     instance.cancel = undefined;
     instance.stop = stop;
     instance.status = undefined;
     return instance;
 }
 
 var addToast = function(string) {
     this.toast = string;
 }
 
 var eject = function() {
     var toast = this.toast;
     if (toast !== undefined) {
     this.toast = undefined;
          return toast;
     }
     return 'the toaster is empty';
 }
 
     var start = function() {
          var that = this;
     if (this.toast !== undefined) {
         this.cancel = setTimeout(function() {
             console.log('Ding!');
             if (that.status === 'toasted') {
                 that.status = 'burned';
                 that.toast += '(burned)';
             } else {
                 that.status = 'toasted';
                 that.toast += '(toasted)';
             }
         }, 5000);
     } else
         console.log('Toast needs to be added before it can be toasted.');
 }
 
 var stop = function() {
     clearTimeout(this.cancel);
 }





