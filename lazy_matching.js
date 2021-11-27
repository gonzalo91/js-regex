console.log('============Default matches for regex are greedy============')
let expr = /t[a-z]*i/
let expr2 = /t[a-z]*?i/

let string = 'titanic';
let string2 = 'I cant\'t hum while I\'m hugging you ';
let string3 = 'I cant\'t hum while I\'m hugging you ';

console.log(
    'Greedy example with the word titanic',
    string.match(expr)
)

console.log(
    'Lazy example with the word titanic',
    string.match(expr2)
)


string = '<h1>Hello world</h1>';
expr = /<.*>/ //The wild card ".*" means any character 0 or more time
console.log(
    'Greedy example with HTML',
    string.match(expr)
)

string = '<h1>Hello world</h1>';
expr = /<.*?>/ //The wild card ".*" means any character 0 or more time
console.log(
    'LAZY example with HTML',
    string.match(expr)
)