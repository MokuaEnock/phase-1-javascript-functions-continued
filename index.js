function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

const mondayWork = function (string = "go to the office") {
    return `This Monday, I will ${string}.`;
}

function wrapAdjective(string = "*") {
    return function (adjective = 'special') {
        return `You are ${string}${adjective}${string}!`;
    }
}