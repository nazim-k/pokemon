import React, { useState, useEffect } from 'react';
import EvolutionListContainer from './EvolutionListContainer';
import { OverflowDivision } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { height: marginTop } = CONFIG.header.style;
const { numberOfLoadingPokemon, loadEvolutionListStep, startToLoadScrollPosition, pokemonContainer } = CONFIG;

function useEvolutionList() {

  const [ evolutionList, setEvolutionList ] = useState([]);

  function loadEvolutionLists() {
    const newList = [];
    let i = evolutionList.length + 1;
    let lastId = i + loadEvolutionListStep;
    if (lastId < numberOfLoadingPokemon) {
      for (let i = evolutionList.length + 1; i <= lastId; i++) {
        newList.push(
          <EvolutionListContainer key={ i } id={ i }/>
        );
      }
      setEvolutionList([ ...evolutionList, ...newList ]);
    }
  }

  return { evolutionList, loadEvolutionLists };

}

function PokemonContainer() {

  const { evolutionList, loadEvolutionLists } = useEvolutionList();

  /* eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    // Initila loading
    loadEvolutionLists();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps*/

  function handleScroll({ target }) {
    //Load New evolution lists when user scroll whole page down
    const { scrollHeight, scrollTop, clientHeight } = target;
    if (scrollHeight - scrollTop - clientHeight <= startToLoadScrollPosition)
      loadEvolutionLists();
  }

  return <OverflowDivision
    as="section"
    height={ pokemonContainer.style.height }
    margin={ `${ marginTop } 0` }
    onScroll={ handleScroll }
  >
    { evolutionList }
  </OverflowDivision>;

}

export default PokemonContainer;