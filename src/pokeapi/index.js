import CONFIG from '../../CONFIG';
import { getPockemonFormsFromEvolutionChain } from './helpers';
const { evolutionChainUrl } = CONFIG;

export const getPokemonEvolutionChainById = async id => {

  const response = await fetch(evolutionChainUrl(id));
  if (response.ok) {
    const evolution = await response.json();
    return getPockemonFormsFromEvolutionChain(evolution.chain);
  }

  throw new Error('HTTP Error');
};