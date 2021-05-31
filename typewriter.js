var i = 0;
var txt = 'An aspiring security engineer, a current cyber security student, security researcher, software developer, and mentor. I\'m currently pursuing a BS degree in Cybersecurity at Illinois State University, interning at Verizon, and graduating in Spring 2022.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("bio").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}