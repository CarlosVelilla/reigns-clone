import { getRandomName } from "./names-functionality.js";

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

function loadGame() {
  const mainContainer = document.getElementById("container");
  mainContainer.classList.add("disappear");
  setTimeout(() => {
    mainContainer.innerHTML = `
    <div class="container__card">
          <div class="container__card--values">
            <div
              class="
                container__card--attr
                icon-home
                flex-center
                point-amount
              " data-icon="home"
            ></div>
            <div
              class="
                container__card--attr
                icon-church
                flex-center
                point-amount
              "
              data-icon="church"
            ></div>
            <div
              class="
                container__card--attr
                icon-power
                flex-center
                point-amount
              "
              data-icon="power"
            ></div>
            <div
              class="
                container__card--attr
                icon-money
                flex-center
                point-amount
              "
              data-icon="money"
            ></div>
            <div
              class="
                container__card--attr
                icon-magic
                flex-center
                point-amount
              "
              data-icon="magic"
            ></div>
          </div>
          <div class="flip-card">
            <div class="flip-card--inner">
              <div class="container__card--info card-front" data-displayed="true">
                <div class="container__card--pic">
                  <img
                    src="https://avatars.dicebear.com/api/avataaars/4.svg"
                    alt="" data-image
                  />
                </div>
                <div class="container__card--character" id="character-name" data-name>
                  Name
                </div>
                <div class="container__card--text" id="card-text" data-text>
                  laborum quis ipsum ipsam incidunt voluptates doloribus illo
                  tempore?
                </div>
                <div class="container__card--advice" id="card-advice" data-advice>
                  laborum quis ipsum ipsam incidunt voluptates doloribus illo
                  tempore?
                </div>
              </div>
              <div class="container__card--info card-back" data-displayed="false">
                <div class="container__card--pic" id="character-container">
                  <img
                    src="https://avatars.dicebear.com/api/avataaars/5.svg"
                    alt="Character image"
                    data-image
                  />
                </div>
                <div class="container__card--character" data-name>
                  Name
                </div>
                <div class="container__card--text" data-text>
                  laborum quis ipsum ipsam incidunt voluptates doloribus illo
                  tempore?
                </div>
                <div class="container__card--advice" data-advice>
                  laborum quis ipsum ipsam incidunt voluptates doloribus illo
                  tempore?
                </div>
              </div>
            </div>
          </div>
          <div class="container__card--btns">
            <button
              class="container__cards--action"
              id="decline-button"
              data-action="decline"
            >
              Decline
            </button>
            <button
              class="container__cards--action"
              id="accept-button"
              data-action="accept"
            >
              Accept
            </button>
          </div>
        </div>`;
    mainContainer.classList.remove("disappear");
  }, 500);
}

export { fillName };
