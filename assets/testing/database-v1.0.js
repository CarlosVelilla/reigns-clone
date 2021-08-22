let cards = {

  'card-1': {
    id: 'card-1',
    parentCard: false,
    content: {
      title: 'Title',
      advice: false,
      character: {
        name: 'Character',
        url: './assets/img/characters/character.jpg'
      }
    },
    accept: {
      toCard: 'card-2',
      action: 'accept',
      text: 'Accept text',
      modifiers: {
        religion: 0,
        population: 0,
        army: 0,
        money: 0,
        magic: 0
      }
    },
    decline: {
      toCard: 'card-3',
      action: 'decline',
      text: 'Decline text',
      modifiers: {
        religion: 0,
        population: 0,
        army: 0,
        money: 0,
        magic: 0
      }
    },
  },


  'card-2': {
    id: 'card-2',
    parentCard: 'card-1',
    content: {
      title: 'Remove catholic church and get their money',
      advice: 'You can\'t rule without church, but you can make them weaker',
      character: {
        name: 'Character',
        url: './assets/img/characters/character.jpg'
      }
    },
    accept: {
      toCard: 'card-4',
      action: 'accept',
      text: 'Accept text',
      modifiers: {
        religion: -3,
        population: 0,
        army: 0,
        money: 2,
        magic: 0
      }
    },
    decline: {
      toCard: 'card-5',
      action: 'decline',
      text: 'Decline text',
      modifiers: {
        religion: 1,
        population: 0,
        army: 0,
        money: 0,
        magic: 0
      }
    },
  },


  'card-3': {
    id: 'card-3',
    parentCard: 'card-1',
    content: {
      title: 'Title',
      advice: false,
      character: {
        name: 'Character',
        url: './assets/img/characters/character.jpg'
      }
    },
    accept: {
      toCard: 'card-6',
      action: 'accept',
      text: 'Accept text',
      modifiers: {
        religion: 0,
        population: 0,
        army: 0,
        money: 0,
        magic: 0
      }
    },
    decline: {
      toCard: 'card-7',
      action: 'decline',
      text: 'Decline text',
      modifiers: {
        religion: 0,
        population: 0,
        army: 0,
        money: 0,
        magic: 0
      }
    },
  },

}

export { cards }