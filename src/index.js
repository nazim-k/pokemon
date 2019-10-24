import React from 'react';
import ReactDOM from 'react-dom';
import { FlexBox } from 'Components/StyledComponents';
import './index.css';

function App() {

  return <FlexBox center middle width="100vw" height="100vh" bg="orange">
    Pokemon Challenge
  </FlexBox>;

}

ReactDOM.render(
  <App src="asd" date={{ alskdjg: 'asd' }}/>,
  document.getElementById('root')
);