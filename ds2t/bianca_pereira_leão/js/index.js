'use strict'

import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js"

let cont = 1;
const adicionarId = (contato) => {
  contato.id = cont++;
  return contato;
};

const contatosComId = contatos.map(adicionarId);
const main = document.getElementById('conteudo')

// Função para criar a lista

const criaListaMensagem = (mensagem) => {
  const list = document.createElement('ul');
  list.classList.add('list-unstyled');
  list.style.overflowY = 'auto'; // adiciona o estilo de overflow-y

  const listElement = document.createElement('li');
  listElement.classList.add('media');


  const imagemElement = document.createElement('div');
  imagemElement.classList.add('col-3');


  const img = document.createElement('img');
  img.classList.add('profile-photo');
  img.classList.add('rounded-circle');
  img.classList.add('mb-2');
  img.classList.add('mt-3');
  img.classList.add('ml-2');
  img.classList.add('mr-3');
  img.alt = 'foto de perfil';
  img.src = mensagem.image;

  const guardaMediaBody = document.createElement('div');
  guardaMediaBody.classList.add('media-body');
  guardaMediaBody.classList.add('d-flex');
  guardaMediaBody.classList.add('flex-column');

  const nomeContato = document.createElement('h6')
  nomeContato.classList.add('text-secondary')
  nomeContato.classList.add('mb-1')
  nomeContato.classList.add('mt-3')
  nomeContato.textContent = mensagem.name

  const lastMessage = mensagem.messages[mensagem.messages.length - 1]
  const lastMessageContent = lastMessage.content

  const lastMessageTimestamp = lastMessage.time

  const now = new Date()

  const spanHora = document.createElement('span')
  spanHora.classList.add('last-message-time')
  spanHora.textContent = lastMessageTimestamp

  const lastMensagem = document.createElement('p')
  lastMensagem.classList.add('last-message')
  lastMensagem.classList.add('text-secondary')
  lastMensagem.classList.add('pb-3')
  lastMensagem.classList.add('mb-1')
  lastMensagem.textContent = lastMessageContent

  guardaMediaBody.append(nomeContato, lastMensagem)
  nomeContato.append(spanHora)

  list.append(listElement, img, guardaMediaBody);


  list.addEventListener('click', (event) => {
    carregarChatItens(mensagem.id);
    carregarMensagens(mensagem.id);
    main.classList.remove('eixoX2')
    main.classList.add('eixoX')
  });


  return list;
};


// Função que ordena os contatos de acordo com a data e hora da ultima mensagem

const ordenaContatosPorUltimaMensagem = (contatos) => {
  return contatos.sort((a, b) => {
    const ultimaMensagemA = a.messages[a.messages.length - 1];
    const ultimaMensagemB = b.messages[b.messages.length - 1];
    const dataUltimaMensagemA = new Date(ultimaMensagemA.time);
    const dataUltimaMensagemB = new Date(ultimaMensagemB.time);
    return dataUltimaMensagemB.getTime() - dataUltimaMensagemA.getTime();
  });
};

// Função para que a lista de contatos apareça

const carregarLista = () => {
  const contacts = document.getElementById('contacts');
  const contatosOrdenados = ordenaContatosPorUltimaMensagem(contatos);
  const cards = contatosOrdenados.map(criaListaMensagem);
  contacts.replaceChildren(...cards);
};


// Função para criar headerDoChat

