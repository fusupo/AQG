console.log("a message");

//////////////////
// Extra Credit //
//////////////////

// if anyones actually reading this, note I'm not exactly new to JS so my answer
// isn't limited to what was covered in the lesson
var email1 = "someone@something.com";
var email2 = "someonesomething.com";
var email3 = "someone@somethingcom";

// got to the end of the assignment and decided if its gonna go so far as to employ
// soem regexp it, it could probably use some rudamentary namespacing
var aqGym = aqGym || {};
aqGym.lesson1 = aqGym.lesson1 || {};

// naively
aqGym.lesson1.containsAtSymbol = function(email_str){
    var containsAt;
    var split_arr = email_str.split("@");
    if(split_arr[0] === email_str){
        containsAt = false;
    }else{
        containsAt = true;
    }
    return containsAt;
};

// likewise we can do the same for the period
aqGym.lesson1.containsPeriodSymbol = function(email_str){
    var containsPeriod;
    var split_arr = email_str.split(".");
    if(split_arr[0] === email_str){
        containsPeriod = false;
    }else{
        containsPeriod = true;
    }

    return containsPeriod;
};

// we can keep it DRY
aqGym.lesson1.containsSymbol = function(email_str, symbol){
    var containsSym;
    var split_arr = email_str.split(symbol);
    if(split_arr[0] === email_str){
        containsSym = false;
    }else{
        containsSym = true;
    }

    return containsSym;
};

// resulting in our naive validation func
aqGym.lesson1.validateEmail = function(email_str){
    var isValid;
    if(this.containsSymbol(email_str, "@") && this.containsSymbol(email_str, ".")){
        isValid = true;  
    }else{
        isValid = false;
    }

    return isValid;
};

console.log(email1 + " is valid email? " + aqGym.lesson1.validateEmail(email1));
console.log(email2 + " is valid email? " + aqGym.lesson1.validateEmail(email2));
console.log(email3 + " is valid email? " + aqGym.lesson1.validateEmail(email3));

// but in reality we should probably want to use regular expressions
aqGym.lesson1.validateEmailToo = function(email_str){
    var reg_exp = /@[A-Za-z]+[\.]/; //still naive, but less so than the previous method
    return(reg_exp.test(email_str));
};

console.log(email1 + " is valid email? " + aqGym.lesson1.validateEmailToo(email1));
console.log(email2 + " is valid email? " + aqGym.lesson1.validateEmailToo(email2));
console.log(email3 + " is valid email? " + aqGym.lesson1.validateEmailToo(email3));
