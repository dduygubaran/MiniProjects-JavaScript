const PLANET = {
    MERCURY:{
        gravity:3.7,
        image:"mercury.png"
    },
    VENUS:{
        gravity:8.87,
        image:"venus.png"
    },
    EARTH:{
        gravity:9.8,
        image:"earth.png"
    },
    MOON:{
        gravity: 1.62,
        image:"moon.png"
    },
    MARS:{
        gravity:3.71,
        image:"mars.png"
    },
    JUPITER:{
        gravity:24.79,
        image:"jupiter.png"
    },
    SATURN:{
        gravity:10.44,
        image:"saturn.png"
    },
    URANUS:{
        gravity:8.87,
        image:"uranus.png"
    },
    NEPTUNE:{
        gravity:11.15,
        image:"neptune.png"
    },
    PLUTO: {
        gravity: 0.62,
        image: "pluto.png"
    }
}

    document.body.style.backgroundImage = "url('../solarSystem/images/galaxy.gif')";

    let header = document.querySelector("header")
        header.style.textAlign = "center"

    let h1 = document.querySelector('h1')
        h1.setAttribute('style', 'color: #fff;')
        h1.style.fontFamily = "Courier New, Courier, monospace"
        h1.style.textShadow="2px 2px 5px #c7c3bf";
        h1.style.marginBottom = "100px"
        h1.style.marginTop = "50px"

    let inputArea = document.getElementById("mass")
        inputArea.style.height = "31px"
        inputArea.style.borderRadius = "3px"

    let selectboxArea = document.querySelector("select")
        selectboxArea.style.width = "150px"
        selectboxArea.style.height = "36px"
        selectboxArea.style.borderRadius = "3px"
        selectboxArea.style.color = "#878582"

    let btn = document.querySelector("button")
        btn.style.height = "36px"
        btn.style.borderRadius = "3px"
        btn.style.backgroundColor = "#787673"
        btn.style.color = "#fff"

    inputArea.addEventListener('keyup', () => {
        //console.log(e.target.value)
        console.log(inputArea.value)
        console.log(typeof Number(inputArea.value))
    })

    selectboxArea.addEventListener('click', () => {
        console.log(selectboxArea.value)
    })

    const container = document.querySelector(".flex-container");
    container.style.textAlign = "center"
    container.style.marginTop = "50px"

    function calculateWeight() {
        container.innerHTML = "";
    
        if(inputArea.value == '' || selectboxArea.value== 'Select Planet') {
            containerUI2();
        } else {
                let weight = (parseInt(inputArea.value) * PLANET[selectboxArea.value].gravity).toFixed(2);
                console.log(weight)
                let image = PLANET[selectboxArea.value].image;
                console.log(image)
        
                containerUI(image,weight);
        }
    }

    function containerUI (img,text) {
        const div = document.createElement('div')
        div.setAttribute('style', 'width:1000px; margin:auto ')
        div.style.backgroundColor = 'rgba(255,255,255,0.1)'

        let image = document.createElement("img");
        image.src = `../solarSystem/images/${img}`;
        image.style.marginTop = "50px"
    
        let h3 = document.createElement("h3");
        h3.textContent = `THE WEIGHT OF THE OBJECT ON ${selectboxArea.value} ${text}`;
        h3.style.color = "#12bcff"

        div.appendChild(image);
        div.appendChild(h3);
        container.append(div)

    }

    function containerUI2 () {
        const div2 = document.createElement('div')
        div2.setAttribute('style', 'width:600px; margin:auto ')
        div2.style.backgroundColor = '#fff'
        div2.style.opacity= "0.3"
    
        let h2 = document.createElement("h2");
        h2.textContent = "Mass or type of planet is needed!";
        h2.style.color = "#ff0011"

        div2.appendChild(h2); 
        container.append(div2)
     
    }
