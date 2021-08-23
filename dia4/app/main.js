import './style.css'

const url = 'http://localhost:3333/cars'

const table = document.querySelector('[data-js=table]')
const form = document.querySelector('[data-js=form-car]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const dadosCarro = {
    image: e.target.elements.image.value,
    brandModel: e.target.elements.model.value,
    year: e.target.elements.year.value,
    plate: e.target.elements.licensePlate.value,
    color: e.target.elements.color.value
  }

  console.log(dadosCarro)

  cadastrarCarro(dadosCarro)
})

async function cadastrarCarro(dados) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(
    listarCarros()
  )
  .catch(err => {console.log(err);})
}

function montarCarrosVazio() {
  const linha = setTexto('Nenhum carro encontrado')
  table.appendChild(linha)
}

function setTexto(value) {
  const coluna = document.createElement('td')
  coluna.textContent = value

  return coluna
}

function setImagem(value) {
  const coluna = document.createElement('img')
  coluna.src = value

  return coluna
}

function setCor(value) {
  const cor = document.createElement('div')
  cor.classList.add('cor')
  cor.style.backgroundColor = value

  return cor
}

function montarListaCarros(data) {
  data.forEach( item => {
    const linha = document.createElement('tr')
    linha.appendChild(setImagem(item.image))
    linha.appendChild(setTexto(item.brandModel))
    linha.appendChild(setTexto(item.year))
    linha.appendChild(setTexto(item.plate))
    linha.appendChild(setCor(item.color))

    table.appendChild(linha)
  })
}

async function listarCarros() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.length === 0 ? montarCarrosVazio() : montarListaCarros(data)
    })
}

listarCarros()
