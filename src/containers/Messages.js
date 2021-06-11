import { connect } from 'react-redux';
import Messages from '../components/Messages';




const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Messages)