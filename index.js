// Your code here
//Function 
function saturdayFun(someActivity = "roller-skate"){
    return `This Saturday, I want to ${someActivity}!`
}

//Function expression
const mondayWork = function(someActivity = "go to the office"){
    return `This Monday, I will ${someActivity}.`
}

function wrapAdjective(someString = "*"){
    return function(someValue = "special"){
        return `You are ${someString}${someValue}${someString}!`;
    }
}

console.log(wrapAdjective("lololo")("a dedicated programmer"));