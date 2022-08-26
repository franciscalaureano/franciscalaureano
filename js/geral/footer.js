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

//social media photos
//instagram
let instagramFooter = document.getElementById("instagram_footer");
instagramFooter.src = "img/footer/instagram2.png";

instagramFooter.onmouseover = function () {
  instagramFooter.src = "img/footer/instagram.png";
  instagramFooter.style.transitionDuration = "0.8s";
};

instagramFooter.onmouseleave = function () {
  instagramFooter.src = "img/footer/instagram2.png";
  instagramFooter.style.transitionDuration = "0.8s";
};

//behance
let behanceFooter = document.getElementById("behance_footer");
behanceFooter.src = "img/footer/behance2.png";

behanceFooter.onmouseover = function () {
  behanceFooter.src = "img/footer/behance.png";
  behanceFooter.style.transitionDuration = "0.8s";
};

behanceFooter.onmouseleave = function () {
  behanceFooter.src = "img/footer/behance2.png";
  behanceFooter.style.transitionDuration = "0.8s";
};

//linkedin
let linkedinFooter = document.getElementById("linkedin_footer");
linkedinFooter.src = "img/footer/linkedin2.png";

linkedinFooter.onmouseover = function () {
  linkedinFooter.src = "img/footer/linkedin.png";
  linkedinFooter.style.transitionDuration = "0.8s";
};

linkedinFooter.onmouseleave = function () {
  linkedinFooter.src = "img/footer/linkedin2.png";
  linkedinFooter.style.transitionDuration = "0.8s";
};
