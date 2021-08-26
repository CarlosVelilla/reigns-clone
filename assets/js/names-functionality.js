import { name, num, adjective } from "./names-data.js";

function getRandomName() {
  let characterName = name[getRandomNumber(name)];
  let characterNumber = num[getRandomNumber(num)];
  let characterAdjective = adjective[getRandomNumber(adjective)];
  return `${characterName} ${characterNumber}, the ${characterAdjective}`;
}

function getRandomNumber(type) {
  let min = getMin(type);
  let max = getMax(type);
  let amountNumbers = max - min + 1;
  let floatNumber = Math.random() * amountNumbers;
  let result = Math.floor(floatNumber) + min;
  return result;
}

function getMin(type) {
  return parseInt(Object.keys(type).slice(0));
}

function getMax(type) {
  return Object.keys(type).length;
}

export { getRandomName };
