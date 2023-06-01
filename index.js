

container_sketchboxes = document.getElementById("containerdiv")
let isMouseOver = false;
let isMouseDown = false;
let chosencolor = "white"

/*
document.addEventListener("mousemove", (event) => {
    console.log(event.target)
    if(isMouseOver && event.target.classList.contains === "grid.element") {
        event.target.style.backgroundColor = "blue"
    }
})*/

document.addEventListener("mouseup", (event) => {
    isMouseDown = false
})

document.addEventListener("mousedown", (event) => {
    isMouseDown = true
})

function createGrid(creationValue) {

    //CREATE DIV AND APPEND GRID ELEMENTS
    newdiv = document.createElement("div")
    console.log("Creation value is: "+creationValue)
    
    creationValue = parseInt(creationValue)
    console.log(typeof creationValue)
    for (let i = 0; i < (creationValue * creationValue); i++) {
        const grid = document.createElement('div');
        let a = creationValue + creationValue;
        const boxSize = 1000 / a; // creates the dynamic squeres
        grid.classList.add("grid-element");
        grid.style.width = boxSize + 'px';
        grid.style.height = boxSize + 'px';


        grid.addEventListener("mouseover", () => {
            isMouseOver = true
            if(isMouseDown) {
                grid.style.backgroundColor = chosencolor
                //console.log("toimii")
            }
            
        })

        grid.addEventListener("mousedown", () => {
            isMouseDown= true
            if(isMouseDown) {
                grid.style.backgroundColor = chosencolor
                //console.log("toimii")
            }
            
        })

        container_sketchboxes.style.gridTemplateColumns = ("repeat("+creationValue+", 1fr");


        container_sketchboxes.appendChild(grid);
    }
}

createGrid(16)



// EVENT LISTENER FOR COLOR BUTTONS

document.getElementById("buttonBlack").addEventListener("click", () => {
    chosencolor = "black"
})

document.getElementById("buttonWhite").addEventListener("click", () => {
    chosencolor = "white"
})

document.getElementById("buttonBlue").addEventListener("click", () => {
    chosencolor = "blue"
})


// DROPDOWN MENU
window.onclick = function(event) {
    if (!event.target.matches('.dropdownBtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}


document.getElementById("dropdownBtn").addEventListener("click", () => {
    document.getElementById("dropdown").classList.toggle("show");
    //console.log(document.getElementById("dropdown").classList)
    //console.log("NAPPI TOIMIIs")
})


button16 = document.getElementById("choice-16")
button16.addEventListener("click", () => {
    children = container_sketchboxes.children
    console.log(children.length)
    for(let i = children.length-1; i>=0; i--) {
        let child = children[i]
        container_sketchboxes.removeChild(child)
        //sconsole.log(i)
    }
    console.log(button16.value)
    createGrid(button16.value)
})

button32 = document.getElementById("choice-32")
button32.addEventListener("click", () => {
    children = container_sketchboxes.children
    console.log(children.length)
    for(let i = children.length-1; i>=0; i--) {
        let child = children[i]
        container_sketchboxes.removeChild(child)
        //console.log(i)
    }
    console.log(button32.value)
    createGrid(button32.value)
})

button64 = document.getElementById("choice-64")
button64.addEventListener("click", () => {
    children = container_sketchboxes.children
    console.log(children.length)
    for(let i = children.length-1; i>=0; i--) {
        let child = children[i]
        container_sketchboxes.removeChild(child)
        //console.log(i)
    }
    console.log(button64.value)
    createGrid(button64.value)
})