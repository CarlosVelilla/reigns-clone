function showEditAvatar() {
  const mainContainer = document.getElementById("container");
  let generateModal = document.createElement("div");
  generateModal.id = "avatar-modal-container";
  generateModal.innerHTML = `
  <div id="avatar-modal" class="avatar__modal"></div>
  <div class="avatar__modal--window">
    <div class="avatar__modal--selection">
      <div class="avatar__modal--preview">
        <img id="image" class="avatar__image--edit" src="" alt="">
        <p id="input--name" class="avatar__name">Jessie XVI, the squalid</p>
        <button id="save-btn" class="save-btn">Save</button>
      </div>
      <div id="options-container" class="options-container">
      <h2 class="a-tittle">Personalize your character</h2>
        <div class="accordion">
          <div class="a-container">
              <p class="a-btn">Show top element?</p>
              <div id="topChance" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Top</p>
              <div id="top" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Hat Color</p>
              <div id="hatColor" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Hair color</p>
              <div id="hairColor" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Show accessories?</p>
              <div id="accessoriesChance" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Accessories</p>
              <div id="accessories" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">AccessoriesColor</p>
              <div id="accessoriesColor" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Clothes</p>
              <div id="clothes" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Clothes color</p>
              <div id="clothesColor" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Eyes</p>
              <div id="eyes" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Eyebrows</p>
              <div id="eyebrow" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Mouth</p>
              <div id="mouth" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Skin</p>
              <div id="skin" class="a-panel"></div>
          </div>
          <div class="a-container">
              <p class="a-btn">Clothe graphics</p>
              <div id="clotheGraphics" class="a-panel"></div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  


  mainContainer.appendChild(generateModal);
  const modalWindow = document.getElementById("avatar-modal");
  modalWindow.classList.add("show__modal");

  const saveBtn = document.getElementById("save-btn");
  saveBtn.addEventListener("click", saveAvatar);

  // TODO HABLAR SI BOTÓN SAVE GUARDA A LOCAL STORAGE

let seed = getRandomSeed(5)

let options = {
  hatColor: "undefined",
  hairColor: "undefined",
  accessories: "undefined",
  accessoriesColor: "undefined",
  clothes: "undefined",
  clothesColor: "undefined",
  eyes: "undefined",
  eyebrow: "undefined",
  mouth: "undefined",
  skin: "undefined",
  clotheGraphics: "undefined",
}

let optionsArrays = {
  topChance: ["0", "100"],
  top: ["none", "longHair", "shortHair", "eyepatch", "hat", "hijab", "turban", "bigHair", "bob", "bun", "curly", "curvy", "dreads", "frida", "fro", "froAndBand", "miaWallace", "longButNotTooLong", "shavedSides", "straight01", "straight02", "straightAndStrand", "dreads01", "dreads02", "frizzle", "shaggy", "shaggyMullet", "shortCurly", "shortFlat", "shortRound", "shortWaved", "sides", "theCaesar", "theCaesarAndSidePart", "winterHat01", "winterHat02", "winterHat03", "winterHat04"],
  hatColor: ["none", "black", "blue", "blue01", "blue02", "blue03", "gray", "gray01", "gray02", "heather", "pastel", "pastelBlue", "pastelGreen", "pastelOrange", "pastelRed", "pastelYellow", "pink", "red", "white"],
  hairColor: ["none", "auburn", "black", "blonde", "blondeGolden", "brown", "brownDark", "pastel", "pastelPink", "platinum", "red", "gray", "silverGray"],
  accessoriesChance: ["0", "100"],
  accessories: ["none", "kurt", "prescription01", "prescription02", "round", "sunglasses", "wayfarers"],
  accessoriesColor: ["none", "black", "blue", "blue01", "blue02", "blue03", "gray", "gray01", "gray02", "heather", "pastel", "pastelBlue", "pastelGreen", "pastelOrange", "pastelRed", "pastelYellow", "pink", "red", "white"],
  clothes: ["none", "blazer", "blazerAndShirt", "blazerAndSweater", "sweater", "collarAndSweater", "shirt", "graphicShirt", "shirtCrewNeck", "shirtScoopNeck", "shirtVNeck", "hoodie", "overall"],
  clothesColor: ["none", "black", "blue", "blue01", "blue02", "blue03", "gray", "gray01", "gray02", "heather", "pastel", "pastelBlue", "pastelGreen", "pastelOrange", "pastelRed", "pastelYellow", "pink", "red", "white"],
  eyes: ["none", "close", "closed", "cry", "default", "dizzy", "xDizzy", "roll", "eyeRoll", "happy", "hearts", "side", "squint", "surprised", "wink", "winkWacky"],
  eyebrow: ["none", "angry", "angryNatural", "default", "defaultNatural", "flat", "flatNatural", "raised", "raisedExcited", "raisedExcitedNatural", "sad", "sadConcerned", "sadConcernedNatural", "unibrow", "unibrowNatural", "up", "upDown", "upDownNatural", "frown", "frownNatural"],
  mouth: ["none", "concerned", "default", "disbelief", "eating", "grimace", "sad", "scream", "screamOpen", "serious", "smile", "tongue", "twinkle", "vomit"],
  skin: ["none", "tanned", "yellow", "pale", "light", "brown", "darkBrown", "black"],
  clotheGraphics: ["none", "skullOutline", "skull", "resist", "pizza", "hola", "diamond", "deer", "cumbia", "bear", "bat"]
}

document.getElementById("options-container").addEventListener("click", changeUrl)

function createModal() {
  document.getElementById("image").src = `https://avatars.dicebear.com/api/avataaars/${seed}.svg?`
  Object.keys(optionsArrays).forEach(position => createButtons(position))
}

function createButtons(position) {
  optionsArrays[position].forEach(option => {
    let button = document.createElement("button")
    if (optionsArrays[position].indexOf(option) == 0) {
      button.innerHTML = "&#128711;"
    } else if ((position == "topChance" || position == "accessoriesChance") && optionsArrays[position].indexOf(option) == 1 ) {
      button.innerHTML = "&#10003;"
    } else button.textContent = optionsArrays[position].indexOf(option)
    button.setAttribute("data-option", position)
    button.setAttribute("data-value", option)
    button.classList.add("avatar--options")
    let parentElement = document.getElementById(`${position}`)
    parentElement.appendChild(button)
  })
}

function changeUrl(event) {
  personalizeCharacter("set", event.target.dataset.option, event.target.dataset.value)
  document.getElementById("image").src = personalizeCharacter("get")
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

function personalizeCharacter(request, param, value) {
  if (request == "get") {
    let url = `https://avatars.dicebear.com/api/avataaars/${seed}.svg?`
    Object.keys(options).forEach(key => {
      let option = options[key]
      if (option != "undefined") {
        url += getOption(key)
      }
    })
    return url
  } else if (request == "set") {
    if (value == "none") {
      options[param] = "undefined"
    } else {
      options[param] = value
    }
  }
}

function getOption(key) {
  return `${key}=${options[key]}&`
}
createModal()
}

function saveAvatar() {
  let modalMainContainer = document.getElementById("avatar-modal-container");
  //Save avatar
  modalMainContainer.remove();
}

export {showEditAvatar};