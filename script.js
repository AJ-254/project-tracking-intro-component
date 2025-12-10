const hambuger = document.querySelector(`.mobile`);
const openBurger = document.querySelector(`.openburger`);
const closeBurger = document.querySelector(`.closeburger`);
const modal = document.querySelector(`.modal`);
hambuger.addEventListener("click", () => {
  openBurger.classList.toggle("openburger");
  closeBurger.classList.toggle("closeburger");
  modal.classList.toggle("hidden");
});
