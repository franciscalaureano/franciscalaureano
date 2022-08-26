//////////////
// About Me //
/////////////

//button contact me

let buttonAboutContact = document.getElementById("chat_button");

buttonAboutContact.style.backgroundColor = "#C95D5D";
buttonAboutContact.style.color = "#eae8e2";

buttonAboutContact.onmouseover = function () {
  buttonAboutContact.style.backgroundColor = "#7BAAF8";
  buttonAboutContact.style.transitionDuration = "0.8s";
};

buttonAboutContact.onmouseleave = function () {
  buttonAboutContact.style.backgroundColor = "#C95D5D";
  buttonAboutContact.style.transitionDuration = "0.8s";
};
