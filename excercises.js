/**
 * 1) If there are numbers, they must be at the end
 * 2) Letters can be lowercase and uppercase
 * 3) At least two characters long. Two-letter names can't have numbers
 */

 let myExpr = /^[A-Za-z]{2,}\d*$/
 let string = 'hsa2';
 
 console.log(
     'Excersise #1',
     myExpr.test(string)
)
 
myExpr = /\s/g
string = 'If there are numbers, they must be at. the end     ';

console.log(
    'Excersise #2: Match all the white spaces, tabs, etc',
    string.match(myExpr).slice(0,3)
)

myExpr = /\S/g
string = 'If there are numbers, they must be at. the end     ';

console.log(
    'Excersise #2: Match all the non white spaces',
    string.match(myExpr).slice(0,3)
)

myExpr = /O[h]{2,} n[o]{1,5}/g // two or more 'H'
string = 'Ohh nooo'; 

console.log(
    'Excersise #3: Match similar results',
    string.match(myExpr).slice(0,3), //ok
    'Oh nooo'.match(myExpr), // null
    'Ohhhhhhh noooo'.match(myExpr).slice(0,3),
)

myExpr = /[z]{4,}/g 
string = 'HAzzzzaah'; 

console.log(
    'Excersise #4: Match with minimal coincidences',
    string.match(myExpr).slice(0,3), //ok    
)

myExpr = /Oh{2}/g // two or more 'H'
string = 'Ohh nooo'; 

console.log(
    'Excersise #5: Match exact two of \'h\'',
    string.match(myExpr).slice(0,3), //ok
    'Oh nooo'.match(myExpr), // null
    'Ohhhhhhh noooo'.match(myExpr).slice(0,3),
)

myExpr = /favou?rite/ // 
string = 'favorite'; 

console.log(
    'Excersise #6: Conditional letter',
    string.match(myExpr).slice(0,3), //ok
    'favurite'.match(myExpr), // null
    'favourite'.match(myExpr).slice(0,3),
)


myExpr = /^\s*|\s*$/g 
string = '          Hello World!  '; 

console.log(
    'Excersise #7: Remove spaces at the beggining and the end',
    string.replace(myExpr, '')
)

myExpr = /(\w+ (\d+))/
string = 'Jan 2021'; 

console.log(
    'Excersise #8: capture Groups',
    string.match(myExpr).slice(0,3), //ok    
)
