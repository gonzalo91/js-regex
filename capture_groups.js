let myExpr = /^(\d+)\s\1\s\1$/

let string = '42 42 42';

console.log(
    'capture groups; Match 42 only 3 times',
    myExpr.test(string),    
)

myExpr = /silver/
string = 'The sky is silver';

console.log(
    'Replace text',
    string.replace(myExpr, 'blue')    
)

console.log(
    'change order',
    "Reverse2 Reverse1".replace(/(\w+)\s(\w+)/, '$2 $1')
)