'use strict'

import { contatos } from "./contatos.js"


let back = document.querySelector('.back');
let chatBox1 = document.querySelector('.chatBox1');
let open = document.querySelector('.open')

back.onclick = function () {
    chatBox1.classList.add('hide')
}
open.onclick = function () {
    chatBox1.classList.remove('hide')
}

const criarContato = (contato) => {

    const contatos = document.createElement('div')
    contatos.classList.add('janela_de_conversa')

    const nome = document.createElement('h4')
    nome.classList.add('nome')
    nome.textContent = contato

    return contatos
}

const carregarContatos = () => {
    const novoContainer = document.getElementById('janela_de_conversas')
    const contatosContainer = contatos.map(criarContato)
    novoContainer.replaceChildren(...contatosContainer)
}
carregarContatos()