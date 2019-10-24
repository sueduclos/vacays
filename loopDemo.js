// red light - we don't know when the conditon will change

var lightColor = prompt('What color is the light?');

while (lightColor === 'red') {
    console.log('Stop the car');
    lightColor = prompt('What color is the light?');
} 
    console.log('Goooooo!');

// we need to do something a certain number of times. Let's do pushups!

var pushupCounter = 0;

while (pushupCounter < 10) {
    console.log('Do a pushup!');
    // pushupCounter = pushupCounter + 1;
    // pushupCounter += pushupCounter +1;
    pushupCounter++;
}

// a for loop is just a shorthand version of a while loop that has a counter
for (var pushupCounter = 0; pushupCounter < 10; pushupCounter++ ){
    console.log('Do a pushup!');
    console.log('I have done' + pushupCounter + ' pushups!');
}

// ...and, becuase programmers hate to type, we often use "i" as our variable name for our counter
for (var i = 0; i < 10; i++); {
    console.log('I have done ' + i + ' pushups!');
}



