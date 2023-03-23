'use strict'



import {
    contatos
} from './contatos.js'





const createContacts = (contato, indice) => {
    const chatList = document.createElement('div')
    chatList.classList.add('chatlist')

    const blockActive = document.createElement('div')
    blockActive.classList.add("block")
    blockActive.setAttribute('name', contato.name)

    const imgbx = document.createElement('div')
    imgbx.classList.add('imgbx')

    const imgUser = document.createElement('img')
    imgUser.classList.add('imageReform')
    imgUser.src = `./${contato.image}`

    const details = document.createElement('div')
    details.classList.add('details')

    const listhead = document.createElement('div')
    listhead.classList.add('listhead')

    const name = document.createElement('h4')
    name.textContent = contato.name

    const time = document.createElement('p')
    time.classList.add('time')

    const group = document.createElement('p')
    group.classList.add('group')

    for (let contador = 0; contador < contato.messages.length; contador++) {
        time.textContent = contato.messages[contador].time

        group.textContent = contato.messages[contador].content.slice(0, 20) + "..."


    }

    const message = document.createElement('div')
    message.classList.add('message')

    chatList.append(blockActive)
    blockActive.append(imgbx, details)
    imgbx.append(imgUser)
    details.append(listhead, message)
    listhead.append(name, time)
    message.append(group)


    blockActive.addEventListener('click', (event) => {

        const container = document.getElementById('box-right')
        container.classList.add('activeAparecer')
        container.replaceChildren(createMessage(indice))
        const boxLeft = document.getElementById('box-left')
        boxLeft.classList.add('activeDesaparecer')

    })


    return chatList

}
const createMessage = (indice) => {

    const boxRight = document.createElement('div')
    boxRight.classList.add('box-right', 'box-right::before')
    boxRight.id = 'box-right'

    const header = document.createElement('div')
    header.classList.add('header')
    const contactUserImg = document.createElement('div')
    const userPerfli = document.createElement('div')
    userPerfli.classList.add('userimg')
    contactUserImg.classList.add('img-perfil')
    const contactImg = document.createElement('img')
    contactImg.classList.add('cover')
    contactImg.src = `./${contatos[indice].image}`
    const contactName = document.createElement('h4')
    contactName.textContent = contatos[indice].name
    const space = document.createElement('br')
    const contactDescription = document.createElement('span')
    contactDescription.textContent = contatos[indice].description
    const arrowBack = document.createElement('div')

    arrowBack.classList.add('arrow-left')

    const contactUl = document.createElement('ul')
    contactUl.classList.add('icons')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')

    const ionIconSearch = document.createElement('ion-icon')
    ionIconSearch.setAttribute('name', 'search-outline')
    const ionIconEllipsis = document.createElement('ion-icon')
    ionIconEllipsis.setAttribute('name', 'ellipsis-vertical')


    const chat = document.createElement('div')
    chat.classList.add('chat')
    contatos[indice].messages.forEach(function (mensagem) {
        if (mensagem.sender == "me") {
            const myMessage = document.createElement('div')
            myMessage.classList.add("message", "you-message")

            const userMessage = document.createElement('p')
            userMessage.textContent = mensagem.content

            const timeStamp = document.createElement('span')
            timeStamp.textContent = mensagem.time

            myMessage.append(userMessage)
            userMessage.append(timeStamp)
            chat.appendChild(myMessage)
        } else {
            const friendMessage = document.createElement('div')
            friendMessage.classList.add("message", "friend-message")

            const contactMessage = document.createElement('p')
            contactMessage.textContent = mensagem.content

            const friendTimeStamp = document.createElement('span')
            friendTimeStamp.textContent = mensagem.time

            friendMessage.append(contactMessage)
            contactMessage.append(friendTimeStamp)
            chat.appendChild(friendMessage)
        }
    })

    const chatInput = document.createElement('div')
    chatInput.classList.add('chatbox-input')
    const ionIconHappy = document.createElement('ion-icon')
    ionIconHappy.setAttribute('name', 'happy-outline')

    const ionIconattach = document.createElement('ion-icon')
    ionIconattach.setAttribute('name', 'attach-outline')
    const inputMessage = document.createElement('input')
    inputMessage.setAttribute('type', 'text')
    inputMessage.setAttribute('placeholder', 'Envie sua Mensagem')
    const ionIconmic = document.createElement('ion-icon')
    ionIconmic.setAttribute('name', 'mic-outline')

    boxRight.append(header, chat, chatInput)
    header.append(contactUserImg, contactUl)
    contactName.append(space)
    space.append(contactDescription)
    contactUserImg.append(arrowBack, userPerfli, contactName)
    userPerfli.append(contactImg)
    contactUl.append(li1, li2)
    li1.append(ionIconSearch)
    li2.append(ionIconEllipsis)

    chatInput.append(ionIconHappy, ionIconattach, inputMessage, ionIconmic)


    arrowBack.addEventListener('click', () => {
        const boxRight = document.getElementById('box-right')
        boxRight.classList.remove('activeAparecer')

        const boxLeft = document.getElementById('box-left')
        boxLeft.classList.remove('activeDesaparecer')
    })

    return boxRight


}


const loadContact = () => {
    const container = document.getElementById('container2')
    const SendContact = contatos.map(createContacts)
    container.replaceChildren(...SendContact)
}


loadContact()
