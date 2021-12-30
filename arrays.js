console.log ('Pracitcing JavaScript Arrays')

//Array Syntax
const heroes = ["Batman.", "Spider-Man", "Thor", "StarLord", "Deadpool"];

const villains = [
    "Joker",
    "Venom",
    "Loki",
    "Thanos",
    "Francis"
];

// Using the MDN or W3Schools
// Add a Value to the back of each array
heroes.push("Joe Exotic")
villains.push("Carol Baskin")
// Remove a value from the back of each array
heroes.pop();
villains.pop();
// Add a Value to the front of each array
heroes.unshift("Hulk");
villains.unshift("General Thunderbolt Ross");
// Remove a value from each array
heroes.shift();
villains.shift();
// Break up each array at Index 2 
const str = "Spider-man";

Const res = str.split(" ")
// Add a Value to somewhere in the middle of each array
heroes.splice ("Joe Exotic", "Hulk");
villains.splice ("Carol Baskin", "General Thunderbolt Ross");
// Remove a value from somewhere in the middle of each array
heroes.slice (2,3, "Thor, Spider-Man", "StarLord");
villains.slice(1,2 "Carol Baskin", "Loki", "Joker");
