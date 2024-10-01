// Selecting by ID
document.getElementById("firstPara").innerHTML += '<span class="tan"> This is the new tan text</span>';

// Selecting by tag name
let images = document.getElementsByTagName("img");

for (let image of images) {
    image.width = "250";
}

// Selecting by class name
let medBlueSpans = document.getElementsByClassName("med-blue");
let lightBlueSpans = document.getElementsByClassName("light-blue");

for (let e of medBlueSpans) {
    e.style.color = "#3c5e73";
}

for (let e of lightBlueSpans) {
    e.style.color = "#7c9ea6";
}

// Selecting by CSS selector
let icons = document.querySelectorAll("#svgs svg");
let colors = ["#283040", "#3C5E73", "#222", "#7C9EA6", "#eaeaea"];

icons.forEach(function(icon, index) {
    icon.style.stroke = colors[index];
});

// Selecting by CSS (first that matches)
document.querySelector("#query .bold").style.color = "#7c9ea6";

// Changing DOM node content
let listElements = document.querySelectorAll(".content_list li");

listElements[0].textContent = "this is new list item text";
listElements[2].innerHTML += "<strong> Ryan Pallas</strong>";

// Removing attribute
document.querySelector("#remove a").removeAttribute("hidden");