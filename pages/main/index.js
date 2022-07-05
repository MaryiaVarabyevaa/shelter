/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav");
const links = document.querySelectorAll(".nav__link");
const shadow = document.querySelector(".shadow");
const logo = document.querySelector(".header__link");
const copyLogo = logo.cloneNode(true);

/* Hamburger menu */

function toggleClass() {
  document.body.classList.toggle("block");
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("active");
  shadow.classList.toggle("active");
  logo.classList.toggle("inactive");
  if (navMenu.classList.contains("active")) {
    navMenu.prepend(copyLogo);
  }
}

function removeClass() {
  hamburger.classList.remove("open");
  navMenu.classList.remove("active");
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

/* CAROUSEL */

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_ACTIVE = document.querySelector("#item-active");
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

let copyObject = pets.slice();
let i = 0;
let b = 0;

function random() {
  return Math.floor(Math.random() * (copyObject.length - 1));
}

// eslint-disable-next-line consistent-return
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
  for (let i = 0; i < pets.length; i += 1) {
    if (copyObject[index].name === pets[i].name) return i;
  }
}

function createCardTemplate() {
  let index = getRandomIndex();
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-pet", `${pets[index].name}`);
  const petImage = document.createElement("img");
  petImage.classList.add("card-img");
  petImage.setAttribute("src", `${pets[index].image}`);
  const petName = document.createElement("h3");
  petName.classList.add("card-name");
  petName.innerText = `${pets[index].name}`;
  const btn = document.createElement("btn");
  btn.classList.add("btn", "btn-more");
  btn.innerText = "Learn More";
  card.append(petImage, petName, btn);
  return card;
}
if (screen.width >= 1280) {
  const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };
  const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
  };
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  ITEM_ACTIVE.innerHTML = "";
  ITEM_RIGHT.innerHTML = "";
  ITEM_LEFT.innerHTML = "";

  const card1 = createCardTemplate();
  const card2 = createCardTemplate();
  const card3 = createCardTemplate();

  ITEM_LEFT.append(card1, card2, card3);

  const card4 = createCardTemplate();
  const card5 = createCardTemplate();
  const card6 = createCardTemplate();

  ITEM_ACTIVE.append(card4, card5, card6);

  const card7 = createCardTemplate();
  const card8 = createCardTemplate();
  const card9 = createCardTemplate();

  ITEM_RIGHT.append(card7, card8, card9);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      CAROUSEL.classList.remove("transition-left");
      const leftItem = ITEM_LEFT.innerHTML;
      ITEM_ACTIVE.innerHTML = leftItem;

      const card1 = createCardTemplate();
      const card2 = createCardTemplate();
      const card3 = createCardTemplate();

      ITEM_LEFT.innerHTML = "";
      ITEM_LEFT.append(card1, card2, card3);
    } else {
      CAROUSEL.classList.remove("transition-right");
      const rightItem = ITEM_RIGHT.innerHTML;
      ITEM_ACTIVE.innerHTML = rightItem;

      const card1 = createCardTemplate();
      const card2 = createCardTemplate();
      const card3 = createCardTemplate();

      ITEM_RIGHT.innerHTML = "";
      ITEM_RIGHT.append(card1, card2, card3);
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
  });
} else if (screen.width < 1280 && screen.width >= 768) {
  const moveLeftLaptop = () => {
    CAROUSEL.classList.add("transition-left-laptop");
    BTN_LEFT.removeEventListener("click", moveLeftLaptop);
    BTN_RIGHT.removeEventListener("click", moveRightLaptop);
  };
  const moveRightLaptop = () => {
    CAROUSEL.classList.add("transition-right-laptop");
    BTN_LEFT.removeEventListener("click", moveLeftLaptop);
    BTN_RIGHT.removeEventListener("click", moveRightLaptop);
  };
  BTN_LEFT.addEventListener("click", moveLeftLaptop);
  BTN_RIGHT.addEventListener("click", moveRightLaptop);
  ITEM_ACTIVE.innerHTML = "";
  ITEM_RIGHT.innerHTML = "";
  ITEM_LEFT.innerHTML = "";

  const card1 = createCardTemplate();
  const card2 = createCardTemplate();

  ITEM_LEFT.append(card1, card2);

  const card3 = createCardTemplate();
  const card4 = createCardTemplate();

  ITEM_ACTIVE.append(card3, card4);

  const card5 = createCardTemplate();
  const card6 = createCardTemplate();

  ITEM_RIGHT.append(card5, card6);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left-laptop") {
      CAROUSEL.classList.remove("transition-left-laptop");
      const leftItem = ITEM_LEFT.innerHTML;
      ITEM_ACTIVE.innerHTML = leftItem;

      const card1 = createCardTemplate();
      const card2 = createCardTemplate();

      ITEM_LEFT.innerHTML = "";
      ITEM_LEFT.append(card1, card2);
    } else {
      CAROUSEL.classList.remove("transition-right-laptop");
      const rightItem = ITEM_RIGHT.innerHTML;
      ITEM_ACTIVE.innerHTML = rightItem;

      const card1 = createCardTemplate();
      const card2 = createCardTemplate();

      ITEM_RIGHT.innerHTML = "";
      ITEM_RIGHT.append(card1, card2);
    }

    BTN_LEFT.addEventListener("click", moveLeftLaptop);
    BTN_RIGHT.addEventListener("click", moveRightLaptop);
  });
} else if (screen.width < 768) {
  const moveLeftTablet = () => {
    CAROUSEL.classList.add("transition-left-tablet");
    BTN_LEFT.removeEventListener("click", moveLeftTablet);
    BTN_RIGHT.removeEventListener("click", moveRightTablet);
  };
  const moveRightTablet = () => {
    CAROUSEL.classList.add("transition-right-tablet");
    BTN_LEFT.removeEventListener("click", moveLeftTablet);
    BTN_RIGHT.removeEventListener("click", moveRightTablet);
  };
  BTN_LEFT.addEventListener("click", moveLeftTablet);
  BTN_RIGHT.addEventListener("click", moveRightTablet);

  ITEM_ACTIVE.innerHTML = "";
  ITEM_RIGHT.innerHTML = "";
  ITEM_LEFT.innerHTML = "";

  const card1 = createCardTemplate();
  ITEM_LEFT.append(card1);
  const card2 = createCardTemplate();
  ITEM_ACTIVE.append(card2);
  const card3 = createCardTemplate();
  ITEM_RIGHT.append(card3);

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left-tablet") {
      CAROUSEL.classList.remove("transition-left-tablet");

      const leftItem = ITEM_LEFT.innerHTML;
      ITEM_ACTIVE.innerHTML = leftItem;

      const card1 = createCardTemplate();
      ITEM_LEFT.innerHTML = "";
      ITEM_LEFT.append(card1);
    } else {
      CAROUSEL.classList.remove("transition-right-tablet");
      const rightItem = ITEM_RIGHT.innerHTML;
      ITEM_ACTIVE.innerHTML = rightItem;

      const card1 = createCardTemplate();

      ITEM_RIGHT.innerHTML = "";
      ITEM_RIGHT.append(card1);
    }

    BTN_LEFT.addEventListener("click", moveLeftTablet);
    BTN_RIGHT.addEventListener("click", moveRightTablet);
  });
}

/* CAROUSEL */

/* POPUP */

const body = document.querySelector("body");
const popup = document.querySelector("#popup");
const popupBody = document.querySelector("#popup-body");
const closeBtn = document.querySelector("#btn-close");

CAROUSEL.addEventListener("click", (event)=> {
  if (event.target.closest(".card")) {
    const petName = event.target.closest(".card").dataset.pet;
    for (let i = 0; i < pets.length; i++) {
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