const criarChatItens = (chat) => {
  const header = document.createElement('header');
  header.classList.add('d-flex', 'w-100');


  const headerStatus = document.createElement('div');
  headerStatus.classList.add('status-friend');
  headerStatus.classList.add('ml-auto');

  const img = document.createElement('img');
  img.classList.add('profile-photo');
  img.classList.add('rounded-circle');
  img.classList.add('mb-2');
  img.classList.add('mt-3');
  img.classList.add('ml-2');
  img.classList.add('mr-3');
  img.alt = 'foto de perfil';
  img.src = chat.image;

  const divPaiNomeDescricao = document.createElement('div');
  divPaiNomeDescricao.classList.add('mr-auto')

  const nomeContato = document.createElement('p')
  nomeContato.classList.add('mt-2')
  nomeContato.classList.add('mb-0')
  nomeContato.classList.add('text-secondary')
  nomeContato.classList.add('font-weight-bold')
  nomeContato.textContent = chat.name

  const divGuardaDescricao = document.createElement('div')
  divGuardaDescricao.classList.add('last-message')


  const spanDescricao = document.createElement('span')
  spanDescricao.classList.add('text-secondary')
  spanDescricao.textContent = chat.description

  const nav = document.createElement('nav')
  nav.classList.add('groupIconMessage')

  const aDaNav = document.createElement('a')
  aDaNav.classList.add('icon-message')

  const icone1 = document.createElement('i')
  icone1.classList.add('fas')
  icone1.classList.add('fa-search')
  icone1.classList.add('text-secondary')
  const divDropDown = document.createElement('div');
  divDropDown.classList.add('dropdown', 'd-flex');

  const btn = document.createElement('button');
  btn.classList.add('btn', 'dropdown-toggle');
  btn.id = 'menuDropdown';
  btn.type = 'button';
  btn.setAttribute('data-toggle', 'dropdown');
  btn.setAttribute('aria-haspopup', 'true');
  btn.setAttribute('aria-expanded', 'false');

  const icone2 = document.createElement('i');
  icone2.classList.add('fas', 'fa-ellipsis-v', 'text-secondary');
  icone2.id = 'dropIcon';
  icone2.setAttribute('title', 'Mais opções');

  const ulDrop = document.createElement('ul');
  ulDrop.classList.add('dropdown-menu');
  ulDrop.setAttribute('aria-labelledby', 'menuDropdown');

  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');
  const li7 = document.createElement('li');
  const li8 = document.createElement('li');

  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');
  const a4 = document.createElement('a');
  const a5 = document.createElement('a');
  const a6 = document.createElement('a');
  const a7 = document.createElement('a');
  const a8 = document.createElement('a');

  a1.classList.add('dropdown-item');
  a2.classList.add('dropdown-item');
  a3.classList.add('dropdown-item');
  a4.classList.add('dropdown-item');
  a5.classList.add('dropdown-item');
  a6.classList.add('dropdown-item');
  a7.classList.add('dropdown-item');
  a8.classList.add('dropdown-item');

  a1.href = '#';
  a2.href = '#';
  a3.href = '#';
  a4.href = '#';
  a5.href = '#';
  a6.href = '#';
  a7.href = '#';
  a8.href = '#';

  a1.textContent = 'Dados do contato';
  a2.textContent = 'Selecionar mensagens';
  a3.textContent = 'Fechar conversa';
  a4.textContent = 'Silenciar notificações';
  a5.textContent = 'Limpar mensagens';
  a6.textContent = 'Apagar conversa';
  a7.textContent = 'Denunciar';
  a8.textContent = 'Bloquear';

  header.append(headerStatus, nav);
  headerStatus.append(img, divPaiNomeDescricao);

  divPaiNomeDescricao.append(nomeContato, divGuardaDescricao);
  divGuardaDescricao.append(spanDescricao);

  nav.append(aDaNav, divDropDown);
  aDaNav.append(icone1);
  divDropDown.append(btn, ulDrop);
  btn.append(icone2);

  nav.append(aDaNav, divDropDown)
  aDaNav.append(icone1)
  ulDrop.append(li1, li2, li3, li4, li5, li6, li7, li8);

  li1.append(a1);
  li2.append(a2);
  li3.append(a3);
  li4.append(a4);
  li5.append(a5);
  li6.append(a6);
  li7.append(a7);
  li8.append(a8);


  return header
}

// Essa função carrega o header das mensagens de cada contato

const carregarChatItens = (contatoId) => {
  const chatContainer = document.getElementById('headerChat');
  const contatoIndex = contatoId - 1;
  const contato = contatosComId[contatoIndex];
  if (!contato) {
    console.error(`Contato com ID ${contatoId} não encontrado.`);
    return;
  }
  const header = criarChatItens(contato);
  chatContainer.replaceChildren(header);
};


// Função para criar as mensagens

const criarMensagens = (contato) => {
  const mensagensContainer = document.getElementById('messages');
  mensagensContainer.innerHTML = "";

  contato.messages.reverse().forEach((mensagem) => {
    const mensagemElement = document.createElement("div");
    mensagemElement.classList.add("message");
    mensagemElement.classList.add(mensagem.sender === "me" ? "me" : "them");

    const messageTime = mensagem.time;

    mensagemElement.classList.add(messageTime === contato.messages[contato.messages.length - 1].time ? "tail" : "not-tail");
    mensagemElement.dataset.time = messageTime

    mensagemElement.innerText = mensagem.content;
    mensagensContainer.appendChild(mensagemElement);
  });
};



// Essa função carrega as mensagens de cada contato

const carregarMensagens = (contatoId) => {
  const messageContainer = document.getElementById('messages');
  const contato = contatos.find(c => c.id === contatoId);
  if (!contato) {
    console.error(`Contato com ID ${contatoId} não encontrado.`);
    return;
  }
  criarMensagens(contato);
}


// chamando função para aparecer lista de contatos

carregarLista()






