const messWithMe = document.querySelector('span.mess-with-me');

messWithMe.style.fontSize = '40px';

const greenPara = document.querySelector('p.mess-with-me');

greenPara.style.backgroundColor = 'green';


const hideThis = document.querySelector('#hide-me');

hideThis.style.display = 'none';

const wider = document.querySelector('#triceratops');

wider.style.width = '323px';



function makeOrange() {
    messWithMe.style.color = 'orange';

}

messWithMe.addEventListener('click', makeOrange);
    
const dino = document.querySelector('#triceratops');

function redBorder() {

    dino.style.border = 'solid red 1px';
}

dino.addEventListener('click', redBorder)


const feathered = document.querySelector('#feathers');

function halfVis() {

    feathered.style.opacity = '50%';

}

feathered.addEventListener('click', halfVis);


const switchColor = document.querySelector('#toggle');

function pushButton() {

    greenPara.style.backgroundColor = 'yellow';

}

switchColor.addEventListener('click', pushButton);