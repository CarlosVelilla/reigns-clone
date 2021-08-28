import { getRandomName } from "./names-functionality.js";
import { createCard, nextCard } from "./cards.js";

//Variables
const inputDice = document.getElementById("input--dice");
const playBtn = document.getElementById("start");

//Event Listeners
inputDice.addEventListener("click", fillName);
playBtn.addEventListener("click", loadGame);

function fillName() {
  const inputName = document.getElementById("input--name");
  inputName.textContent = getRandomName();
}

const creditBtn = document.getElementById("credits");
creditBtn.addEventListener("click", showModal);

function showModal() {
  const mainContainer = document.getElementById("container");
  let generateModal = document.createElement("div");
  generateModal.id = "credits-modal-container";
  generateModal.innerHTML = `
  <div id="credits-modal" class="credits__modal"></div>
  <div class="credits__modal--window">
    <div id="close-btn" class="close__btn">&#10799;</div>
    <div class="credits__modal--text">
        <h1 class="credits--title">Credits</h1>
        <p class="credits--paraph">Carlos Velilla <a class="credits--link" href="https://github.com/CarlosVelilla" target="_blank">GitHub</a></p>
        <p class="credits--paraph">Salvador Gómez <a class="credits--link" href="https://github.com/SalvaBandicoot" target="_blank">GitHub</a></p>
        <hr>
        <h1 class="credits--title">Resources</h1>
        <p class="credits--paraph">Background SVG <a class="credits--link" href="https://www.svgbackgrounds.com/" target="_blank">SVG Backgrounds</a></p>
        <p class="credits--paraph">Avatars <a class="credits--link" href="https://avatars.dicebear.com/styles/avataaars" target="_blank">DiceBear Avatars</a></p>
        <p class="credits--paraph">Music <a class="credits--link" href="" target="_blank">Music</a></p>
    </div>
  </div>`;
  mainContainer.appendChild(generateModal);
  const modalWindow = document.getElementById("credits-modal");
  modalWindow.classList.add("show__modal");

  const modalBackground = document.getElementById("credits-modal");
  modalBackground.addEventListener("click", closeModal);
  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", closeModal);
}

const avatartBtn = document.getElementById("avatar-edit");
avatartBtn.addEventListener("click", showEditAvatar);

function showEditAvatar() {
  const mainContainer = document.getElementById("container");
  let generateModal = document.createElement("div");
  generateModal.id = "avatar-modal-container";
  generateModal.innerHTML = `
  <div id="avatar-modal" class="avatar__modal"></div>
  <div class="avatar__modal--window">
    <div class="avatar__modal--selection">
    <img id="image" class="avatar__image--edit" src="" alt="">
    <div id="options-container">
      <div id="topChance">Show top element?</div>
      <div id="top">Top</div>
      <div id="hatColor">Hat color</div>
      <div id="hairColor">Hair color</div>
      <div id="accessoriesChance">Show accessories?</div>
      <div id="accessories">Accessories</div>
      <div id="accessoriesColor">AccessoriesColor</div>
      <div id="clothes">Clothes</div>
      <div id="clothesColor">Clothes color</div>
      <div id="eyes">Eyes</div>
      <div id="eyebrow">Eyebrows</div>
      <div id="mouth">Mouth</div>
      <div id="skin">Skin</div>
      <div id="clotheGraphics">Clothe graphics</div>
    </div><button id="save-btn">Save</button>
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
  facialHair: "undefined",
  facialHairColor: "undefined",
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

function closeModal() {
  let modalMainContainer = document.getElementById("credits-modal-container");
  modalMainContainer.remove();
}

function loadGame() {
  const mainContainer = document.getElementById("container");
  mainContainer.classList.add("disappear");
  setTimeout(() => {
    mainContainer.innerHTML = `<div class="container__card">
    <div class="container__card--values">
      <!-- Points -->
      <div class="container__card--attr point-amount icon-influence" data-icon="influence">
      </div>
      <div class="container__card--attr point-amount icon-collection" data-icon="collection">
      </div>
      <div class="container__card--attr point-amount icon-grades" data-icon="grades">
      </div>
      <div></div>
      <div class="point-out"><div id="progress-bar" class="point-in point-width"></div></div>
    </div>
    <div>
      <!-- Character -->
      <div class="character--container">
        <!-- Pic & Name -->
        <div class="flip-card">
          <div id="flip-card--inner" class="flip-card--inner">
            <div class="container__card--pic card-front" data-displayed='true'>
              <img
                class="character--img"
                src=""
                alt=""
                data-image
              />
              <div
                class="container__card--character"
                id="character-name"
                data-name
              >
              </div>
            </div>
            <div class="container__card--pic card-back" data-displayed='false'>
              <img
                class="character--img"
                src=""
                alt=""
                data-image
              />
              <div
                class="container__card--character"
                id="character-name"
                data-name
              >
              </div>
            </div>
          </div>
        </div>
        <div class="container__card--text" id="card-text" data-text>
        </div>
      </div>
    </div>
    <div class="container--decission">
      <div class="decission--advice" data-advice>
      </div>
      <!-- Advice -->
      <div class="container__card--btns">
        <button
          class="container__cards--action"
          id="decline-button"
          data-cardid="card-1"
          data-action="decline"
          data-toCard="card-3"
        >
        </button>
        <button
          class="container__cards--action"
          id="accept-button"
          data-cardid="card-1"
          data-action="accept"
          data-toCard="card-2"
        >
        </button>
      </div>
      <!-- Buttons -->
    </div>
  </div>
   `;
    createCard("card-1", false);
    mainContainer.classList.remove("disappear");
    document
      .getElementById("decline-button")
      .addEventListener("click", nextCard);
    document
      .getElementById("accept-button")
      .addEventListener("click", nextCard);
    generateIcons();
  }, 500);
}

function generateIcons() {
  const pointsIcon = document.querySelectorAll("[data-icon]");
  let pointsValue = "pa-5";
  pointsIcon.forEach((point) => {
    point.classList.remove(
      "pa-1",
      "pa-2",
      "pa-3",
      "pa-4",
      "pa-5",
      "pa-6",
      "pa-7",
      "pa-8",
      "pa-9",
      "pa-10"
    );
    point.classList.add(pointsValue);
  });
}

export { fillName };
