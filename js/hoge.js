// Can also be included with a regular script tag
// import Typed from 'typed.min.js';

var options = {
  // strings to be typed
  strings: [
      "HELLO",
      "I'm","matken11235",
      "WHAT","DO","YOU","WANT","TO","KNOW","?"
    ],
  // type speed in milliseconds
  typeSpeed: 20,
  // do not show cursor
  showCursor: false,
  // Fade out instead of backspace
  fadeOut: true,
  // css class for fade animation
  fadeOutClass: 'typed-fade-out',
  // Fade out delay in milliseconds
  fadeOutDelay: 50,
  // time before backspacing in milliseconds
  backDelay: 300,
};
var typed = new Typed(".word", options);
