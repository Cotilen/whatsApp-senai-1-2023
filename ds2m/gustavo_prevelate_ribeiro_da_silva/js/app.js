'use strict'

import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js";

let i = 0;

//Main Structure
const createContact = (contato) => {
    const contact = document.createElement('button');
    contact.classList.add('contact');

    const img = document.createElement('img');
    img.classList.add('image-contact');
    img.src = `./${contato.image}`;

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('container-contact');

    const contactName = document.createElement('h2');
    contactName.classList.add('name-contact');
    contactName.textContent = contato.name;

    const contactDescription = document.createElement('div');
    contactDescription.classList.add('description-contact');
    contactDescription.textContent = contato.description;

    contactContainer.append(contactName, contactDescription);
    contact.append(img, contactContainer);
    contact.id = i++;
        return contact;
};

const contactLoading = () => {
    const container = document.getElementById('container');
    const contacts = contatos.map(createContact);

    container.replaceChildren(...contacts);

    contacts.forEach(contact => {

        contact.onclick = () => {

            function bringMainContact() {
                document.getElementById('main').style.display = "grid";

                //Main header interior structure
                const headerMain = document.createElement('div');
                headerMain.classList.add('header-main');

                const backContacts = document.createElement('a');
                backContacts.classList.add('back-contacts');

                const backContactsIcon = document.createElement('i');
                backContactsIcon.classList.add('fa-solid');
                backContactsIcon.classList.add('fa-arrow-left');

                const image = document.createElement('img');
                image.classList.add('image-contact');
                image.src = `./${contatos[contact.id].image}`;

                const containerMain = document.createElement('div');
                containerMain.classList.add('container-contact-main');

                const nameContact = document.createElement('h2');
                nameContact.classList.add('name-contact-main');
                nameContact.textContent = contatos[contact.id].name;

                const descriptionContact = document.createElement('div');
                descriptionContact.classList.add('description-contact');
                descriptionContact.textContent = contatos[contact.id].description;

                const iconsMain = document.createElement('div');
                iconsMain.classList.add('icons-main');

                const searchIconMain = document.createElement('i');
                searchIconMain.classList.add('fa-solid');
                searchIconMain.classList.add('fa-magnifying-glass');

                const settingsIconMain = document.createElement('i');
                settingsIconMain.classList.add('fas');
                settingsIconMain.classList.add('fa-ellipsis-v');

                containerMain.append(nameContact, descriptionContact);
                backContacts.append(backContactsIcon);
                iconsMain.append(searchIconMain, settingsIconMain);
                headerMain.append(backContacts, image, containerMain, iconsMain);

                const messageContainer = document.getElementById('inside-message-main');
                messageContainer.replaceChildren(headerMain);

                //Bringing an element to make website responsive
                document.getElementById('header').classList.add('display-none');
                backContacts.addEventListener('click', function() {
                    document.getElementById('header').classList.remove('display-none');
                    document.getElementById('main').style.display = 'none';

                });
            };

            //Array to get json data and implement with div and others
            function takeMessageMain() {

                let messageArray = [];
                let cont = 0;
                let whileContacts = contatos[contact.id].messages.length;
                while (cont <= whileContacts) {

                    const messageMain = document.createElement('div');
                    messageMain.classList.add('message-main');
                    messageMain.textContent = contatos[contact.id].messages[cont].content;

                    //Bringing timestamp time to return a single time
                    const messageTimeMain = document.createElement('div');
                    messageTimeMain.classList.add('message-time-main');
                    if (contatos[contact.id].messages[cont].time == undefined)
                        messageTimeMain.textContent = contatos[contact.id].messages[cont].timestamp;
                        else
                        messageTimeMain.textContent = contatos[contact.id].messages[cont].time;
                        const messageContact = document.createElement('div');

                    if (contatos[contact.id].messages[cont].sender != "me")
                        messageContact.classList.add('message-contact-contact');
                        else
                        messageContact.classList.add('message-contact-me');

                    //Main interior structure
                    const messageFromMain = document.createElement('div');
                    messageFromMain.classList.add('message-from-main');

                    messageContact.append(messageMain, messageTimeMain);

                    messageArray.push(messageContact);
                    messageFromMain.append(...messageArray);

                    const externalMessage = document.getElementById('external-message-main');
                    externalMessage.replaceChildren(messageFromMain);
                    cont++;
                };
            };
            bringMainContact();
            takeMessageMain();
        };
    });
};

 contactLoading();