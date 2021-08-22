import './style.css'

const url = 'http://localhost:3333/cars'

const table = document.querySelector('[data-js=table]')

function montarCarrosVazio() {
  const linha = document.createElement('tr')
  const coluna = document.createElement('td')

  coluna.textContent = 'Nenhum carro encontrado'

  linha.appendChild(coluna)
  table.appendChild(linha)
}

async function listarCarros() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.length === 0 ? montarCarrosVazio() : data
    })
}

listarCarros()
