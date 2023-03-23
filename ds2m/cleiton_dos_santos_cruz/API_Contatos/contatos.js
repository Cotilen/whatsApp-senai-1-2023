export const getContatos = async function() {

    let url = `http://localhost:8080/v1/senai/contatos?id=1`

    let response = await fetch(url)
    let data = await response.json()

    return {
        ...data.contatos
    }
}
const nmSeiMais = await getContatos(1)

// console.log(await getContatos())