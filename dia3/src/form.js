const nome = document.querySelector('[data-js=name]')

function trataNome(nome) {
  return nome.toLowerCase().replace(/(?:^|\s)(?!da\s|de\s|do\s|des\s|das\s|dos\s)\S/g, l => l.toUpperCase())
}

nome.addEventListener('input', (e) => {
  e.target.value = trataNome(e.target.value)
  console.log(e.target.value);
})

const cor = [
  {
    nome: 'Verde',
    rgb: '#00FF00'
  },
  {
    nome: 'Vermelho',
    rgb: '#FF0000'
  },
  {
    nome: 'Azul',
    rgb: '#0000FF'
  },
  {
    nome: 'Amarelo',
    rgb: '#FFFF00'
  },
  {
    nome: 'Preto',
    rgb: '#000000'
  }
]

const cores = document.createElement('select')
cores.multiple = true

cor.forEach((cor) => {
  const option = document.createElement('option')
  option.value = cor.rgb
  option.text = cor.nome

  cores.appendChild(option)
})

console.log(cores);

const form = document.querySelector('[data-js=form]')
form.appendChild(cores)

cores.addEventListener('change', (e) => {
  const listaQuadrado = document.querySelector('[data-js=lista-quadrado]')
  listaQuadrado.innerHTML = '';

  [...e.target.options].map(item => {
    if (item.selected) {
      const quadrado = document.createElement('div')
      quadrado.style.width = '100px'
      quadrado.style.height = '100px'
      quadrado.style.display = 'block'
      quadrado.style.backgroundColor = item.value
      quadrado.setAttribute('data-quadrado',"")

      listaQuadrado.appendChild(quadrado)
    }
  });
})
