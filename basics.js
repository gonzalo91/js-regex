let myExpr = /hello/
let string = 'hello world';

console.log(
    'Match a word(case sensitive)',
    myExpr.test(string)
)

let myExpr2 = /hello/i
let string2 = 'Hello world';

console.log(
    'Match a word (No Case sensitive)',
    myExpr2.test(string2)
)

let myExpr3 = /hello|bye/i
let string3 = 'Bye world';

console.log(
    '"Or" functionality',
    myExpr3.test(string3)
)

let myExpr4 = /extracted/
let string4 = 'I need the word extracted to be extracted';
let result = string4.match(myExpr4)
console.log(
    'Extract if match (case sensitive):',
    result[0]
)

myExpr4 = /extracted/gi
string4 = 'Return all the extracted words to be Extracted ';
result = string4.match(myExpr4)
console.log(
    'Extract if match (Multiple and no case sensitive):',
    result
)