let fname = 'Christiano';
let lname = 'Ronaldo';
let age = prompt("Masukkan umur Christiano Ronaldo!");

// Cara lama
// let result = fname + ' ' + lname + ' is ' + age + ' years old';
// alert(result);

// Memakai template strings
let result = `${fname} ${lname} is ${age} years old`;
alert(result);