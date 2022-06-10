//Collect all my elements here
const sketchAreaEl = document.querySelector(".sketch-area")
const colourEls = document.querySelectorAll(".colour")
const clearAllEl = document.getElementById("clear-all")
const eraserEl = document.getElementById("eraser")
const largeBtnEl = document.getElementById("large-box")
let boxSize = 100;

loadNewBox();

//load a new box
function loadNewBox(){
for (let index = 0; index < boxSize; index++) {
    createSketchBox();
}}

function createSketchBox(){
    const sketchBox = document.createElement("button");
    sketchBox.classList.add("sketch-box");
    sketchAreaEl.appendChild(sketchBox);
}
const sketchBoxEls = document.querySelectorAll(".sketch-box");

//colour selection

let currentColour = "black"

colourEls.forEach(colourEl => {
    colourEl.addEventListener("click", () => {
        currentColour = colourEl.id
        currentColour.toString
        colourEls.forEach(colourEl => {
            colourEl.classList.remove("active")
        })
        colourEl.classList.add("active")
        eraserEl.classList.remove("active")
    })
});

//drawing

//drag and draw function
let drag = false
sketchAreaEl.addEventListener("mousedown", () => {
    drag = true;
});
sketchAreaEl.addEventListener("mouseup", () => {
    drag = false;
});

sketchBoxEls.forEach(sketchBoxEl => {
    sketchBoxEl.addEventListener("mouseover", () => {
        if(drag == true){
        sketchBoxEl.style.backgroundColor = currentColour;
        }
    });
});

//click to draw
sketchBoxEls.forEach(sketchBoxEl => {
    sketchBoxEl.addEventListener("mousedown", () => {
        sketchBoxEl.style.backgroundColor = currentColour;
    });
});

//clear all
clearAllEl.addEventListener("click", () => {
    clearSketchArea();
});

function clearSketchArea(){
    sketchBoxEls.forEach(sketchBoxEl => {
        sketchBoxEl.style.backgroundColor = "#F9F9F9"
    })
}

//eraser
eraserEl.addEventListener("click", () => {
    currentColour = "#F9F9F9";
    eraserEl.classList.add("active")
    colourEls.forEach(colourEl => {
        colourEl.classList.remove("active")
    })
})

//box resizing

//on button press half box size and double box count 

console.log(boxSize);