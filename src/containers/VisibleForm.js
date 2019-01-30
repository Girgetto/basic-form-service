import { connect } from 'react-redux';
import Forms from '../components/Forms';
import { incrementIndex } from '../actions';

const getIndex = state => ({
  index: state.todos,
});

const addIndex = dispatch => ({
  addIndex: () => dispatch(incrementIndex()),
});


export default connect(
  getIndex,
  addIndex,
)(Forms);
