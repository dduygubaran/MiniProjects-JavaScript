let div = document.createElement("div");
div.classList.add("definition");

let marquee = document.getElementById("marquee");
const words = ["Engineer", "Programmer", "Motivator", "Responsible"];

let i = 0;
setInterval(() => {
  if (i == words.length) {
    i = 0;
  } else {
    marquee.textContent = words[i];
    i++;
  }
}, 1000);

let div2 = document.createElement("div");
div2.classList.add("paragraph-outer");

let p = document.createElement("p");
p.textContent = `I am Duygu Baran. I'm 28 years old. I am from Ankara and I live in Ankara with my family. 
I have a cat and her name is Alice. I graduated from Eskişehir Technical University department of Electrical and Electronics. I work as a Software Engineer. 
I am a responsible, harmonious and cheerful person. I play guitar as an amateur. I like to play table tennis.`;

let allCards = document.createElement("div");
allCards.classList.add("all-cards");

let card1 = document.createElement("div");
card1.classList.add("card-1");
card1.textContent = "30 DAYS OF JAVASCRIPT";

let card2 = document.createElement("div");
card2.classList.add("card-2");
card2.textContent = "30 DAYS OF PHYTON";

let card3 = document.createElement("div");
card3.classList.add("card-3");
card3.textContent = "30 DAYS OF JAVA";

card1.addEventListener("mouseover", () => {
  card1.style.backgroundColor = "#ffefbf";
  card1.style.height = "230px";
  card1.style.width = "380px";
});
card1.addEventListener("mouseout", () => {
  card1.style.backgroundColor = "#eeebf0";
  card1.style.height = "200px";
  card1.style.width = "350px";
});

card2.addEventListener("mouseover", () => {
  card2.style.backgroundColor = "#ffefbf";
  card2.style.height = "230px";
  card2.style.width = "380px";
});
card2.addEventListener("mouseout", () => {
  card2.style.backgroundColor = "#eeebf0";
  card2.style.height = "200px";
  card2.style.width = "350px";
});

card3.addEventListener("mouseover", () => {
  card3.style.backgroundColor = "#ffefbf";
  card3.style.height = "230px";
  card3.style.width = "380px";
});
card3.addEventListener("mouseout", () => {
  card3.style.backgroundColor = "#eeebf0";
  card3.style.height = "200px";
  card3.style.width = "350px";
});

let div3 = document.createElement("div");
let p1 = document.createElement("p");
p1.classList.add("prgraph-tech");

const technologies = [
  "JAVASCRIPT",
  "HTML",
  "JAVA",
  "PHYTON",
  "REACT",
  "MONGODB",
  "NODE",
];

let type;
let j = 0;
setInterval(() => {
  if (j == technologies.length) {
    j = 0;
  } else {
    p1.innerHTML = `The technologies I teach <span> <strong id = "technologies-type"> ${technologies[j]} </strong> </span> `;
    type = document.getElementById("technologies-type");
    type.style.fontSize = "50px";
    type.style.marginLeft = "5px";
    j++;
  }
}, 1000);

function colorSelection() {
  let color1 = Math.ceil(Math.random() * 255);
  let color2 = Math.ceil(Math.random() * 255);
  let color3 = Math.ceil(Math.random() * 255);
  let color = `rgb(${color1}, ${color2}, ${color3})`;
  type.style.color = color;
}
setInterval(colorSelection, 1000);

div3.appendChild(p1);
allCards.append(card1, card2, card3);
div2.appendChild(p);
div.appendChild(marquee);
document.body.append(div, div2, allCards, div3);
