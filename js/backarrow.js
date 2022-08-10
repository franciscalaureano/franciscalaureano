/* RETROCEDER A PARTIR DA SETA */
var backBtn = document.querySelector(".back_arrow");
backBtn.addEventListener("click", () => {
  window.history.back();
});
