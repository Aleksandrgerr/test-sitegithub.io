var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moscow.jpg') {
      myImage.setAttribute ('src','images/moscow2.jpg');
    } else {
      myImage.setAttribute ('src','images/moscow.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeding = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Пожалуйста, введите маше имя.');
  localStorage.setItem('name', myName);
  myHeding.textContent = `Москва это лучший город Земли, ` + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
