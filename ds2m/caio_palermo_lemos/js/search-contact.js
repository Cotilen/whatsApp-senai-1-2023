"use strict";

const filter = document.querySelector(".filter__input");
const targets = document.querySelectorAll(".chat");

const searchContact = function () {
  const handleKey = function (event) {
    const value = event.target.value;
    if (value.trim().length) {
      const regex = new RegExp(`^(${value})`, "gi");
      targets.forEach((target) => {
        const targetValue = target.innerText.split(`\n`)[0];
        if (regex.test(targetValue)) {
        } else {
          target.classList.add("none");
        }
      });
    } else {
      targets.forEach((target) => target.classList.remove("none"));
    }
  };

  filter.addEventListener("keyup", handleKey);
};

searchContact();
