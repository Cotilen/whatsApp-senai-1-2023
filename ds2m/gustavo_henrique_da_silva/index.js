/*******************************************************************************************
 * Objetivo: Realizar a criação de uma lista dinamica, utilizando os dados do arquivo JASON.
 * Autor: Gustavo Henrique
 * Data: 24/02/2023
 * Versão: 1.0
 *******************************************************************************************/

//Ajuda a policiar o código, o uso das váriaveis.
'use strict'

import { contatos } from "./contatos.js"

console.log(contatos[0].messages[3])

var cont = 0

const criarNovaLista = (contato) => {
  //Criando uma div
  const div = document.createElement('div')
  //Criando uma classe para a div
  div.classList.add('lista')
  div.id = cont++
  //div.id = 'lista'

  //Criando uma imagem
  const img = document.createElement('img')
  //Adicionando uma classe para a imagem
  img.classList.add('img_usuario')
  //Pagando as sequencia das imagens no JSON
  img.src = `./imagens_aplicativo/${contato.image}`

  //Criando uma div chamada titulo_texto 
  const titulo_texto = document.createElement('div')
  titulo_texto.classList.add('titulo_texto')

  //Criando elemento titulo para receber o nome
  const titulo = document.createElement('h5')
  titulo.classList.add('lista_titulo')
  titulo.textContent = contato.name

  //Criando o elemento profissão
  const profisao = document.createElement('p')
  profisao.classList.add('texto_profissao')
  profisao.textContent = contato.description

  //Adionando o titulo e o texto a div
  titulo_texto.append(titulo, profisao)
  div.append(img, titulo_texto)

  /*****************************************************************
   * Toda vez que a lista for clicada o id dela é
   * selecionado e passado para a função idUsuarioSelecionado()
   * que a conver para número e a passa para a função
   * carregarMensagem().
   ****************************************************************/
  div.addEventListener('click', function () {
    let id = document.getElementById(div.id)
    let numberId = Number(id.id)
    carregarMensagem(numberId)
  })

  return div
}

const carregarWhatsApp = () => {

  const conteudoLista = document.getElementById('conteudo-lista')

  // Chama a função criarNovaLista, e para cada elemento da matriz cria uma nova matriz
  const criarLista = contatos.map(criarNovaLista)

  conteudoLista.replaceChildren(...criarLista)
}

carregarWhatsApp()

const pesquisa = document.getElementById('txtPesquisa')
const listaNomes = document.querySelectorAll('.lista')

pesquisa.addEventListener('keyup', () => {

  listaNomes.forEach((elementos) => {
    /**
     * "nomesUsuarios.textContent": o elemento "h5" contém o nome do usuário, 
     * que está em seu conteúdo de texto. Usando "textContent", podemos acessar esse conteúdo de texto.

       .trim()": o método "trim" remove espaços em branco do início e do final do texto. 
       Isso é útil para garantir que não haja espaços extras antes ou depois do nome do usuário.

       .toLowerCase()": o método "toLowerCase" converte todo o texto em minúsculas. Isso é útil
        para que possamos comparar a pesquisa com o nome do usuário, independentemente de as letras serem maiúsculas ou minúsculas.

       .includes(pesquisa.value.trim().toLowerCase()))": o método "includes" verifica se o valor
        da pesquisa atual está incluído no nome do usuário. Usamos "pesquisa.value" para obter o valor atual da pesquisa,
         e aplicamos os métodos "trim" e "toLowerCase" para remover espaços em branco extras e converter tudo em minúsculas. 
         Isso significa que se o nome do usuário incluir a pesquisa atual, 
         a linha de código retornará "true" e o elemento será mostrado. Se não, a linha de código retornará "false" e o elemento será ocultado.
     */
    const nomesUsuarios = elementos.querySelector('h5')
    if (nomesUsuarios.textContent.trim().toLocaleLowerCase().includes(pesquisa.value.trim().toLocaleLowerCase())) {
      //Mostra o elemento que contem a pesquisa
      elementos.style.display = 'flex'
    } else {
      elementos.style.display = 'none'
    }
  })
})

const mensagen = (mensagem) => {

  const container = document.createElement('div');
  container.classList.add('mensagem');
  const volta_home = document.getElementById('volta_home')

  //Reponsividade
  const listaUsuarios = document.getElementById('conteudo_pesquisa_lista')
  listaUsuarios.classList.add('conteudo_pesquisa_lista_None')
  //Muda a classe do conteudo_Conversa para a Classe aparecer
  const conteudoConversas = document.getElementById('conteudo_conversas')
  conteudoConversas.classList.add('aparecerConversa')

  volta_home.addEventListener('click', function () {
    listaUsuarios.classList.add('conteudo_pesquisa_lista')
    listaUsuarios.classList.remove('conteudo_pesquisa_lista_None')

    conteudoConversas.classList.add('conteudo_conversas')
    conteudoConversas.classList.remove('aparecerConversa')
  })


  mensagem.messages.forEach((listaMensagem) => {

    const remetente_mensagem_tempo = document.createElement('div');
    remetente_mensagem_tempo.classList.add('remetente_mensagem_tempo');

    const remetente = document.createElement('div');
    remetente.classList.add('remetente');

    const remetente_usuario = document.createElement('h1');
    remetente_usuario.id = 'remetente_usuario'
    remetente_usuario.textContent = listaMensagem.sender;

    const mensagem_conteudo = document.createElement('p');
    mensagem_conteudo.id = 'mensagem_texto'
    mensagem_conteudo.textContent = listaMensagem.content;

    const tempo_resposta = document.createElement('p');
    tempo_resposta.id = 'tempo_resposta'
    /** Se o listaMensagem.timestamp for verdadeiro ele pega o listaMensagem.timestamp se não pega o time*/
    tempo_resposta.textContent = listaMensagem.timestamp ? listaMensagem.timestamp : listaMensagem.time

    if (listaMensagem.sender === "me") {
      remetente_mensagem_tempo.id = 'usuarioPrincipalVerde';
    }

    remetente.append(remetente_usuario);
    remetente_mensagem_tempo.append(remetente, mensagem_conteudo, tempo_resposta);
    container.append(remetente_mensagem_tempo);

  });

  return container;

};

const carregarMensagem = ($id) => {
  const conteudoLista = document.getElementById('container');
  const criarLista = contatos
    .filter((contato, index) => index === $id) // filtra pelo índice igual a $id
    .map((contato) => mensagen(contato)); // cria a lista de mensagens usando mensagen()
  conteudoLista.replaceChildren(...criarLista);

  const enviaMensagem = document.querySelector('.envia_mensagemNone')
  //enviamensagem.classList.remove('envia_mensagemNone')
  enviaMensagem.classList.add('envia_mensagemFlex')

};
