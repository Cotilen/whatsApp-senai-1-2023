'use strict'

import { contatos } from "./recursos/contatos.js"
var id = 0

const criarContainer = (contato) => {
    document.getElementById("send").addEventListener("click", addBallon)
    document.getElementById("send__textfield").addEventListener("keypress", (key) => {
        if (key.key === 'Enter') {
            addBallon()
        }
    })

    const container = document.createElement('div')
    container.classList.add('contact__container')
    container.style.backgroundColor
    container.setAttribute('id', id)
    id++
    container.addEventListener("click", mudarFundo)
    container.addEventListener("click", criarMensagens)

    const imageHolder = document.createElement('div')
    imageHolder.classList.add('nav__image_holder')

    const image = document.createElement('img')
    image.classList.add('nav__main_image')
    image.src = `./recursos/${contato.image}`
    imageHolder.append(image)

    const contact = document.createElement('div')
    contact.classList.add('contact__text')

    const name = document.createElement('h5')
    name.classList.add('contact__name')
    name.textContent = contato.name
    contact.append(name)

    const description = document.createElement('p')
    description.classList.add('contact__last__menssage')
    description.textContent = contato.description
    contact.append(description)

    container.append(imageHolder, contact)

    return container


}
const criarBarras = () => {
    const header = document.getElementsByClassName("header")
    const footer = document.getElementsByClassName("footer")

    header[0].style.display = "flex"
    footer[0].style.display = "block"
}

const mudarTela = () => {
    if (window.innerWidth < 770) {
        document.getElementById("nav").style.display = "none"
        document.getElementById("main").style.display = "flex"
    } else {
        document.getElementById("nav").style.display = "grid"
        document.getElementById("main").style.display = "flex"
    }

}
const voltarTela = () => {
    if (window.innerWidth < 770) {
        document.getElementById("nav").style.display = "grid"
        document.getElementById("main").style.display = "none"
    } else {
        document.getElementById("nav").style.display = "grid"
        document.getElementById("main").style.display = "flex"
    }

}

const criarMensagens = (contatoSelecionado) => {

    criarBarras()
    mudarTela()

    const contactHeader = document.getElementsByClassName("contact__header")
    const contactText = document.createElement('div')
    contactText.classList.add("contact__text")
    const imageHolder = document.createElement('div')
    imageHolder.classList.add("nav__image_holder")
    const image = document.createElement('img')
    image.setAttribute('id', "nav__header_image")
    const name = document.createElement('h5')
    name.classList.add('contact__name', 'main__name')
    const back = document.createElement('i')
    back.classList.add("fa-solid", "fa-arrow-left", "nav__icons")
    back.setAttribute('id', "back")
    back.addEventListener("click", voltarTela)
    let selecionadoNome = contatoSelecionado.currentTarget.querySelector('.contact__name').textContent

    imageHolder.append(image)
    contactText.append(name)
    console.log(selecionadoNome)

    contatos.forEach((contatos) => {
        if (contatos.name == selecionadoNome) {
            name.textContent = selecionadoNome
            image.setAttribute('src', "./recursos/" + contatos.image)
            carregarMenssagens(contatos.messages)
        }
    })
    contactHeader[0].replaceChildren(back, imageHolder, contactText)
}

const carregarCards = () => {
    const navMain = document.getElementById('nav__main')
    const cards = contatos.map(criarContainer)

    navMain.replaceChildren(...cards)
}

var last = 0
const mudarFundo = (card) => {
    let containerUnselect = document.getElementById(last)
    let containerSelected = document.getElementById(card.currentTarget.id)
    containerUnselect.classList.remove('selected')
    containerSelected.classList.add('selected')
    last = card.currentTarget.id
}

const carregarMenssagens = (menssagens) => {
    const contactMain = document.getElementsByClassName("main")
    const contactMessages = menssagens.map((message) => {
        if (message.sender == "me") {
            const ballon = document.createElement('div')
            ballon.classList.add("messsage__baloon__me")
            const messageContent = document.createElement('p')
            messageContent.textContent = message.content
            messageContent.classList.add("baloon_text")
            ballon.append(messageContent)
            const time = document.createElement('span')
            if (message.timestamp != undefined) {
                time.textContent = message.timestamp.slice(11, 16)
            } else {
                time.textContent = message.time
            }

            time.classList.add("baloon_time")
            ballon.append(time)

            return ballon

        } else {
            const ballon = document.createElement('div')
            ballon.classList.add("messsage__baloon")
            const messageContent = document.createElement('p')
            messageContent.textContent = message.content
            messageContent.classList.add("baloon_text")
            ballon.append(messageContent)
            const time = document.createElement('span')
            if (message.timestamp != undefined) {
                time.textContent = message.timestamp.slice(11, 16)
            } else {
                time.textContent = message.time
            }
            time.classList.add("baloon_time")
            ballon.append(time)

            return ballon

        }
    })
    contactMain[0].replaceChildren(...contactMessages.reverse())
}

function addBallon() {
    if (document.getElementById("send__textfield").value) {
        const contactMain = document.getElementsByClassName("main")
        const ballon = document.createElement('div')
        ballon.classList.add("messsage__baloon__me")
        const messageContent = document.createElement('p')
        messageContent.textContent = document.getElementById("send__textfield").value
        document.getElementById("send__textfield").value = ""
        messageContent.classList.add("baloon_text")
        ballon.append(messageContent)
        const time = document.createElement('span')
        const hora = new Date()
        time.textContent = hora.getHours() + ":" + hora.getMinutes()
        time.classList.add("baloon_time")
        ballon.append(time)
        contactMain[0].insertAdjacentElement('afterBegin', ballon)
    }
}

carregarCards()