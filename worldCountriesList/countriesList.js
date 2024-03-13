let h2 = document.querySelector("h2");
h2.innerHTML = `Total Number of Countries : <strong> ${countries.length} </strong>`;

let input = document.createElement("input");
input.placeholder = "Search Country...";

const countriesLow = countries.map((countryName) => {
  return countryName.toLowerCase();
});
console.log(countriesLow);

function startWord() {
  input.addEventListener("keyup", () => {
    inputValue = input.value;
    console.log(inputValue);
    let startWord = countriesLow.filter((country) => {
      if (inputValue != "") {
        return country[0].includes(inputValue);
      }
    });
    console.log(startWord);

    let yellowArea = document.querySelector(".yellow-area");
    for (let i = 0; i < startWord.length; i++) {
      let div = document.createElement("div");
      div.classList.add("front-start-word");
      div.textContent = startWord[i];
      yellowArea.appendChild(div);
    }
  });
}

function searchAnyWord() {
  input.addEventListener("keyup", () => {
    inputValue = input.value;
    console.log(inputValue);
    let anyWord = countriesLow.filter((country) => {
      if (inputValue != " ") {
        return country.includes(inputValue);
      }
      return -1;
    });

    console.log(anyWord);

    let yellowArea = document.querySelector(".yellow-area");
    for (let i = 0; i < anyWord.length; i++) {
       if (anyWord != " ") {
      let div = document.createElement("div");
      div.classList.add("front-start-word");
      div.textContent = anyWord[i];
      yellowArea.appendChild(div);
       }
    }
  });
}

document.body.append(input);
