import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const inputDivStyle = { display: 'flex', margin: '4rem' };
const center = {
  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
};
const inputStyle = { margin: '0 3rem', borderRadius: '6px', width: '15rem' };
export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      name: '',
      surname: '',
      age: '',
    };
    this.incrementIndex = this.incrementIndex.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  incrementIndex() {
    const { index } = this.state;
    const { Inputs } = this.props;
    this.setState({ index: index < Inputs.length - 1 ? index + 1 : 0 });
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { Inputs } = this.props;
    const {
      index, name, surname, age,
    } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>This is a simple form</h1>
        {Inputs[index].map(item => (
          <div key={item.label}>
            {item.final
              ? (
                <div style={center}>
                  <h1>{name}</h1>
                  <h1>{surname}</h1>
                  <h1>{age}</h1>
                </div>
              )
              : (
                <div style={inputDivStyle}>
                  <p>{item.label}</p>
                  <input
                    key={item}
                    type="text"
                    name={item.name}
                    onKeyUp={e => this.handleInput(e)}
                    style={inputStyle}
                  />
                </div>
              )}
          </div>
        ))}
        <Button incrementIndex={this.incrementIndex} />
      </div>
    );
  }
}

Forms.defaultProps = {
  Inputs: [],
};

Forms.propTypes = {
  Inputs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};
