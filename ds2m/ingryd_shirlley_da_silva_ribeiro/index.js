'use strict'

import { contatos } from './recursos/contatos.js'

const left__side = document.getElementById('left__side') //vai pegar a div leftSide do meu HTML
const criaContato = (contato) => {
    const block = document.createElement('button')
    block.classList.add('block')
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
    const right__side = document.createElement('div')
    right__side.classList.add('right__side')
    right__side.id = 'right__side'

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

    const nav__icons = document.createElement('ul')
    nav__icons.classList.add('nav__icons')

    const searchIcon = document.createElement('li')

    const search = document.createElement('i')
    search.classList.add('fas', 'fa-search')

    const menuIcon = document.createElement('li')

    const menu = document.createElement('i')
    menu.classList.add('fa-solid', 'fa-ellipsis-vertical')

    const chatBox = document.createElement('div')
    chatBox.classList.add('chatbox')

    contato.messages.forEach(function(mensagem) {
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

    const writeMessage = document.createElement('input')
    writeMessage.setAttribute('type', "text")
    writeMessage.setAttribute('placeholder', "Write your message...")

    right__side.append(header, chatBox, chatBoxInput)
    header.append(imgtxt, nav__icons)
    imgtxt.append(backButton, contactImg, contactName)
    backButton.append(back)
    contactImg.append(contactPic)
    contactName.append(space, description)
    nav__icons.append(searchIcon, menuIcon)
    searchIcon.append(search)
    menuIcon.append(menu)
    chatBoxInput.append(writeMessage)
    backButton.addEventListener('click', clear)
    return right__side
}

const loadContacts = () => {
    const chatList = document.getElementById('chatlist')
    const listaContatos = contatos.map(criaContato)

    chatList.replaceChildren(...listaContatos)
}

const openConversation = function(nomeContato) {
    contatos.forEach(function(contato) {
        if (contato.name == nomeContato) {
            const container = document.getElementById('container')
            const right__side = document.getElementById('right__side')
            const conversa = criaConversa(contato)

            container.replaceChild(conversa, right__side)
            left__side.classList.add('invisible')
        }
    })
}

const clear = function() {
    const right__side = document.getElementById('right__side')

    right__side.classList.remove('right__side')
    right__side.classList.add('rightSideNone')

    leftSide.classList.remove('invisible')
}


loadContacts()