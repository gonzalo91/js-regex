let expr = /hu./g //We add the 'g' flag so it would get all the coincidences
let string = 'I cant\'t hum while I\'m hugging you ';
let string2 = 'I cant\'t hum while I\'m hugging you ';
let string3 = 'I cant\'t hum while I\'m hugging you ';

console.log(
    'Math all words begging with "hu" (also applies with the trail)',
    string.match(expr)
)

expr = /b[aeiou]g/g 
string = 'All the big bugs are stored in the bag';

console.log(
    'Math all words which start and end with b and g and the middle letter is a vowel',
    string.match(expr)
)

expr = /[a-d]/ig
string = 'All the big bugs are stored in the bag';

console.log(
    'Math all letters which are between A and D',
    string.match(expr).slice(0, 3)
)

expr = /[2-6]/ig
string = 'There were found 4 bugs, up until now we\'ve checked only 2 of all of them';

console.log(
    'Math all numbers between 2 and 6',
    string.match(expr).slice(0, 3)
)

expr = /[^0-9aeiou]/ig
string = 'There were found 4 bugs, up until now we\'ve checked only 2 of all of them';

console.log(
    'Exclude numbers and vowels',
    string.match(expr).slice(0, 3)
)

expr = /s+/g
string = 'Mississipis';

console.log(
    'Match if the letter "s" occurs one or more time',
    string.match(expr).slice(0, 3)
)

expr = /go*/
string = 'goooal';
string2 = 'gut feeling'
string3 = 'over loon'

console.log(
    'Match if the letter go occure zero or more times',
    string.match(expr),
    string2.match(expr),
    string3.match(expr),
)

expr = /^There/ig
string = 'There were found 4 bugs, up until now we\'ve checked only 2 of all of them';

console.log(
    'Match at the beggining of the string',
    string.match(expr).slice(0, 3)
)

expr = /them$/ig
string = 'There were found 4 bugs, up until now we\'ve checked only 2 of all of them';

console.log(
    'Match at the ending of the string',
    string.match(expr).slice(0, 3)
)
