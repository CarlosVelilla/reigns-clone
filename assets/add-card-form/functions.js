const URL = 'http://localhost:3000'
const FORM = document.getElementById('addCardForm')

FORM.addEventListener('submit', (event) => {
  event.preventDefault()
  let formData = new FormData(FORM)
  let parentCard = (formData.get('card-parent') == "") ? false : formData.get('card-parent')
  let advice = (formData.get('card-advice') == "") ? false : formData.get('card-advice')
  let randomUrlImg = (formData.get('card-url') == "") ? `https://avatars.dicebear.com/api/avataaars/${Math.ceil(Math.random()*100)}.svg` : formData.get('character-url')

  fetch(`${URL}/cards`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: formData.get('card-id'),
      parentCard: parentCard
    })})

  fetch(`${URL}/content`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: formData.get('card-id'),
      text: formData.get('card-text'),
      advice: advice
    })})

  fetch(`${URL}/character`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: formData.get('card-id'),
      name: formData.get('character-name'),
      background: formData.get('character-background'),
      url: randomUrlImg
    })})

  fetch(`${URL}/accept`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: formData.get('card-id'),
      toCard: formData.get('card-toCardAccept'),
      text: formData.get('card-textAccept')
    })})

  fetch(`${URL}/decline`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: formData.get('card-id'),
      toCard: formData.get('card-toCardDecline'),
      text: formData.get('card-textDecline')
    })})
    
  fetch(`${URL}/modifiers`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: `${formData.get('card-id')}-accept`,
      influence: parseInt(formData.get('influence-accept')),
      grades: parseInt(formData.get('grades-accept')),
      collection: parseInt(formData.get('collection-accept')),
    })})
        
  fetch(`${URL}/modifiers`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: `${formData.get('card-id')}-decline`,
      influence: parseInt(formData.get('influence-decline')),
      grades: parseInt(formData.get('grades-decline')),
      collection: parseInt(formData.get('collection-decline')),
    })})

})