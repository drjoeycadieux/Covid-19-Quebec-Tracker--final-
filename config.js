/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */


// dailyOverview[0] gets the first object, wrapped in braces {}.
// dailyOverview[1] would get the second object in braces.
// adding '.cases', '.newCases', etc. gets the property you want.

const dailyOverview = [{
    date: '2021-09-09',
    cases: 395155,
    newCases: 703,
    death: 11297,
    newDeath: 1
}];

const mtlOverview = [{
    date: '2021-09-09',
    cases: 395155,
    newCases: 703,
    death: 11297,
    newDeath: 1
}];



document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("newCases").innerHTML = dailyOverview[0].newCases;
document.getElementById("death").innerHTML = dailyOverview[0].death;
document.getElementById("newDeath").innerHTML = dailyOverview[0].newDeath;



document.getElementById("cases").innerHTML = mtlOverview[1].cases;
document.getElementById("newCases").innerHTML - mtlOverview[1].newCases;
document.getElementById("death").innerHTML = dailyOverview[1].death;
document.getElementById("newDeath").innerHTML = dailyOverview[1].newDeath;