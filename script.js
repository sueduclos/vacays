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

// vacation html pseudocode

// inputs (parameters): name, image, description
// work: insert the name, image, and description into the tags
// outputs (return values): an html article with name, image, description.

//test case
//parameters: 'Jacque', 'jacques.jpg', 'Not the brightest but really sweet'

//work value:
//<article>
 // <h3>name</h3>
 // <img src="image">   
 // <p>description</p>
 //<article>

 //return value:
//<article>
 // <h3>Jacques</h3>
 // <img src="jacques.jpg">   
 // <p>Not the brightest but really sweet</p>
 //<article>

//  function createCatArticle(name, image, description) {
//      var catArticle = '<article>' + 
//         '<h3>' + name + '</h3>' +
//         '<img src="image">' + image + '">' +
//         '<p>' + description + </p> +
//         ''</article>';
    
//     return catArticle;
//  }

function createVacationDestination(name, image, description) {
    var vacationDestination = '<article>' + 
        '<h3>' + name + '</h3>' +
        '<img src="' + image + '">' +
        '<p>' + description + '</p>' +
        '</article>';

    return vacationDestination;
}

var wantsToBook = prompt('Hey there! Do you want to add a desination?');

if (wantsToBook === 'yes') {
    var destinationName = prompt('Where do you want to go?');
    var destinationImage = prompt('What is the name of the file containing the image?');
    var destinationDescription = prompt('What is the description of the new destination?');
    var newDestination = createVacationDestination(destinationName, destinationImage, destinationDescription);
    document.write(newDestination);
}


