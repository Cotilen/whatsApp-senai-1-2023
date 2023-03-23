'use stric'

const searchInput = document.querySelector('#inputSearch');
const searchIcon = document.querySelector('#search');
const arrowIcon = document.querySelector('#arrow');

searchInput.addEventListener('focus', function () {
  const iconWidth = searchIcon.offsetWidth;
  const paddingLeft = iconWidth + 40;
  searchInput.style.paddingLeft = `${paddingLeft}px`;
  searchIcon.style.display = 'none';
  arrowIcon.style.display = 'inline-block';
});

searchInput.addEventListener('blur', function () {

  const iconWidth = searchIcon.offsetWidth;
  const paddingLeft = iconWidth + 0;
  searchInput.style.paddingLeft = `${paddingLeft}px`;
  searchIcon.style.display = 'inline-block';
  arrowIcon.style.display = 'none';
});



// função para aparecer emojis


const emojiButton = document.querySelector('#emoji-picker-btn');
const emojiList = document.querySelector('#emoji-list');
const guardaEmoji = document.querySelector('#guarda-emoji');
const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '🎠', '🚓', '🚇', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤'];
let isEmojiListVisible = false;

emojiButton.addEventListener('click', () => {
  if (isEmojiListVisible) {
    emojiList.style.display = 'none';
    guardaEmoji.classList.remove('show-emoji-list');
  } else {
    emojiList.style.display = 'block';
    guardaEmoji.classList.add('show-emoji-list');
  }
  isEmojiListVisible = !isEmojiListVisible;
});

emojis.forEach(emoji => {
  const span = document.createElement('span');
  span.innerHTML = emoji;
  span.classList.add('emoji');
  span.addEventListener('click', () => {
    const input = document.querySelector('#message-input');
    input.value += emoji;
    emojiList.style.display = 'none';
    guardaEmoji.classList.remove('show-emoji-list');
    isEmojiListVisible = false;
  });
  emojiList.appendChild(span);
});


function mostrarConfiguracoes() {
  var configuracoes = document.getElementById("configuracoes");
  var conteudoOriginal = document.getElementById('secaoPrincipal')
  if (configuracoes.style.display === "none") {
    configuracoes.style.display = "block";
    conteudoOriginal.style.display = 'none'
  } else {
    configuracoes.style.display = "none";
  }
}

document.getElementById("back").addEventListener("click", function () {

  var conteudoOriginal = document.getElementById("secaoPrincipal");

  var configuracoes = document.getElementById("configuracoes");
  configuracoes.style.display = "none";
  conteudoOriginal.style.display = "block";
});


// função para permissão de audio usando navigator.mediaDevices

const btnMicrophone = document.getElementById("btn-microphone");

btnMicrophone.addEventListener("click", () => {
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream => {
        
    })
    .catch(error => {
        
    });
});



