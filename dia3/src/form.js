const nome = document.querySelector('[data-js=name]')

function trataNome(nome) {
  return nome.toLowerCase().replace(/(?:^|\s)(?!da\s|de\s|do\s|des\s|das\s|dos\s)\S/g, l => l.toUpperCase())
}

nome.addEventListener('input', (e) => {
  e.target.value = trataNome(e.target.value)
  console.log(e.target.value);
})
