// Obtém o link do tema
var temaLink = document.getElementById("tema-link");

// Obtém a janela modal do tema
var temaModal = document.getElementById("tema-modal");

// Quando o usuário clicar no link do tema, mostre a janela modal
temaLink.onclick = function(event) {
  event.preventDefault(); 
  temaModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == temaModal) {
    temaModal.style.display = "none";
  }
}

// ação do cancel-button
var span = temaModal.getElementsByClassName("cancel-button")[0];
span.onclick = function() {
  temaModal.style.display = "none";
}

function closeTemaModal() {
  temaModal.style.display = "none";
}


// ação do ok-button

const messagesGroup = document.getElementById('messages')
const modalContent = document.getElementById('backgroundColorModalContent')
const body = document.getElementById('bodyId')
const side = document.getElementById('secaoPrincipal')
const sideHeader = document.getElementById('sideHeader')
const headerChat = document.getElementById('headerChat')
const chatFooter = document.getElementById('chatFooter')
const chatContainer = document.getElementById('chatContainer')
const searchBar = document.getElementById('search-bar')
const headerBody = document.getElementById('headerBody')
const okButton = document.querySelector('.ok-button');
const ul = document.getElementById('listaId')
const contConfig = document.getElementById('contentConfig')

okButton.addEventListener('click', function() {
  const input = document.querySelector('input[name="cor"]:checked');
  if (input && input.value === 'escuro') {
    contConfig.classList.remove('backgroundColorConfigContent')
    contConfig.classList.add('backgroundColorConfigContent2')
    messagesGroup.classList.remove('imgClara');
    body.classList.remove('backgroundClaroBody');
    side.classList.remove('bg-white')
    sideHeader.classList.remove('backgroundClaroSideHeader')
    sideHeader.classList.add('backgroundEscuroSideHeader')
    headerChat.classList.remove('backgroundClaroSideHeader')
    headerChat.classList.add('backgroundEscuroSideHeader')
    chatFooter.classList.remove('backgroundClaroSideHeader')
    chatFooter.classList.add('backgroundEscuroSideHeader')
    searchBar.classList.remove('backgroundClaroSearchBar')
    searchBar.classList.add('backgroundEscuroSideHeader')
    chatContainer.classList.remove('bg-light')
    chatContainer.classList.add('backgroundEscuroSideHeader')
    side.classList.add('backgroundEscuroBody')
    body.classList.add('backgroundEscuroBody');
    headerBody.classList.remove('backgroudGreenHeaderBody')
    headerBody.classList.add('backgroundEscuroBody')
    messagesGroup.classList.add('imgEscura');
    modalContent.id = 'backgroundColorModalContent2'

  } else {
    messagesGroup.classList.remove('imgEscura');
    side.classList.remove('backgroundEscuroBody')
    side.classList.add('bg-white')
    contConfig.classList.remove('backgroundColorConfigContent2')
    contConfig.classList.add('backgroundColorConfigContent')
    sideHeader.classList.remove('backgroundEscuroSideHeader')
    sideHeader.classList.add('backgroundClaroSideHeader')
    headerChat.classList.remove('backgroundEscuroSideHeader')
    headerChat.classList.add('backgroundClaroSideHeader')
    chatFooter.classList.remove('backgroundEscuroSideHeader')
    chatFooter.classList.add('backgroundClaroSideHeader')
    searchBar.classList.add('backgroundClaroSearchBar')
    searchBar.classList.remove('backgroundEscuroSideHeader')
    chatContainer.classList.remove('bg-light')
    chatContainer.classList.add('backgroundEscuroSideHeader')
    body.classList.remove('backgroundEscuroBody');
    body.classList.add('backgroundClaroBody');
    headerBody.classList.add('backgroudGreenHeaderBody')
    headerBody.classList.remove('backgroundEscuroBody')
    messagesGroup.classList.add('imgClara');
    modalContent.id = 'backgroundColorModalContent'
  }
  closeTemaModal();
});

const back2 = document.getElementById('back2')
const main = document.getElementById('conteudo')

back2.addEventListener('click', (event) => {
  main.classList.remove('eixoX')
  main.classList.add('eixoX2')
});