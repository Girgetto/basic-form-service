import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Button from './Button';

const inputDivStyle = { display: 'flex', margin: '4rem' };
const center = {
  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
};
const inputStyle = {
  margin: '0 3rem',
  width: '20rem',
  height: '5rem',
  fontSize: '4vmin',
  backgroundColor: '#424242',
  color: '#fff',
  border: 'none',
  borderBottom: '1px solid #fff',
};

const Inputs = [
  [
    { label: 'Type your first name:', name: 'name' },
    { label: 'Type your last name:', name: 'surname' },
  ],
  [
    { label: 'Insert your birth year:', name: 'birthYear' },
  ],
  [
    { final: true },
  ],
];
const Forms = ({ index }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ height: '25rem' }}>
      <h1>This is a simple form</h1>
      {Inputs[index].map(item => (
        <div key={item.label}>
          {item.final
            ? (
              <div style={center}>
                <h1>Final</h1>
              </div>
            )
            : (
              <div style={inputDivStyle}>
                <p>{item.label}</p>
                <input
                  key={item}
                  type="text"
                  name={item.name}
                  style={inputStyle}
                />
              </div>
            )}
        </div>
      ))}
    </div>
    <Button />
  </div>
);

Forms.defaultProps = {
  index: 0,
};

Forms.propTypes = {
  index: propTypes.number,
};

export default connect()(Forms);
