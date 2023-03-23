'use strict'

import {
    contatos
} from "./recursos/contatos.js";

var removedChilds = []
let i = 0;
var width = window.matchMedia('(min-width:700px)')
var widthMobile = window.matchMedia('(max-width:640px)')

const createUsers = (contato) => {
    const chat = document.createElement('div')
    chat.classList.add('user__talked')

    const img = document.createElement('img')
    img.classList.add('user__image')
    img.src = `./recursos/${contato.image}`

    const text__user = document.createElement('div')
    text__user.classList.add('text__user')

    const name = document.createElement('h5')
    name.classList.add('user__name')
    name.textContent = contato.name

    const description = document.createElement('span')
    description.classList.add('user__conversation')
    description.textContent = contato.messages[0].content

    text__user.append(name, description)
    chat.append(img, text__user)
    chat.id = i++;
    return chat
}

const loadingContact = () => {
    const users = document.getElementById('container__chat')
    const cards = contatos.map(createUsers);
    users.replaceChildren(...cards)

    cards.forEach(contact => {
        contact.onclick = () => {
            const conversation = document.getElementById('chat')
            conversation.classList.add('chat__user')
            conversation.classList.add('display__block__msg')

            function addChilds() {
                for (let i = 0; i < removedChilds.length; i++) {
                    conversation.appendChild(removedChilds[i])
                }
            }

            const headerChat = document.createElement('div')
            headerChat.classList.add('chat__header')

            const user = document.createElement('div')
            user.classList.add('user')

            const img = document.createElement('img')
            img.classList.add('user__image')
            img.src = `./recursos/${contatos[contact.id].image}`

            const name = document.createElement('h5')
            name.classList.add('user__name__chat')
            name.textContent = contatos[contact.id].name

            const options = createOptionsHeader();
            const backIcon = backPage();

            user.append(img, name)
            headerChat.append(backIcon, user, options)
            conversation.replaceChildren(headerChat)

            const chat = document.getElementById('chat')

            const messages = document.createElement('div')
            messages.classList.add('messages')

            const sender = document.createElement('div')
            sender.classList.add('sender')

            const box = createWritteBox()

            const mensagens = contatos[contact.id].messages.map(function (msg) {
                const span = document.createElement('span')
                if (msg.sender == 'me') {
                    editingStyleMe(span)
                    span.textContent = msg.content
                } else if (msg.sender != 'me') {
                    editingStyleOther(span)
                    span.textContent = msg.content

                }
                return span
            })

            sender.replaceChildren(...mensagens)
            messages.appendChild(sender)
            chat.append(messages, box)


            const getClickContainerChat = document.getElementById('container__chat')
            getClickContainerChat.classList.add('container__chat__conversation')
           
            const getChat = document.getElementById('chat')
            const navegation = document.getElementById('navegation')
                backIcon.onclick = () => {
                    
                    getChat.classList.remove('display__block__msg')
                    getChat.classList.add('display__none__msg')
                    navegation.classList.add('display__block')
                    navegation.classList.remove('display__none')
                }

                
                getClickContainerChat.onclick = () => {
                    navegation.classList.add('display__none')
                    navegation.classList.remove('display__block')
                    getChat.classList.add('display__block__msg')}
        
                
        }
    })
}

const stylingInput = (input) => {
    input.placeholder = "Digite uma mensagem"
    input.valeu = ""
    input.type = "search"
}

const createWritteBox = () => {
    const writting = document.createElement('div')
    writting.classList.add('writting__area')

    const icons__writting = document.createElement('div')
    icons__writting.classList.add('icons__writting__area')

    const spanSmiley = document.createElement('span')
    spanSmiley.innerHTML = '<i class="fas fa-smile"></i>'
    editingColorsIcon(spanSmiley)

    const spanClip = document.createElement('a')
    spanClip.innerHTML = '<i class="fas fa-paperclip"></i>'
    editingColorsIcon(spanClip)

    const inputUser = document.createElement('input')
    inputUser.classList.add('user__writting')
    stylingInput(inputUser)

    const spanMic = document.createElement('a')
    spanMic.innerHTML = '<i class="fa-solid fa-microphone"></i'
    editingColorsIcon(spanMic)

    icons__writting.append(spanSmiley, spanClip)
    writting.append(icons__writting, inputUser, spanMic)

    return writting
}

const createOptionsHeader = () => {
    const options = document.createElement('div')
    options.classList.add('options')

    const iconsOptions__ellipsis = document.createElement('a')
    iconsOptions__ellipsis.innerHTML = '<i class="ellipsis fas fa-ellipsis-v"></i>'

    const iconsOptions__search = document.createElement('a')
    iconsOptions__search.innerHTML = '<i class="fas fa-search"></i>'

    options.append(iconsOptions__ellipsis, iconsOptions__search)
    return options
}

const editingColorsIcon = (i) => {
    i.style.color = '#637d95'
}

const editingStyleMe = (span) => {
    if (widthMobile.matches) {
        span.style.display = 'flex'
        span.style.alignSelf = 'flex-end'
        span.style.alignItems = 'center'
        span.style.backgroundColor = '#d9fdd3'
        span.style.height = '100px'
        span.style.width = '50%'
        span.style.border = '1px solid transparent'
        span.style.borderRadius = '40px'
        span.style.padding = '20px'
    } else {
        span.style.display = 'flex'
        span.style.alignSelf = 'flex-end'
        span.style.alignItems = 'center'
        span.style.backgroundColor = '#d9fdd3'
        span.style.height = '50px'
        span.style.width = '50%'
        span.style.border = '1px solid transparent'
        span.style.borderRadius = '40px'
        span.style.padding = '20px'
    }
}

const editingStyleOther = (i) => {
    if (widthMobile.matches) {
        i.style.display = 'flex'
        i.style.alignSelf = 'flex-start'
        i.style.alignItems = 'center'
        i.style.backgroundColor = 'white'
        i.style.height = '100px'
        i.style.width = '50%'
        i.style.border = '1px solid transparent'
        i.style.borderRadius = '40px'
        i.style.padding = '20px'
    } else {
        i.style.display = 'flex'
        i.style.alignSelf = 'flex-start'
        i.style.alignItems = 'center'
        i.style.backgroundColor = 'white'
        i.style.height = '50px'
        i.style.width = '50%'
        i.style.border = '1px solid transparent'
        i.style.borderRadius = '40px'
        i.style.padding = '20px'
    }

}

const backPage = () => {
    const iconBack = document.createElement('a')
    iconBack.classList.add('voltar')

    const backForward = document.createElement('i')
    backForward.classList.add('fas')
    backForward.classList.add('fa-arrow-circle-left')

    iconBack.append(backForward)
    return iconBack
}

const initApp = () => {
    const app = loadingContact();
    const fixErr = document.getElementById("chat")

    while (fixErr.firstChild) {
        removedChilds.push(fixErr.removeChild(fixErr.firstChild))
    }

    return app;
}

initApp()

