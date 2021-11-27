let myExpr = /q(?=u)/ // Positive look ahead
let myExpr2 = /q(?!u)/ // Negative look ahead
let string = 'qu';
let string2 = 'qi';

console.log(
    'Look aheds',
    myExpr.test(string),
    myExpr2.test(string2),
)


//
myExpr = /(?=\w{5})(?=\D*\d{2})/
string = 'asssad13';

console.log(
    'Match passwords larger than 5 characters and two consecitives digits',
    myExpr.test(string)
)