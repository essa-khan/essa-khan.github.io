var i = 0;
var txt = 'An aspiring security engineer, a current cyber security student, security researcher, software developer, and mentor. I\'m currently pursuing a BS degree in Cybersecurity at'+'<a href="https://illinoisstate.edu/academics/cybersecurity/">Illinois State University</a>'+', interning at '+'<a href="https://www.verizon.com/business/solutions/secure-your-business/">Verizon</a>'+', and graduating in Spring 2022.';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("bio").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}