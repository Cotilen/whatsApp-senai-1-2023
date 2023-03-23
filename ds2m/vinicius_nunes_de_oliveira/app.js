'use strict'
window.addEventListener('resize', function () {
  location.reload()
})
import { contatos } from './recursos/contatos.js'

const largura = window.screen.width
let i = 0

const criarContato = contato => {
  const card = document.createElement('div')
  card.classList.add('media__contacts')

  const img = document.createElement('img')
  img.classList.add('contact-img')
  img.src = `./${contato.image}`

  const messages = document.createElement('div')
  messages.classList.add('messages')

  const nome = document.createElement('h5')
  nome.classList.add('messages__name')
  nome.textContent = contato.name
  nome.id = 'card'

  const descricao = document.createElement('span')
  descricao.classList.add('messages__description')

  descricao.textContent = contato.messages[2].content

  messages.append(nome, descricao)
  card.append(img, messages)
  card.id = i++

  return card
}

let card2

const carregarContatos = () => {
  const container = document.getElementById('container')
  const cards = contatos.map(criarContato)

  container.replaceChildren(...cards)

  cards.forEach(card => {
    card.onclick = () => {
      const cardContainer2 = document.createElement('div')
      cardContainer2.classList.add('message__header')

      const cardContainer = document.createElement('div')
      cardContainer.classList.add('group')

      const menuBotao = document.createElement('button')
      menuBotao.classList.add('botaoMenu')

      const imgMenu = document.createElement('img')
      imgMenu.src = './img/left-chevron.png'

      const imgCard = document.createElement('img')
      imgCard.classList.add('contact-img')
      imgCard.src = `./${contatos[card.id].image}`

      const header__contact = document.createElement('div')
      header__contact.classList.add('header__contact')

      const header__name = document.createElement('h5')
      header__name.classList.add('messages__name')
      header__name.textContent = contatos[card.id].name

      const messages__description = document.createElement('span')
      messages__description.classList.add('messages__description')
      messages__description.textContent = contatos[card.id].description


      //APPEND
      menuBotao.append(imgMenu)
      header__contact.append(header__name, messages__description)
      cardContainer.append(menuBotao, imgCard, header__contact)
      cardContainer2.append(cardContainer)

      const contentMessage = document.createElement('div')
      contentMessage.classList.add('message__content')

      const cardDaMensagem = document.createElement('div')
      cardDaMensagem.classList.add('message__content__card')

      contatos[card.id].messages.forEach(function (mensagem) {
        if (mensagem.sender == 'me') {
          const meContent = document.createElement('div')
          meContent.classList.add('content__me')

          const alignMe = document.createElement('div')
          alignMe.classList.add('me__align')

          const sendMe = document.createElement('h5')
          sendMe.classList.add('me__send')
          sendMe.textContent = mensagem.sender

          const messageMe = document.createElement('h5')
          messageMe.classList.add('me__message')
          messageMe.textContent = mensagem.content

          const dateMe = document.createElement('span')
          dateMe.classList.add('me__date')
          dateMe.textContent = mensagem.time

          alignMe.append(sendMe, messageMe, dateMe)
          meContent.append(alignMe)
          cardDaMensagem.append(meContent)
        } else {
          const otherContent = document.createElement('div')
          otherContent.classList.add('content__other')

          const alignOther = document.createElement('div')
          alignOther.classList.add('other__align')

          const sendOther = document.createElement('h5')
          sendOther.classList.add('other__send')
          sendOther.textContent = mensagem.sender

          const messageOther = document.createElement('h5')
          messageOther.classList.add('other__message')
          messageOther.textContent = mensagem.content

          const dateOther = document.createElement('span')
          dateOther.classList.add('other__date')
          dateOther.textContent = mensagem.time

          alignOther.append(sendOther, messageOther, dateOther)
          cardDaMensagem.append(alignOther)
        }
        contentMessage.replaceChildren(cardDaMensagem)
      })

      const containerMessage = document.getElementById('inside-message')

      containerMessage.replaceChildren(cardContainer2, contentMessage)

      const getMedia = document.getElementById('media')
      menuBotao.onclick = () => {
        console.log('clicado no botão')
        containerMessage.style.display = 'none'
        container.style.display = 'block'
        getMedia.style.display = 'block'
      }

      if (largura < 640) {
        card.onclick = () => {
          console.log('clicado no card')
          containerMessage.style.display = 'block'
          container.style.display = 'none'
          getMedia.style.display = 'none'
               }
      } else {
        containerMessage.style.display = 'block'
        container.style.display = 'block'
        getMedia.style.display = 'block'
      }
    
    }

  })
}

carregarContatos()

