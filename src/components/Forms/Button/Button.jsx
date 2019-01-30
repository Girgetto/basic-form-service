import React from 'react';
import ButtonTag from './style';

const center = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

const Button = () => (
  <div style={center}>
    <ButtonTag
      type="button"
      href="/"
    >
      <p style={center}>Next</p>
    </ButtonTag>
  </div>
);

export default Button;
