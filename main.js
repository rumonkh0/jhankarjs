console.log("hello there");

const cards = document.querySelectorAll(".sectr");
const results = document.getElementById("results");

//random color genetor
function enter(elem) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  elem.style.backgroundColor = "#" + randomColor;
}

function out(elem) {
  elem.style.backgroundColor = "#2a303c";
}

cards.forEach((elem) =>
  elem.addEventListener("mouseenter", function () {
    enter(elem);
  })
);

cards.forEach((elem) =>
  elem.addEventListener("mouseleave", function () {
    out(elem);
  })
);

var count = 1;

//reusable function for creating results div
function divPackage(name, ans) {
  const result = document.createElement("div");
  result.classList.add("result");
  const title = document.createElement("p");
  const area = document.createElement("p");
  const button = document.createElement("div");
  title.innerHTML = count + `.` + name;
  area.innerHTML = ans.toFixed(2) + `cm²`;
  button.innerHTML = "convert to meter";
  button.value = 0;
  button.addEventListener("click", function () {
    toggle(area, ans, button);
  });
  result.appendChild(title);
  result.appendChild(area);
  result.appendChild(button);
  results.appendChild(result);
  count++;
}

//validation of input
function validation(a, b) {
  if (a <= 0 || b <= 0 || isNaN(a) == true || isNaN(b) == true) {
    alert("please insert a valid input");
    return 0;
  } else {
    return 1;
  }
}

//triangle area function
function halfmulti(e, name) {
  e.preventDefault();
  var a = e.target["a"].value,
    b = e.target["b"].value;
  if (validation(a, b)) {
    var area = 0.5 * a * b;
    divPackage(name, area);
  }
}

//pie*a*b function
function pimulti(e, name) {
  e.preventDefault();
  var a = e.target["a"].value,
    b = e.target["b"].value;
  if (validation(a, b)) {
    var area = 3.1416 * a * b;
    divPackage(name, area);
  }
}

//rectangle area function
function multi(e, name) {
  e.preventDefault();
  var a = e.target["a"].value,
    b = e.target["b"].value;
  if (validation(a, b)) {
    var area = a * b;
    divPackage(name, area);
  }
}

function toggle(area, cm, button) {
  if (button.value % 2 == 1) {
    button.value = 0;
    metertocm(area, cm, button);
  } else {
    button.value = 1;
    cmtometer(area, cm, button);
  }
}

//convert to meter
function cmtometer(area, cm, button) {
  console.log("conterting and inserting centemeter to meter");
  var meter = cm * 0.0001;
  area.innerHTML = meter.toFixed(2) + `m²`;
  button.innerHTML = "convert to cm";
}

//convert to meter
function metertocm(area, m, button) {
  console.log("inserting centimeter value");
  area.innerHTML = m.toFixed(2) + `cm²`;
  button.innerHTML = "convert to meter";
}
