console.log("hello");
let form = document.getElementById("addG");

form.addEventListener("submit", addCell);



function addCell(ev){
    ev.preventDefault();

    let container = document.getElementById("container");
    
    let title = document.getElementById("p-name");
    let description = document.getElementById("p-text");
    let myImage = document.getElementById("myImage");

    let mainDiv = document.createElement("div");
    mainDiv.className = "col";

    let h3 = document.createElement("h3");
    h3.textContent = title.value;
    

    let textDiv = document.createElement("div");
    textDiv.class = "location";
    textDiv.innerText = description.value;

    let img = document.createElement("img");
    img.setAttribute("src", myImage.value);

    mainDiv.appendChild(h3);
    mainDiv.appendChild(img);
    mainDiv.appendChild(textDiv);

    
    container.appendChild(mainDiv);
}