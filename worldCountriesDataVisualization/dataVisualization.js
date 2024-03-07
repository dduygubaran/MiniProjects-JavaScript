const container = document.createElement("container");

let header = document.querySelector("header");
const wrapper = document.getElementsByClassName("wrapper");

let p1 = document.querySelector(".subtitle");
p1.innerHTML = `Currently, we have <strong> ${countries_data.length} </strong> countries`;
p1.style.textAlign = "center";
//console.log(countries_data)

const url = "data/countries_data.js";

// 10 Most Populated Countries in The World
function countryPopulation() {
  let populationArr = [];
  for (let item of countries_data) {
    populationArr.push(item.population);
  }

  const btnPopulation = document.querySelector(".population");
  btnPopulation.addEventListener("click", () => {
    btnPopulation.style.borderColor = "#2684ff"
    btnPopulation.style.borderStyle = "groove"
    let populationArrTen = [];
    let sorting = populationArr.sort(function (a, b) {
      return b - a;
    });
    for (let i = 0; i < 10; i++) {
      populationArrTen.push(sorting[i]);

      var data = [
        (graphs = {
          title: "10 Most Populated Countries In The World",
          y: ["Japan ", "Russia ", "Bangladesh ", "Nigeria ", "Pakistan ", "Brazil ", "Indonesia ", "USA ", "India ", "China "],
          x: [populationArrTen[9], populationArrTen[8], populationArrTen[7], populationArrTen[6], populationArrTen[6], populationArrTen[4], populationArrTen[3], populationArrTen[2], populationArrTen[1],populationArrTen[0],],
          marker: {
            color: ["#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e"],
          },
          type: "bar",
          orientation: "h",
          paper_bgcolor: "#e9edf0",
          plot_bgcolor: "#e9edf0",
        }),
      ];
    }
    Plotly.newPlot("stat", data, graphs);
    console.log(populationArrTen);
  });
}

// 10 Most Spoken Languages in the World
function countryLanguages() {
  let languagesArr = [];
  for (let item of countries_data) {
    let y = item.languages;
    for (let item2 of y) {
      languagesArr.push(item2);
    }
  }

  let bos = [];
  for (let i = 0; i < languagesArr.length; i++) {
    for (let j = i + 1; j < languagesArr.length; j++) {
      if (languagesArr[i] == languagesArr[j]) {
        bos.push(languagesArr[i]);
        languagesArr.splice(j, 1);

        j--;
      }
    }
  }

  const btnLanguages = document.querySelector(".languages");
  btnLanguages.addEventListener("click", () => {
    btnLanguages.style.borderColor = "red"
    btnLanguages.style.borderStyle = "groove"
    let languagesArrTen = [];
    let sorting1 = languagesArr.sort(function (a, b) {
      return b - a;
    });

    for (let i = 0; i < 10; i++) {
      languagesArrTen.push(sorting1[i]);

      var data = [
        (graphs = {
          title: "10 Most Spoken Languages in the World",
          x: ["1 ", "1 ", "2 ", "2 ", "3 ", "3", "3 ", "10 ", "25 ", "91 "],
          y: [languagesArrTen[0], languagesArrTen[8], languagesArrTen[7], languagesArrTen[1], languagesArrTen[4], languagesArrTen[3], languagesArrTen[2], languagesArrTen[9], languagesArrTen[5], languagesArrTen[6]],
          marker: {
            color: ["#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e", "#ffa82e"],
          },
          type: "bar",
          orientation: "h",
          paper_bgcolor: "#e9edf0",
          plot_bgcolor: "#e9edf0",
        }),
      ];
    }
    Plotly.newPlot("stat", data, graphs);
    console.log(languagesArrTen);
  });
}

countryLanguages();
countryPopulation();
header.append(p1);
wrapper.append(header);
document.body.appendChild(container);
