// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork (activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
}
mondayWork();


function wrapAdjective(wrapper = "*") {
    function message(recognition = "special") {
      return `You are ${wrapper}${recognition}${wrapper}!`;
    };
    return message;
};


wrapAdjective("||");
result("high performance employee");