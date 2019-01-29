import React from 'react';
import MainDiv from './style';
import Forms from './Forms';

const Inputs = [
  [
    { label: 'Type your first name:', name: 'name' },
    { label: 'Type your last name:', name: 'surname' },
  ],
  [
    { label: 'Insert your age:', name: 'age' },
  ],
  [
    { final: true },
  ],
];

const App = () => (
  <MainDiv>
    <Forms Inputs={Inputs} />
  </MainDiv>
);

export default App;
