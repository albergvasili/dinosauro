// DINOSAURO
let change = true;
function random(max, min=0) {
  return Math.floor(Math.random()* (max - min) + min);
}

function changeColor(elemento) {
  elemento.setAttribute("stroke", `hsl(${random(360)} 50% 50%)`);
};

let eyes = document.getElementById("ojos");
	
function infiniteChange() {
	setTimeout(() => {
	  changeColor(eyes);
    infiniteChange();
	}, "1000");
};

infiniteChange();


let blink = true;
function closeEye() {
  let ojoIz = document.getElementById("ojo-iz");
  let ojoCer = document.getElementById("ojo-cerrado");
  if (blink) {
    ojoIz.classList.add("desaparecer");
    ojoCer.classList.remove("desaparecer");
    blink = !blink;
  } else {
    ojoIz.classList.remove("desaparecer");
    ojoCer.classList.add("desaparecer");
    blink = !blink;
  };
};

function infiniteBlink() {
  setTimeout(() => {
    closeEye();
    infiniteBlink();
  }, "500");
};

infiniteBlink();

//BACKGROUND

function multiplier(elementId, amountOfElements, baseX, xFrequency) {
  let element = document.getElementById(elementId);
  let newBaseX = baseX;
  for (let y = 0; y <= amountOfElements; y++) {
      let clone = element.cloneNode(true);
      clone.removeAttribute("id");
      clone.setAttribute("transform", `translate(${newBaseX})`);
      element.parentElement.appendChild(clone);
      newBaseX += xFrequency;
  };
};

multiplier("building", 10, -200, random(-80, min=-300));
multiplier("lamp", 20, -145, -150);

//REFERENCE POINT
let svg = document.querySelector("svg");
let point = document.getElementById("point");

function drawPoint(event) {
  console.log("x", event.offsetX, "y", event.offsetY);
  point.setAttribute("cx", event.offsetX);
  point.setAttribute("cy", event.offsetY);
}

svg.addEventListener("click", drawPoint);

//TREES
let strands = document.getElementById("strands");
let leaves = document.getElementById("leaves");
let results = document.getElementById("results");
let form = document.getElementById("wires");
const newText = () => {
  return document.createElement("p");
};

function handleSubmit(event) {
  event.preventDefault();
  let confirmNumber = newText();
  confirmNumber.innerHTML = `You have ${strands.value} strands and ${leaves.value} leaves.`;
  results.appendChild(confirmNumber);
      
  let numberOfTwigs = newText();
  let computeTwigs = strands.value // leaves.value;
  numberOfTwigs.innerHTML = `You can make ${strands.value / leaves.value} twigs`;
  results.appendChild(numberOfTwigs);
};
    
form.addEventListener('submit', handleSubmit);
