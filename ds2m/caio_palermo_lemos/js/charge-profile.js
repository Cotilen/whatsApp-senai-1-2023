"use strict";

import { createMessagesReceiver } from "./create-messages-receiver.js";

export const chargeProfile = function (contatos) {
  const handleClick = function (event) {
    let text = event.currentTarget.innerText.split(`\n`)[0];

    const messagesReceiver = document.querySelector(".messages__receiver");
    const profile = contatos.map(createMessagesReceiver);

    const indice = contatos.findIndex((contato) => {
      return contato.name == text;
    });

    messagesReceiver.replaceChildren(profile[indice]);
  };

  const chats = document.querySelectorAll(".chat");
  chats.forEach((chat) => {
    chat.addEventListener("click", handleClick);
  });
};
