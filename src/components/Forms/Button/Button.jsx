import React from 'react';
import PropTypes from 'prop-types';
import ButtonTag from './style';

const center = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

const Button = ({ incrementIndex }) => (
  <div style={center}>
    <ButtonTag
      type="button"
      href="/"
      onClick={incrementIndex}
    >
      <p>Next</p>
    </ButtonTag>
  </div>
);

Button.defaultProps = {
  incrementIndex: {},
};

Button.propTypes = {
  incrementIndex: PropTypes.func,
};


export default Button;
