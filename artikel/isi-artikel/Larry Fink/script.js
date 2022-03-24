const larryFink = document.querySelector(".larry-fink");
const jusufHamka = document.querySelector(".jusuf-hamka");

const pindahLarryFink = document.querySelector(".pindah-larry-fink");
const pindahJusufHamka = document.querySelector(".pindah-jusuf-hamka");

pindahJusufHamka.addEventListener("click", function () {
  larryFink.classList.add("active");
  jusufHamka.classList.remove("active");
});

pindahLarryFink.addEventListener("click", function () {
  jusufHamka.classList.add("active");
  larryFink.classList.remove("active");
});
