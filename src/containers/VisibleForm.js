import { connect } from 'react-redux';
import Forms from '../components/Forms';

const getIndex = state => ({
  index: state.todos,
});


export default connect(
  getIndex,
)(Forms);
