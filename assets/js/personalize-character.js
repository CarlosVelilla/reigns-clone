// TODO HABLAR SI BOTÓN SAVE GUARDA A LOCAL STORAGE

let seed = 'pepito' // TODO PENDING BRING SEED FROM PREVIOUS GENERAL SELECTION

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

function personalizeCharacter(request, param, value) {
  if (request == "get") {
    let url = `https://avatars.dicebear.com/api/avataaars/${seed}.svg?`
    Object.keys(options).forEach(key => {
      let option = options[key]
      if (option != "undefined") {
        url += getOption(key)
      }
    })
    console.log(url);
    // return url
  } else if (request == "set") {
    options[param] = value
  }
}

function getOption(key) {
  return `${key}=${options[key]}&`
}

personalizeCharacter("set", "hatColor", "black")
personalizeCharacter("get")











// console.log(`https://avatars.dicebear.com/api/avataaars/${seed}.svg?hatColor=${options.hatColor}&hairColor=${options.hairColor}&accessories=${options.accessories}&accessoriesColor=${options.accessoriesColor}&facialHair=${options.facialHair}&facialHairColor=${options.facialHairColor}&clothes=${options.clothes}&clothesColor=${options.clothesColor}&eyes=${options.eyes}&eyebrow=${options.eyebrow}&mouth=${options.mouth}&skin=${options.skin}&clotheGraphics=${options.clotheGraphics}`)



/* TEST */

// let test12 = {
//   atr1: "pepito",
//   atr2: "fulanito"
// }


// function urlFunction(request, param, value) {
//   if (request == "get") {
//     console.log(`Hola ${test12.atr1}. Qué tal ${test12.atr2}`)
//   } else if (request == "set") {
//     test12[param] = value
//     console.log(test12);
//   }
// }

// console.log("request get: "+urlFunction("get"));
// console.log("request set: "+urlFunction("set", "atr2", "juanito"));

// urlFunction("set", "atr2", "juanito")
// urlFunction("get")