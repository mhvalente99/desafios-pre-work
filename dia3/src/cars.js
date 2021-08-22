const form = document.querySelector('[data-js=form-car]')
const table = document.querySelector('[data-js=table]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const dadosCarro = {
    model:e.target.elements.model.value,
    year:e.target.elements.year.value,
    licensePlate:e.target.elements.licensePlate.value
  }

  const linha = document.createElement('tr')
  const img = document.createElement('img')
  img.src = e.target.elements.image.value

  linha.appendChild(img)


  Object.keys(dadosCarro).forEach(item => {
    const dados = document.createElement('td')
    dados.textContent = dadosCarro[item]
    linha.appendChild(dados)
  })

  const cor = document.createElement('div')
  cor.classList.add('cor')
  cor.style.backgroundColor = e.target.elements.color.value

  linha.appendChild(cor)

  table.appendChild(linha)

  form.reset()
  form.image.focus()
})
