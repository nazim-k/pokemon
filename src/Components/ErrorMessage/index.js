import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Paragraph } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { style } = CONFIG.evolutionList;

function ErrorMessage({ message }) {

  return (
    <FlexBox row { ...style }>
      <Paragraph red>{ message }</Paragraph>
    </FlexBox>
  );
}

ErrorMessage.defaultProps = {
  message: 'Oops something went wrong'
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;