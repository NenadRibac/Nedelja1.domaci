const hand = '✋';
const head = '😧';

const strike = document.querySelector('#strike');
const reaction = document.querySelector('#reaction');
const highfive= document.querySelector('#high-five')

const addHighFive = function addHighFive() {
    reaction.innerHTML = hand;
};

const colorMe = function colorMe() {
    strike.classList.add('make-color');
};

const color2 = function color2() {
    highfive.classList.add('high-five-color');
};
const addHeadBang = function addHeadBang() {
    reaction.innerHTML = head;
}


strike.addEventListener('click', addHeadBang);

strike.addEventListener('click', colorMe);
highfive.addEventListener('click', color2);

