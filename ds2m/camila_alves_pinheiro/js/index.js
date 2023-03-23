'use strict'

import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js"

const criarCards = (contato, indice) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = 'card'
    card.onclick = () => carregarConversas(indice)

    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.id = 'contact'

    const img = document.createElement('img')
    img.classList.add('img__contact')
    img.alt = 'Image contact'
    img.src = `${contato.image}`

    const name = document.createElement('h5')
    name.classList.add('name__contact')
    name.textContent = contato.name

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = contato.time

    const description = document.createElement('p')
    description.classList.add('description__contact')
    description.textContent = contato.description

    card.append(img, contact)
    contact.append(name, description)

    return card

}

const carregarContatos = () => {
    const container = document.getElementById('container__card')
    const cards = contatos.map(criarCards)

    container.replaceChildren(...cards)
}

carregarContatos()

const getConversas = (mensagem) => {

    const DivMessageSent = document.createElement('div')


    let messageSent = document.createElement('span')
    let br = document.createElement('br')

    let time = document.createElement('span')

    if (mensagem.sender == "me") {
        DivMessageSent.classList.add('message__sent')
        messageSent.classList.add('message__sent_span')
        time.classList.add('time')
        messageSent.textContent = mensagem.content
        time.textContent = mensagem.time
    } else {
        DivMessageSent.classList.add('message__received')
        messageSent.classList.add('message__received_span')
        time.classList.add('time')
        messageSent.textContent = mensagem.content
        time.textContent = mensagem.time
    }

    DivMessageSent.append(messageSent, br, time)

    return DivMessageSent
}

const carregarConversas = (indice) => {
    const messageContact = document.getElementById('message__contact')

    const message = contatos[indice].messages.map(getConversas)

    messageContact.replaceChildren(...message)
}

// const manageContact = (contato) => {
//     const functions = document.createElement('div')
//     functions.classList.add('functions__contact')

//     const img = document.createElement('img')
//     img.classList.add('img__contact')
//     img.alt = 'Image contact'
//     img.src = `./img/${contato.image}`

//     const name = document.createElement('h5')
//     name.classList.add('name__contact')
//     name.textContent = contato.name

//     const listIcons = document.createElement('ul')
//     listIcons.classList.add('functions__icons')

//     const search = document.createElement('i')
//     search.classList.add('fa-solid')
//     search.classList.add('fa-magnifying-glass')

//     const moreSelections = document.createElement('i')
//     moreSelections.classList.add('fas')
//     moreSelections.classList.add('fa-ellipsis-v')

//     const logo = document.createElement('img')
//     logo.alt = 'Logo Pay Pal'
//     logo.src = `./img/paypal-window.png`


//     listIcons.append(search, moreSelections, logo)
//     functions.append(img, name, listIcons)

//     return functions

// }

// const chageContact = () => {

//         const container = document.getElementById('container__messages')
//         const profile = contatos.map(manageContact)

//         container.replaceChildren(...profile)

// }




 // ['a', 'b', 'c']
    // 1 - elemento
    // 2 - indice
    // 3 - array






