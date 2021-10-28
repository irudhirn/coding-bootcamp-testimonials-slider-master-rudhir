const prev = document.getElementById("prev");
const next = document.getElementById("next");

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

const imgTanya = document.querySelector(".images__image--tanya");
const imgJohn = document.querySelector(".images__image--john");

const txtTanya = document.querySelector(".texts__text--tanya");
const txtJohn = document.querySelector(".texts__text--john");

prev.addEventListener("click", () => {
  imgTanya.classList.add("active");
  imgJohn.classList.remove("active");

  txtTanya.classList.add("active");
  txtJohn.classList.remove("active");

  btnPrev.setAttribute("disabled", true);
  btnNext.setAttribute("disabled", false);
});

next.addEventListener("click", () => {
  imgTanya.classList.remove("active");
  imgJohn.classList.add("active");

  txtTanya.classList.remove("active");
  txtJohn.classList.add("active");

  btnPrev.setAttribute("disabled", false);
  btnNext.setAttribute("disabled", true);
});
