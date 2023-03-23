"use strict";

export const createMessagesReceiver = function (receiver) {
  const receiverProfile = document.createElement("div");
  receiverProfile.classList.add("receiver__profile");

  const receiverOptions = document.createElement("div");
  receiverOptions.classList.add("receiver__options");

  const optionsSearch = document.createElement("i");
  optionsSearch.classList.add("fa-solid");
  optionsSearch.classList.add("fa-magnifying-glass");

  const moreOptions = document.createElement("i");
  moreOptions.classList.add("fas");
  moreOptions.classList.add("fa-ellipsis-v");

  receiverOptions.append(optionsSearch, moreOptions);

  const profileImage = document.createElement("img");
  profileImage.classList.add("profile__image");
  profileImage.src = `./${receiver.image}`;

  const profileName = document.createElement("p");
  profileName.classList.add("profile__name");
  profileName.textContent = receiver.name;

  receiverProfile.append(profileImage, profileName, receiverOptions);

  return receiverProfile;
};
