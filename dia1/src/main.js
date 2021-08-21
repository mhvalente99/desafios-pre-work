import './style.css'

document.querySelector('[data-js=app]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const buttonVisibility = document.querySelector('[data-js=switch-visibility]')

buttonVisibility.addEventListener('click', (event) => {
  event.preventDefault()

  const div = document.querySelectorAll('[data-js=app]')
  const status = {
    true: () => {
      div[0].hidden = false
      buttonVisibility.innerHTML = "Esconder"
    },
    false: () => {
      div[0].hidden = true
      buttonVisibility.innerHTML = "Mostrar"
    }
  }

  status[div[0].hidden]()
}, false)
