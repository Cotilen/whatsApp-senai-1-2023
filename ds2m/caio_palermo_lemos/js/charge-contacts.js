"use strict";

import { createChat } from "./create-chat.js";

export const chargeContacts = function (contatos) {
  const chatsContainer = document.querySelector(".chats__chats-container");
  const chats = contatos.map(createChat);

  chatsContainer.replaceChildren(...chats);
};
