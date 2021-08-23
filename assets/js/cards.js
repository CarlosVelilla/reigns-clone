// FUNCTIONS TO CREATE: FLIPCARD, ACCEPT/DECLINE CARD, MODIFY FACTORS

/* GLOBAL VARIABLES */
const URL = 'http://localhost:3000'

/* EVENT LISTENERS */
document.getElementById('decline-button').addEventListener('click', actionCard)
document.getElementById('accept-button').addEventListener('click', actionCard)

async function createCard(cardId) {
  /* LOCATING ELEMENTS IN DOM */
  const ACCEPTBTN = document.getElementById('accept-button')
  const DECLINEBTN = document.getElementById('decline-button')
  const TEXT = document.getElementById('card-text')
  const ADVICE = document.getElementById('card-advice')
  const CHARACTERIMAGE = document.getElementById('character-image')
  const CHARACTERNAME = document.getElementById('character-name')
  const CHARACTERCONTAINER = document.getElementById('character-container')

  /* PRINTING CARD TITLE AND ADVICE */
  fetch(`${URL}/content/${cardId}`)
    .then(response => response.json())
    .then(data => {
      ACCEPTBTN.setAttribute('data-cardid', data.id)
      DECLINEBTN.setAttribute('data-cardid', data.id)
      TEXT.textContent = data.title
      ADVICE.textContent = data.advice
    })

  /* PRINTING CHARACTER INFO */
  fetch(`${URL}/character/${cardId}`)
    .then(response => response.json())
    .then(data => {
      CHARACTERIMAGE.src = data.url
      CHARACTERNAME.textContent = data.name
      CHARACTERCONTAINER.style.backgroundColor = data.background
    })
}

async function actionCard(event) {
  let cardId = event.target.dataset.cardid
  let action = event.target.dataset.action
  let toCard

  await fetch(`${URL}/${action}/${cardId}`)
    .then(response => response.json())
    .then(data => {
      toCard = data.toCard
  })

  /* TODO: DISMISS CURRENT CARD, CREATE NEXT CARD (CREATELEMENT?), FLIP NEXT CARD */
}

export { createCard }