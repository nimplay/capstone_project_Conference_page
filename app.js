const card = [
  {
    image: './images/program_icon_01.png',
    title: 'Expose',
    description: 'You must make a video explaining your project.',
  },
  {
    image: './images/program_icon_02.png',
    title: 'Exhibition',
    description: 'Your game will be seen and valorated by the other participants',
  },
  {
    image: './images/program_icon_03.png',
    title: 'Forum',
    description: 'Have the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: './images/program_icon_04.png',
    title: 'Workshop',
    description: 'Try creating you own work using open source license rather than just watchin.',
  },
  {
    image: './images/program_icon_05.png',
    title: 'Networking',
    description: 'You will have the opportunity to meet people from the environment who will know your work.',
  },
];
const participants = [
  {
    image: './images/speaker_03.png',
    title: 'Kilnam Chon',
    description: '',
    description2: 'Kilnam Chon helped bring the Internet to Asia and outspoken avocated for the open web and digital commons. ',
  },
  {
    image: './images/speaker_04.png',
    title: 'Julia Leda',
    description: 'Try creating you own work using open source license rather than just watchin.',
    description2: 'Heve the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: './images/speaker_05.png',
    title: 'Lila Tretikoov',
    description: 'Get opportunities to network with CC affiliates around the wolrd, also after the summit.',
    description2: 'Heve the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: './images/speaker_06.png',
    title: 'Ryan Merkley',
    description: 'Get opportunities to network with CC affiliates around the wolrd, also after the summit.',
    description2: 'Heve the time to share your thoughts and opinions with experts for each topic.',
  },
];

let sw = false;
let index = 0;
let index2 = 0;

/* display cards */

const deck = document.getElementById('program-card');
const mainDeck = document.createElement('ul');
mainDeck.className = 'deck';
deck.appendChild(mainDeck);
function addLi() {
  for (let i = 0; i < card.length; i += 1) {
    index = i;
    // variables
    const li = document.createElement('li');
    const div1 = document.createElement('div');
    const image = document.createElement('img');
    const cardtitle = document.createElement('h2');
    const cardp = document.createElement('p');
    // classes
    li.className = 'card';
    div1.className = 'card-text';
    image.className = 'card-image';
    cardtitle.className = 'card-title text-orange';
    cardp.className = 'card-paragraph text-color';
    // Dinamics IDs
    li.setAttribute('id', `bi${i}`);
    image.setAttribute('id', `img${i}`);
    cardtitle.setAttribute('id', `t${i}`);
    cardp.setAttribute('id', `p${i}`);

    const idLi = li.getAttribute('id');
    const idImg = image.getAttribute('id');
    const idTitle = cardtitle.getAttribute('id');
    const idPar = cardp.getAttribute('id');
    // Appends
    mainDeck.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(cardtitle);
    div1.appendChild(image);
    div1.appendChild(cardtitle);
    div1.appendChild(cardp);
    // dislay data
    document.getElementById(idLi);
    document.getElementById(idImg).src = card[index].image;
    document.getElementById(idTitle).textContent = card[index].title;
    document.getElementById(idPar).textContent = card[index].description;
  }
}
addLi();

/* display speakers */

const people = document.getElementById('speaker-continer');
const peopleList = document.createElement('ul');
peopleList.className = 'speaker-list';
people.appendChild(peopleList);
function addSpeaker() {
  for (let j = 0; j < participants.length; j += 1) {
    index2 = j;
    // variables
    const spli = document.createElement('li');
    const spdiv1 = document.createElement('div');
    const spdiv2 = document.createElement('div');
    const spimage = document.createElement('img');
    const spcardtitle = document.createElement('h2');
    const line = document.createElement('div');
    const spcardp = document.createElement('p');
    const spcardp2 = document.createElement('p');
    // classes
    spli.className = 'speaker';
    spdiv1.className = 'speaker-data';
    spdiv2.className = 'speaker-data2';
    spimage.className = 'speaker-image';
    spcardtitle.className = 'speaker-title';
    line.className = 'speaker-line';
    spcardp.className = 'speaker-paragraph text-orange';
    spcardp2.className = 'speaker-paragraph2 text-gray';
    // Dinamics IDs
    spli.setAttribute('id', `sp-c${j}`);
    spimage.setAttribute('id', `sp-img${j}`);
    spcardtitle.setAttribute('id', `sp-t${j}`);
    spcardp.setAttribute('id', `sp-p${j}`);
    spcardp2.setAttribute('id', `sp-p2${j}`);

    const idSpLi = spli.getAttribute('id');
    const idSpImg = spimage.getAttribute('id');
    const idSpTitle = spcardtitle.getAttribute('id');
    const idSpPar = spcardp.getAttribute('id');
    const idSpPar2 = spcardp2.getAttribute('id');
    // Appends
    peopleList.appendChild(spli);
    spli.appendChild(spdiv1);
    spdiv1.appendChild(spimage);
    spdiv1.appendChild(spdiv2);
    spdiv2.appendChild(spcardtitle);
    spdiv2.appendChild(spcardp);
    spdiv2.appendChild(line);
    spdiv2.appendChild(spcardp2);
    // dislay data
    document.getElementById(idSpLi);
    document.getElementById(idSpImg).src = participants[index2].image;
    document.getElementById(idSpTitle).textContent = participants[index2].title;
    document.getElementById(idSpPar).textContent = participants[index2].description;
    document.getElementById(idSpPar2).textContent = participants[index2].description2;
  }
}
addSpeaker();
const createPopUp = document.querySelector('#speaker-buttom');
createPopUp.addEventListener('click', () => {
  const button = document.getElementById('speaker-buttom');
  peopleList.classList.toggle('active');
  button.classList.toggle('active');
  if (sw === false) {
    document.getElementById('speaker-buttom').textContent = 'Close';
    sw = true;
  } else {
    document.getElementById('speaker-buttom').textContent = 'More';
    sw = false;
  }
});