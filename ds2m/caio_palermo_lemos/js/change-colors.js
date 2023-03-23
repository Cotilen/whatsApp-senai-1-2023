"use strict";

export const changeColors = function () {
  const changeColorIcon = document.getElementById(
    "profile-options__change-color"
  );
  const changeColorIconMobile = document.getElementById(
    "profile-options__change-color-mobile"
  );
  const handleClick = function () {
    const html = document.querySelector(":root");
    html.classList.toggle("white");
  };

  changeColorIcon.addEventListener("click", handleClick);
  changeColorIconMobile.addEventListener("click", handleClick);
};
