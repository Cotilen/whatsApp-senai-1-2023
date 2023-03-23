'use strict'

import { contatos } from './contatos.js'

const leftSide = document.getElementById('leftSide')

const criaContato = (contato) => {
    const block = document.createElement('button')
    block.classList.add('block')
    block.id = 'block'
    block.setAttribute('type', 'button')
    block.setAttribute('name', contato.name)

    const imgbx = document.createElement('div')
    imgbx.classList.add('imgbx')

    const image = document.createElement('img')
    image.classList.add('cover')
    image.src = `./${contato.image}`

    const detail = document.createElement('div')
    detail.classList.add('details')

    const listHead = document.createElement('div')
    listHead.classList.add('listHead')

    const name = document.createElement('h4')
    name.textContent = contato.name

    const time = document.createElement('p')
    time.classList.add('time')

    const previewMessage = document.createElement('div')
    previewMessage.classList.add('message_p')

    const preview = document.createElement('p')

    for (let cont = 0; cont < contato.messages.length; cont++) {
        time.textContent = contato.messages[cont].time

        preview.textContent = contato.messages[cont].content.slice(0, 25) + "..."
    }

    block.append(imgbx, detail)
    imgbx.append(image)
    detail.append(listHead, previewMessage)
    listHead.append(name, time)
    previewMessage.append(preview)

    block.addEventListener("click", () => openConversation(block.getAttribute('name')))

    return block
}

const criaConversa = (contato) => {
    const rightSide = document.createElement('div')
    rightSide.classList.add('rightSide')
    rightSide.id = 'rightSide'

    const header = document.createElement('header')

    const imgtxt = document.createElement('div')
    imgtxt.classList.add('imgText')

    const backButton = document.createElement('button')
    backButton.classList.add('backButton')
    backButton.setAttribute('type', 'button')

    const back = document.createElement('i')
    back.classList.add('fas', 'fa-chevron-left')

    const contactImg = document.createElement('div')
    contactImg.classList.add('userImg')

    const contactPic = document.createElement('img')
    contactPic.classList.add('cover')
    contactPic.src = `./${contato.image}`

    const contactName = document.createElement('h4')
    contactName.textContent = contato.name

    const space = document.createElement('br')

    const description = document.createElement('span')
    description.textContent = contato.description

    const navIcons = document.createElement('ul')
    navIcons.classList.add('nav_icons')

    const searchIcon = document.createElement('li')

    const search = document.createElement('i')
    search.classList.add('fas', 'fa-search')

    const menuIcon = document.createElement('li')

    const menu = document.createElement('i')
    menu.classList.add('fa-solid', 'fa-ellipsis-vertical')

    const chatBox = document.createElement('div')
    chatBox.classList.add('chatbox')

    contato.messages.forEach(function (mensagem) {
        if (mensagem.sender == "me") {
            const myMessage = document.createElement('div')
            myMessage.classList.add("message", "my_message")

            const userMessage = document.createElement('p')
            userMessage.textContent = mensagem.content

            const timeStamp = document.createElement('span')
            timeStamp.textContent = mensagem.time

            myMessage.append(userMessage)
            userMessage.append(timeStamp)
            chatBox.appendChild(myMessage)
        } else {
            const friendMessage = document.createElement('div')
            friendMessage.classList.add("message", "friend_message")

            const contactMessage = document.createElement('p')
            contactMessage.textContent = mensagem.content

            const friendTimeStamp = document.createElement('span')
            friendTimeStamp.textContent = mensagem.time

            friendMessage.append(contactMessage)
            contactMessage.append(friendTimeStamp)
            chatBox.appendChild(friendMessage)
        }
    })

    const chatBoxInput = document.createElement('div')
    chatBoxInput.classList.add('chatbox_input')

    const emote = document.createElement('i')
    emote.classList.add('far', 'fa-smile')

    const attach = document.createElement('i')
    attach.classList.add('fas', 'fa-paperclip')

    const writeMessage = document.createElement('input')
    writeMessage.setAttribute('type', "text")
    writeMessage.setAttribute('placeholder', "Escreva sua mensagem...")

    const audio = document.createElement('i')
    audio.classList.add('fa-solid', 'fa-microphone')

    rightSide.append(header, chatBox, chatBoxInput)
    header.append(imgtxt, navIcons)
    imgtxt.append(backButton, contactImg, contactName)
    backButton.append(back)
    contactImg.append(contactPic)
    contactName.append(space, description)
    navIcons.append(searchIcon, menuIcon)
    searchIcon.append(search)
    menuIcon.append(menu)
    chatBoxInput.append(emote, attach, writeMessage, audio)

    backButton.addEventListener('click', clear)

    return rightSide
}

const loadContacts = () => {
    const chatList = document.getElementById('chatlist')
    const listaContatos = contatos.map(criaContato)

    chatList.replaceChildren(...listaContatos)
}

const openConversation = function (nomeContato) {
    contatos.forEach(function (contato) {
        if (contato.name == nomeContato) {
            const container = document.getElementById('container')
            const rightSide = document.getElementById('rightSide')
            const conversa = criaConversa(contato)

            container.replaceChild(conversa, rightSide)
            leftSide.classList.add('invisible')
        }
    })
}

const clear = function () {
            const rightSide = document.getElementById('rightSide')

            rightSide.classList.remove('rightSide')
            rightSide.classList.add('rightSideNone')

            leftSide.classList.remove('invisible')
}

loadContacts()