var hh1 = document.querySelector("h1");
var myButton = document.querySelector('button');

var myImage = document.querySelector('img');
myImage.onclick = function () {
    if (myImage.getAttribute('src') === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    }else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name',myName);
    hh1.textContent = 'cool,' + myName + '!';
}

if (!localStorage.getItem('name')) {
    setUserName();
}else {
    var storageName = localStorage.getItem('name');
    hh1.textContent = 'cool,' + storageName + '!';
}

myButton.onclick = function () {
    setUserName()
};