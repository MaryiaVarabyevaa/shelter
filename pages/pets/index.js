/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
const pets = [
  {
    name: "Jennifer",
    image: "../../assets/img/pets/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Sophia",
    image: "../../assets/img/pets/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Woody",
    image: "../../assets/img/pets/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  },
  {
    name: "Scarlett",
    image: "../../assets/img/pets/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Katrine",
    image: "../../assets/img/pets/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Timmy",
    image: "../../assets/img/pets/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
  },
  {
    name: "Freddie",
    image: "../../assets/img/pets/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    name: "Charly",
    image: "../../assets/img/pets/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
  }
];

const hamburger = document.querySelector(".hamburger-pets");
const navMenu = document.querySelector(".header-pets__nav");
const links = document.querySelectorAll(".nav-pets__link");
const shadow = document.querySelector(".shadow");
const logo = document.querySelector(".header__link");
const copyLogo = logo.cloneNode(true);

/* Hamburger menu */

function toggleClass() {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("active-pet");
  document.body.classList.toggle("block");
  shadow.classList.toggle("active");
  logo.classList.toggle("inactive");
  if (navMenu.classList.contains("active-pet")) {
    navMenu.prepend(copyLogo);
  }
}

function removeClass() {
  hamburger.classList.remove("open");
  navMenu.classList.remove("active-pet");
  shadow.classList.remove("active");
  document.body.classList.remove("block");
  logo.classList.remove("inactive");
  copyLogo.remove();
}

hamburger.addEventListener("click", toggleClass);
links.forEach(elem => elem.addEventListener("click", removeClass));
navMenu.addEventListener("click", removeClass);
shadow.addEventListener("click", removeClass);

/* Hamburger menu */

/* Popup */

const body = document.querySelector("body");
const popup = document.querySelector("#popup");
const popupBody = document.querySelector("#popup-body");
const closeBtn = document.querySelector("#btn-close");
const wrapperCards = document.querySelector("#wrapper");

wrapperCards.addEventListener("click", (event)=> {
  if (event.target.closest(".card-pet")) {
    const petName = event.target.closest(".card-pet").dataset.pet;
    for (let i = 0; i < pets.length; i += 1) {
      if (petName === pets[i].name) {
        popup.querySelector(".popup__image img").src = `${pets[i].image}`;
        popup.querySelector(".name").innerHTML = `${pets[i].name}`;
        popup.querySelector(".type-and-breed").innerHTML = `${pets[i].type} - ${pets[i].breed}`;
        popup.querySelector(".description").innerHTML = `${pets[i].description}`;
        popup.querySelector(".age").innerHTML = `<span>Age: </span>${pets[i].age}`;
        popup.querySelector(".inoculations").innerHTML = `<span>Inoculations: </span>${pets[i].inoculations}`;
        popup.querySelector(".diseases").innerHTML = `<span>Diseases: </span>${pets[i].diseases}`;
        popup.querySelector(".parasites").innerHTML = `<span>Parasites: </span>${pets[i].parasites}`;
      }
    }
  }
  popup.classList.add("popup-open");
  popupBody.classList.add("popup__body_open");
  body.classList.add("block");
});

function closePopup() {
  body.classList.remove("block");
  popup.classList.remove("popup-open");
  popupBody.classList.remove("popup__body_open");
}
popup.addEventListener("click", (event)=> {
  if (event.target === popupBody) {
    closePopup();
  }
});

closeBtn.addEventListener("click", closePopup);


/* popups */

/* pagination */

const btnFirst = document.querySelectorAll(".btn-pets-direction")[0];
const btnPrev = document.querySelectorAll(".btn-pets-direction")[1];
const btnNum = document.querySelectorAll(".btn-pets-direction")[2];
const btnNext = document.querySelectorAll(".btn-pets-direction")[3];
const btnLast = document.querySelectorAll(".btn-pets-direction")[4];

let imgs = document.querySelectorAll(".card-image");
let titles = document.querySelectorAll(".card-title");
let cards = document.querySelectorAll(".card-pet");

let copyObject = pets.slice();
let i = 0;
let b = 0;

function random() {
  return Math.floor(Math.random() * (copyObject.length));
}
function getRandomIndex() {
  if (copyObject.length === 1) {
    copyObject.splice(i, b);
    copyObject = pets.slice();
    i = 0;
    b = 0;
  }
  copyObject.splice(i, b);
  let index = random();
  i = index;
  b = 1;
  for (let i = 0; i < pets.length; i++) {
    if (copyObject[index].name === pets[i].name) {
      return i;
    }
  }
}

let arr = [];

function createArr() {
  let x;
  if (screen.width < 768) x = 24;
  else if (screen.width >= 768 && screen.width < 1280) x = 48;
  else if (screen.width >= 1280) x = 64;
  for (let i = 0; i < x; i++) {
    let index = getRandomIndex();
    arr.push(pets[index]);
  }
  return arr;
}
createArr();
console.log(arr);

function createCardTemplate(index) {
  const card = document.createElement("div");
  card.classList.add("card-pet");
  card.setAttribute("data-pet", `${arr[index].name}`);
  const petImage = document.createElement("img");
  petImage.classList.add("card-image");
  petImage.setAttribute("src", `${arr[index].image}`);
  const petName = document.createElement("h3");
  petName.classList.add("card-title");
  petName.innerText = `${arr[index].name}`;
  const button = document.createElement("button");
  button.classList.add("btn", "btn-more");
  button.innerText = "Learn More";

  card.append(petImage, petName, button);

  return card;
}

function createCards() {
  let card1 = createCardTemplate(0);
  let card2 = createCardTemplate(1);
  let card3 = createCardTemplate(2);
  let card4 = createCardTemplate(3);
  let card5 = createCardTemplate(4);
  let card6 = createCardTemplate(5);
  let card7 = createCardTemplate(6);
  let card8 = createCardTemplate(7);
  if (screen.width < 768) {
    wrapperCards.append(card1, card2, card3);
  }
  if (screen.width >= 768 && screen.width < 1280) {
    wrapperCards.append(card1, card2, card3, card4, card5, card6);
  }
  if (screen.width >= 1280) {
    wrapperCards.append(card1, card2, card3, card4, card5, card6, card7, card8);
  }
}

createCards();

function changeNextCard() {
  if (+btnNum.innerHTML <= 7) {
    let x;
    if (screen.width < 768) x = 3;
    else if (screen.width >= 768 && screen.width < 1280) x = 6;
    else if (screen.width >= 1280) x = 8;
    let index = +btnNum.innerHTML * x;
    for (let i = 0; i < x; i++) {
      imgs[i].src = `${arr[index].image}`;
      titles[i].innerHTML = `${arr[index].name}`;
      cards[i].setAttribute("data-pet", `${arr[index].name}`);
      index++;
    }
  }
}

function changePrevCard() {
  if (+btnNum.innerHTML >= 2) {
    let index;
    let x;
    if (screen.width < 768) {
      index = +btnNum.innerHTML * 3 - 6;
      x = 3;
    } else if (screen.width >= 768 && screen.width < 1280) {
      index = +btnNum.innerHTML * 6 - 12;
      x = 6;
    } else if (screen.width >= 1280) {
      index = +btnNum.innerHTML * 8 - 16;
      x = 8;
    }
    for (let i = 0; i < x; i++) {
      imgs[i].src = `${arr[index].image}`;
      titles[i].innerHTML = `${arr[index].name}`;
      cards[i].setAttribute("data-pet", `${arr[index].name}`);
      index++;
    }
  }
}

function changeCardLast() {
  let x;
  if (screen.width < 768) x = 3;
  else if (screen.width >= 768 && screen.width < 1280) x = 6;
  else if (screen.width >= 1280) x = 8;
  let index = arr.length - x;
  for (let i = 0; i < x; i++) {
    imgs[i].src = `${arr[index].image}`;
    titles[i].innerHTML = `${arr[index].name}`;
    cards[i].setAttribute("data-pet", `${arr[index].name}`);
    index++;
  }
}

function changeCardFirst() {
  let x;
  if (screen.width < 768) x = 3;
  else if (screen.width >= 768 && screen.width < 1280) x = 6;
  else if (screen.width >= 1280) x = 8;
  for (let i = 0; i < x; i++) {
    imgs[i].src = `${arr[i].image}`;
    titles[i].innerHTML = `${arr[i].name}`;
    cards[i].setAttribute("data-pet", `${arr[i].name}`);
  }
}

window.addEventListener("load", () => {
  btnPrev.setAttribute("disabled", "");
  btnFirst.setAttribute("disabled", "");
});

btnNext.addEventListener("click", () => {
  changeNextCard();
  if (+btnNum.innerHTML >= 1 && +btnNum.innerHTML < 7) {
    btnFirst.removeAttribute("disabled");
    btnPrev.removeAttribute("disabled");
    btnNum.innerHTML++;

    btnFirst.classList.remove("inactive");
    btnFirst.classList.add("active");

    btnPrev.classList.remove("inactive");
    btnPrev.classList.add("active");
  } else if (+btnNum.innerHTML === 7) {
    btnNext.setAttribute("disabled", "");
    btnLast.setAttribute("disabled", "");
    btnNum.innerHTML++;

    btnNext.classList.remove("active");
    btnNext.classList.add("inactive");

    btnLast.classList.remove("active");
    btnLast.classList.add("inactive");
  }
});

btnPrev.addEventListener("click", () => {
  changePrevCard();
  if (+btnNum.innerHTML === 2) {
    btnNum.innerHTML--;
    btnFirst.setAttribute("disabled", "");
    btnPrev.setAttribute("disabled", "");

    btnFirst.classList.remove("active");
    btnFirst.classList.add("inactive");

    btnPrev.classList.remove("active");
    btnPrev.classList.add("inactive");
  } else if (+btnNum.innerHTML > 1 && +btnNum.innerHTML <= 8) {
    btnNum.innerHTML--;
    btnFirst.removeAttribute("disabled");
    btnPrev.removeAttribute("disabled");
    btnNext.removeAttribute("disabled");
    btnLast.removeAttribute("disabled");
    btnNum.removeAttribute("disabled");

    btnNext.classList.add("active");
    btnNext.classList.remove("inactive");

    btnLast.classList.add("active");
    btnLast.classList.remove("inactive");
  }
});

btnLast.addEventListener("click", () => {
  if (+btnNum.innerHTML !== 8) {
    btnNum.innerHTML = 8;
    changeCardLast();
    btnPrev.removeAttribute("disabled");
    btnFirst.removeAttribute("disabled");
    btnNext.setAttribute("disabled", "");
    btnLast.setAttribute("disabled", "");

    btnNext.classList.remove("active");
    btnNext.classList.add("inactive");

    btnLast.classList.remove("active");
    btnLast.classList.add("inactive");

    btnPrev.classList.add("active");
    btnPrev.classList.remove("inactive");

    btnFirst.classList.add("active");
    btnFirst.classList.remove("inactive");
  }
});

btnFirst.addEventListener("click", () => {
  changeCardFirst();
  if (+btnNum.innerHTML > 1) {
    btnNum.innerHTML = 1;
    btnPrev.setAttribute("disabled", "");
    btnFirst.setAttribute("disabled", "");
    btnNext.removeAttribute("disabled");
    btnLast.removeAttribute("disabled");

    btnNext.classList.add("active");
    btnNext.classList.remove("inactive");

    btnLast.classList.add("active");
    btnLast.classList.remove("inactive");

    btnPrev.classList.remove("active");
    btnPrev.classList.add("inactive");

    btnFirst.classList.remove("active");
    btnFirst.classList.add("inactive");
  }
});
