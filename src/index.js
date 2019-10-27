import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from 'Components';
import { PokemonContainer } from 'Containers';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header key="header"/>
    <PokemonContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);