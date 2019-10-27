import React from 'react';
import { FlexBox, Title } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { header } = CONFIG;

function Header() {

  return (
    <FlexBox as="header" position="fixed" topPosition="0" center middle { ...header.style }>
      <Title light>{ header.text }</Title>
    </FlexBox>
  );

}

export default Header;