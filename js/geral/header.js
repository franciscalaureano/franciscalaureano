/////////////
// HEADER //
///////////

//nav bar
//work
let workNav = document.getElementById("work_link");
workNav.style.color = "#363333";

workNav.onmouseover = function () {
  workNav.style.color = "#c95d5d";
  workNav.style.transitionDuration = "0.8s";
};

workNav.onmouseleave = function () {
  workNav.style.color = "#363333";
  workNav.style.transitionDuration = "0.8s";
};

workNav.onmousedown = function () {
  workNav.style.color = "#c95d5d";
  aboutNav.style.color = "#363333";
  contactNav.style.color = "#363333";
};

//about
let aboutNav = document.getElementById("about_link");
aboutNav.style.color = "#363333";

aboutNav.onmouseover = function () {
  aboutNav.style.color = "#c95d5d";
  aboutNav.style.transitionDuration = "0.8s";
};

aboutNav.onmouseleave = function () {
  aboutNav.style.color = "#363333";
  aboutNav.style.transitionDuration = "0.8s";
};

//contact
let contactNav = document.getElementById("contact_link");
contactNav.style.color = "#363333";

contactNav.onmouseover = function () {
  contactNav.style.color = "#c95d5d";
  contactNav.style.transitionDuration = "0.8s";
};

contactNav.onmouseleave = function () {
  contactNav.style.color = "#363333";
  contactNav.style.transitionDuration = "0.8s";
};
