addEventListener("DOMContentLoaded", () => {
  const btn__bar = document.querySelector(".btn__bar");
  if (btn__bar) {
    btn__bar.addEventListener("click", () => {
      const nav__ul = document.querySelector(".nav__ul");
      nav__ul.classList.toggle("show");
    });
  }
});
