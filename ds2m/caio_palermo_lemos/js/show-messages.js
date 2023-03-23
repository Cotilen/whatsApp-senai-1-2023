"use strict";

import { fazerLoop } from "./create-messages.js";

export const showMessages = function (contatos) {
  const handleClick = function (event) {
    const messagesConversationsContainer = document.querySelector(
      ".messages__conversations-container"
    );
    let text = event.currentTarget.innerText.split(`\n`)[0];

    let indice = 0;
    indice = contatos.findIndex((contato) => {
      return contato.name == text;
    });

    messagesConversationsContainer.innerHTML = "";

    fazerLoop(indice);
  };

  const chats = document.querySelectorAll(".chat");
  chats.forEach((chat) => {
    chat.addEventListener("click", handleClick);
  });
};
