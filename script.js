//var username; 
var username = 'Sue';

console.log('Hello, world');
console.log(username);

username = 'Stephanie';
console.log(username);

username = 'Madison';
console.log(username);

username = prompt('What is your name?');
console.log(username);
document.write('<h2>Welcome, ' + username + ' ! </h2>');

var wantsToBook = prompt('Do you want to book our vacation now?');
console.log(wantsToBook);

if (wantsToBook === 'yes') {
    document.write('<h2>Book a Package Now!<a href="book.html">BOOK</a></h2>');
} else {
    document.write('Please come back when you are ready to getaway!');
}