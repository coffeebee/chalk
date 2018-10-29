const chalkAnimation = require('chalk-animation');
 
chalkAnimation.rainbow('Lorem ipsum dolor sit amet');

const rainbow = chalkAnimation.rainbow('Lorem ipsum'); // Animation starts
 
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);
 
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);