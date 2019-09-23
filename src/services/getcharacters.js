const ENDPOINT = 'https://rickandmortyapi.com/api/character/';
const NEWENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'

const getCharacters = () => {
  return(
    fetch(NEWENDPOINT)
    .then(response => response.json())
  )
}

export  {getCharacters}; 