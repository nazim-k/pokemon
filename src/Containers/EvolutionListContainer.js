import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { getPokemonEvolutionChainById } from 'pokeapi';
import { EvolutionList, ErrorMessage } from 'Components';
import CONFIG from 'CONFIG';

const { defaultForms } = CONFIG.evolutionList;

function EvolutionListContainer({ id }) {

  const [ evolutionChain, setEvolutionChain ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    getPokemonEvolutionChainById(id)
      .then(setEvolutionChain)
      .catch(setError);
  }, [ id ]);

  const forms = evolutionChain || defaultForms;

  if (error) return <ErrorMessage message={ error.message }/>;

  return <EvolutionList forms={ forms }/>;

}

EvolutionListContainer.propTypes = {
  id: PropTypes.number.isRequired
};

export default EvolutionListContainer;