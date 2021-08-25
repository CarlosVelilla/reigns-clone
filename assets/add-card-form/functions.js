const URL = 'http://localhost:3000'
const FORM = document.getElementById('addCardForm')

FORM.addEventListener('submit', (event) => {
  event.preventDefault()
  let formData = new FormData(FORM)
  let parentCardText = (formData.get('card-parent') == "") ? false : formData.get('card-parent')
  let advice = (formData.get('card-advice') == "") ? false : formData.get('card-advice')
  let randomUrlImg = `https://avatars.dicebear.com/api/avataaars/${Math.ceil(Math.random()*100)}.svg`

  fetch(`${URL}/cards`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: formData.get('card-id'),
      parentCard: parentCardText
    })})

  fetch(`${URL}/content`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: formData.get('card-id'),
      title: formData.get('card-title'),
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
      // url: formData.get('character-url')
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
      religion: parseInt(formData.get('religion-accept')),
      population: parseInt(formData.get('population-accept')),
      army: parseInt(formData.get('army-accept')),
      money: parseInt(formData.get('money-accept')),
      magic: parseInt(formData.get('magic-accept')),
    })})
        
  fetch(`${URL}/modifiers`, {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      id: `${formData.get('card-id')}-decline`,
      religion: parseInt(formData.get('religion-decline')),
      population: parseInt(formData.get('population-decline')),
      army: parseInt(formData.get('army-decline')),
      money: parseInt(formData.get('money-decline')),
      magic: parseInt(formData.get('magic-decline')),
    })})

})