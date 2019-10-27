import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox } from 'Components/StyledComponents';
import { PokemonCard } from 'Components';
import CONFIG from 'CONFIG';

const { style } = CONFIG.evolutionList;

function EvolutionList({ forms }) {

  return <FlexBox as="section" wrapRow left row { ...style }>
    {
      forms.map( (form, index) => (
        <PokemonCard key={ index } { ...form }/>
      ))
    }
  </FlexBox>;

}


EvolutionList.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EvolutionList;