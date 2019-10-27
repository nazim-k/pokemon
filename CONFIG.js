export default {
  pokemonImageUrl: id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`,
  evolutionChainUrl: id => `https://pokeapi.co/api/v2/evolution-chain/${ id }`,
  numberOfLoadingPokemon: 150,
  loadEvolutionListStep: 10,
  startToLoadScrollPosition: 10,
  header: {
    style: {
      height: '10vh',
      bg: '#2d3748',
    },
    text: 'React Pokemon Challenge'
  },
  pokemonContainer: {
    style: {
      height: '90vh',
    }
  },
  evolutionList: {
    style: {
      height: 'auto',
      minWidth: '560px',
      maxWidth: '1200px',
      width: '70%',
      margin: '25px auto 0',
      padding: '0 0 25px',
      borderBottom: '1px solid #a0aec0'
    },
    defaultForms: [
      {
        imgSrc: '',
        name: '',
        number: 0
      },
      {
        imgSrc: '',
        name: '',
        number: 0
      },
      {
        imgSrc: '',
        name: '',
        number: 0
      }
    ]
  },
  pokemonCard: {
    style: {
      height: '165px',
      width: '165px',
      boxShadow: '0px 5px 10px #a0aec0',
      margin: '15px',
      bg: '#fff'
    },
    avatarStyle: {
      size: '80px',
      padding: '10px'
    },
    numberPrefix: 'number:',
    namePrefix: ''
  }
}