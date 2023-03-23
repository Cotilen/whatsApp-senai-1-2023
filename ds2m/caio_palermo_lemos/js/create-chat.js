"use strict";

export const createChat = function (contact) {
  const chat = document.createElement("div");
  chat.classList.add("chat");

  const chatImage = document.createElement("img");
  chatImage.classList.add("chat__image");
  chatImage.src = `./${contact.image}`;
  chatImage.alt = `${contact.name} Image`;

  const chatContent = document.createElement("div");
  chatContent.classList.add("chat__content");

  const chatName = document.createElement("span");
  chatName.classList.add("chat__name");
  chatName.textContent = contact.name;

  const chatText = document.createElement("p");
  chatText.classList.add("chat__text");
  chatText.textContent = contact.description;

  const chatTime = document.createElement("span");
  chatTime.classList.add("chat__time");
  // chatTime.textContent = contact.

  chatContent.append(chatName, chatText);

  chat.append(chatImage, chatContent);

  return chat;
};
