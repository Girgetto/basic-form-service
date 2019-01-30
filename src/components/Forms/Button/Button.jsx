import React from 'react';
import propTypes from 'prop-types';
import ButtonTag from './style';

const center = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

const Button = ({ addIndex }) => (
  <div style={center}>
    <ButtonTag
      type="button"
      href="/"
      onClick={() => addIndex()}
    >
      <p style={center}>Next</p>
    </ButtonTag>
  </div>
);

Button.defaultProps = {
  addIndex: {},
};

Button.propTypes = {
  addIndex: propTypes.func,
};

export default Button;
