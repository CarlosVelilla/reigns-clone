function createAvatars(num) {
  for (i = 0; i <= num; i++) {
    let container = document.createElement("div")
    container.classList.add("container")
    let imgElement = document.createElement("img")
    imgElement.classList.add("card")
    let seed = getRandomSeed(5)
    imgElement.src = `https://avatars.dicebear.com/api/avataaars/${seed}.svg`
    let textElement = document.createElement("input")
    textElement.classList.add("text")
    textElement.setAttribute("type", "text")
    textElement.textContent = seed
    textElement.value = seed
    textElement.id = seed
    let buttonElement = document.createElement("button")
    buttonElement.textContent = "Copy"
    buttonElement.setAttribute("onclick", `copyToClipboard("${seed}")`)
    container.appendChild(imgElement)
    container.appendChild(textElement)
    container.appendChild(buttonElement)
    let app = document.getElementById("app")
    app.appendChild(container)
  }
}

function copyToClipboard(seed) {
  navigator.clipboard.writeText(`https://avatars.dicebear.com/api/avataaars/${seed}.svg`)
}

function getRandomSeed(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

createAvatars(80)