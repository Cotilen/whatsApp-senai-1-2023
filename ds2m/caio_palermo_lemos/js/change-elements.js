"use strict";

export const changeElements = function () {
  const chatsContainer = document.querySelector(".chats__chats-container");
  const chats = document.querySelector(".chats");
  const chatsFilter = document.querySelector(".chats__filter");
  const messagesReceiver = document.querySelector(".messages__receiver");
  const messagesConversationsContainer = document.querySelector(
    ".messages__conversations-container"
  );
  const messagesInteractions = document.querySelector(
    ".messages__interactions"
  );
  const messagesBackground = document.querySelector(
    ".messages__background-default"
  );

  const returnIcon = document.querySelector(".return");

  messagesReceiver.classList.add("none");
  messagesConversationsContainer.classList.add("none");
  messagesInteractions.classList.add("none");

  const handleClick = function () {
    if (window.matchMedia("(max-width: 980px)").matches) {
      chats.classList.add("none");
      messagesReceiver.classList.add("flex");
      messagesConversationsContainer.classList.add("flex-messages");
      messagesInteractions.classList.add("flex");
      returnIcon.classList.add("block");
    } else {
      messagesReceiver.classList.add("flex");
      messagesConversationsContainer.classList.add("flex-messages");
      messagesInteractions.classList.add("flex");
      messagesBackground.classList.add("none");
    }
  };

  if (window.matchMedia("(min-width: 980px)").matches) {
    chatsContainer.classList.remove("none");
    chats.classList.remove("none");
    chatsFilter.classList.remove("none");
  }

  chatsContainer.addEventListener("click", handleClick);
};
