"use strict";

import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js";
import { convertTZ } from "./convert-timezone.js";

export const fazerLoop = function (indice) {
  for (let i = 0; contatos[indice].messages.length > i; i++) {
    const createMessages = function (message) {
      message = contatos[indice].messages[i];

      let messagesConversations = document.createElement("div");
      messagesConversations.classList.add("messages__conversations");

      let messageSenderContainer = document.createElement("div");
      messageSenderContainer.classList.add("message-sender-container");

      let messageSender = document.createElement("div");
      messageSender.classList.add("message__sender");
      messageSender.classList.add("tri-right");
      messageSender.classList.add("left-top");

      let messageReceiver = document.createElement("div");
      messageReceiver.classList.add("message__receiver");
      messageReceiver.classList.add("tri-right");
      messageReceiver.classList.add("right-top");

      let messageContent = document.createElement("p");
      messageContent.classList.add("message__content");
      messageContent.textContent = message.content;

      let messageTime = document.createElement("span");
      messageTime.classList.add("message__time");

      let messageReceiverContainer = document.createElement("div");
      messageReceiverContainer.classList.add("message-receiver-container");

      if (message.sender == "me") {
        if (message.hasOwnProperty("timestamp")) {
          const dataConvertida = convertTZ(
            message.timestamp,
            "America/Sao_Paulo"
          );
          let time = {
            time: (message.timestamp = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`),
          };

          delete message.timestamp;
          Object.assign(message, time);

          if (
            message.time.split(":")[0].length < 2 &&
            message.time.split(":")[1].length < 2
          ) {
            message.time = `0${dataConvertida.getHours()}:0${dataConvertida.getMinutes()}`;
          }
          if (message.time.split(":")[1].length < 2) {
            message.time = `${dataConvertida.getHours()}:0${dataConvertida.getMinutes()}`;
          }
          if (message.time.split(":")[0].length < 2) {
            message.time = `0${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;
          }

          messageTime.textContent = message.time;
        }
        if (message.hasOwnProperty("time")) {
          messageTime.textContent = message.time;
        }

        messageContent.classList.add("message__content");
        messageContent.textContent = message.content;

        messageTime.classList.add("message__time");

        messageSender.replaceChildren(messageContent, messageTime);

        messageReceiverContainer.classList.add("none");
      } else {
        if (message.hasOwnProperty("timestamp")) {
          const dataConvertida = convertTZ(
            message.timestamp,
            "America/Sao_Paulo"
          );
          let time = {
            time: (message.timestamp = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`),
          };

          delete message.timestamp;
          Object.assign(message, time);

          if (
            message.time.split(":")[0].length < 2 &&
            message.time.split(":")[1].length < 2
          ) {
            message.time = `0${dataConvertida.getHours()}:0${dataConvertida.getMinutes()}`;
          }
          if (message.time.split(":")[1].length < 2) {
            message.time = `${dataConvertida.getHours()}:0${dataConvertida.getMinutes()}`;
          }
          if (message.time.split(":")[0].length < 2) {
            message.time = `0${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;
          }

          messageTime.textContent = message.time;
        }
        if (message.hasOwnProperty("time")) {
          messageTime.textContent = message.time;
        }

        messageContent.classList.add("message__content");
        messageContent.textContent = message.content;

        messageTime.classList.add("message__time");

        messageReceiver.replaceChildren(messageContent, messageTime);
        messageSenderContainer.classList.add("none");
      }

      messageSenderContainer.replaceChildren(messageSender);
      messageReceiverContainer.replaceChildren(messageReceiver);

      messagesConversations.replaceChildren(
        messageSenderContainer,
        messageReceiverContainer
      );

      return messagesConversations;
    };

    const messagesConversationsContainer = document.querySelector(
      ".messages__conversations-container"
    );

    messagesConversationsContainer.append(createMessages());
  }
};
