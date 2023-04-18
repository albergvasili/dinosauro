// DINOSAURO
let change = true;
function random() {
  return Math.floor(Math.random()*360);
}

function changeColor(elemento) {
  elemento.setAttribute("stroke", `hsl(${random()} 50% 50%)`);
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
let buildings = document.getElementById("buildings"); 
let building = document.getElementById("building");

function create(distance) {
  let build = building.cloneNode(true);
  build.removeAttribute("id");
  build.setAttribute("transform", `translate(-${distance})`);
  buildings.appendChild(build);
};

create(500)

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
