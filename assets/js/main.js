import { fillName } from "./home.js";

fillName();

function upgradeBar(points) {
  let progressBarValue = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--progress-bar");

  let actualProgressBar = parseInt(progressBarValue) + points;
  document.documentElement.style.setProperty(
    "--progress-bar",
    actualProgressBar
  );
}
