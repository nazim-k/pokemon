import React, { useState, useEffect, useRef } from 'react';
import EvolutionListContainer from './EvolutionListContainer';
import { FlexBox } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { height: marginTop } = CONFIG.header.style;
const { numberOfLoadingPokemon, loadEvolutionListStep, startToLoadScrollPosition } = CONFIG;

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
  const pokemonContainerElement = useRef();

  /* eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    // Initial loading
    loadEvolutionLists();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ handleScroll ]);

  function handleScroll({ currentTarget }) {
    const { scrollY, innerHeight } = currentTarget;
    const { offsetHeight } = pokemonContainerElement.current;
    //Load New evolution lists when user scroll whole page down
    if (offsetHeight - scrollY - innerHeight + 2*marginTop <= startToLoadScrollPosition)
      loadEvolutionLists();
  }
  /* eslint-enable react-hooks/exhaustive-deps*/

  return <FlexBox
    ref={ pokemonContainerElement }
    as="section"
    height="auto"
    margin={ `${ marginTop }px 0` }
  >
    { evolutionList }
  </FlexBox>;

}

export default PokemonContainer;