/////////////
// FOOTER //
///////////

//button filter design
let buttonFooterSubmit = document.getElementById("form_submit");

buttonFooterSubmit.style.backgroundColor = "#eae8e2";
buttonFooterSubmit.style.color = "#c95d5d";

buttonFooterSubmit.onmouseover = function () {
  buttonFooterSubmit.style.backgroundColor = "#c95d5d";
  buttonFooterSubmit.style.color = "#eae8e2";
  buttonFooterSubmit.style.transitionDuration = "0.8s";
};

buttonFooterSubmit.onmouseleave = function () {
  buttonFooterSubmit.style.backgroundColor = "#eae8e2";
  buttonFooterSubmit.style.color = "#c95d5d";

  buttonFooterSubmit.style.transitionDuration = "0.8s";
};
