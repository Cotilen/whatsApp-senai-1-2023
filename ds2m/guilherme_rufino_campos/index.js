'use strict'
import { contatos } from "./contatos.js"


// const teste = contatos.forEach(function(mensagem) {

//     console.log(mensagem.messages[0])

// })


//console.log(contatos[0].messages[0].sender[1]);




const criarContato = (contato,indice) => {
    const contatos = document.createElement('div')
    contatos.classList.add('person-talking')
    contatos.id = 'person-talking'
    contatos.onclick = () => carregarConversas(indice)

    const img = document.createElement('img')
    img.classList.add('img-person-talking')
    img.src = `./img/${contato.image}`

    const name = document.createElement('h4')
    name.classList.add('name-person-talking')
    name.textContent = contato.name

    const description = document.createElement('h5')
    description.classList.add('last-mensage')
    description.textContent = contato.description

    contatos.append(img, name, description)
    // contatos.append(name,description)
    return contatos
}

const carregarContato = () => {
    const container = document.getElementById('chatlist')
    const cntatoI = contatos.map(criarContato)

    container.replaceChildren(...cntatoI)
}
carregarContato()

// const criarMensagem = (contato) => {
//     const mensagens = document.createElement('ul')
//     mensagens.classList.add('mensages')
//     // console.log(contato.messages)
//     // let list = {}
//     const retornoConversa = function () {

//         let test =  contato.messages.length
//         let test2 = contato.messages.length
//         //console.log(test)
//         for (let cont = 0; cont < test; cont++) {
//             //listaArray.push(estadosCidades.estados.sigla)
//             let list = contato.messages[cont].content
//             const teste = JSON.stringify(list)
            
//             // for (let cont = 0; cont < test; cont++) {
//             //     console.log(contatos[cont].messages)
//             //    // break
               
//             // }
//            // break
//             //  console.log(teste)
//             return teste
//         }
        
//     }
//     // contato.messages.forEach(function(mensagem) {
//     //     resultado += mensagem.content
//     // });

//     const msg = document.createElement('li')
//     msg.classList.add('mesage')
//     msg.textContent = retornoConversa()
//     mensagens.append(msg)

//     console.log(mensagens)

//     return mensagens

//     // const mensagens = document.createElement('ul')
//     // mensagens.classList.add('mensages')


//     //msg.textContent = mensagem[1]

//     //console.log(mensagem.messages[0].content)
//     //msg.textContent = mensagem.messages

//     // console.log(mensagem.messages)



//     //console.log(mensagem.messages[1].timestamp)
//     //console.log(mensagem.messages[0].content[0])
//     // let resultado = "";
//     // contatos.forEach(function(contato) {
//     // contatos[0].messages.forEach(function(mensagem) {
//     //     console.log(mensagem.content);
//     //     resultado += mensagem.content + ';';
//     //return mensagem.content
//     // });
//     // });


//     // const msg = document.createElement('li')
//     // msg.classList.add('mesage')
//     // console.log(resultado)
//     // msg.textContent = resultado
//     // mensagens.append(msg)


//     // return mensagens
// }

// const carregarHeader = () => {
//     const container = document.getElementById('container-message-submissions')

//     const cntatoI = contatos.map(criarMensagem)

//     container.replaceChildren(...cntatoI)


//     // container.replaceChildren(...cntatoI)
// }

// carregarHeader()



// const estilizar = function () {
//     const objetoDados = (contatos[0].messages);
//     const elemento = document.getElementById("container-message-submissions");
// console.log( objetoDados)
// // seleciona o elemento HTML que representa a segunda mensagem
// const messageElement = document.querySelectorAll("li")[10];
// const messageElement1 = document.querySelectorAll("li")[12];

// // define a cor de fundo do elemento como amarelo
// messageElement.style.backgroundColor = "green";
// messageElement1.style.backgroundColor = "green";


// }

// estilizar()
// // const criarMensagem = (mensagem) => {
// //     const mensagens = document.createElement('div')
// //     mensagens.classList.add('mensages')

// //     const mensage = document.createElement('div')
// //     mensage.classList.add('mesage')
// //     mensage.textContent = mensagens.messages

// //     mensagens.append(mensage)

// //     return mensagens
// // }

// // const carregarMEnsagem = () => {
// //     const container = document.getElementById('ms')
// //     const cntatoI = contatos.map(criarMensagem)

// //     container.append(...cntatoI)

// // }

// // carregarMEnsagem()

const getConversas = (mensagem) => {

    
    const DivMessageSent = document.createElement('div')


    let messageSent = document.createElement('span')

    let time = document.createElement('span')

    if (mensagem.sender == "me") {
        DivMessageSent.classList.add('message__sent')
        messageSent.classList.add('message__sent_span')
        time.classList.add('time')
        messageSent.textContent = mensagem.content
        time.textContent = mensagem.timestamp
    } else {
        DivMessageSent.classList.add('message__received')
        messageSent.classList.add('message__received_span')
        time.classList.add('time')
        messageSent.textContent = mensagem.content
        time.textContent = mensagem.timestamp
    }

    DivMessageSent.append(messageSent)

    return DivMessageSent
}

const carregarConversas = (indice) => {
    const messageContact = document.getElementById('container-message-submissions')

    const message = contatos[indice].messages.map(getConversas)

    messageContact.replaceChildren(...message)
}