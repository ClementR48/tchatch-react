import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { openSettings } from "../actions/chat"




const mapStateToProps = (state) => ({
  setOpen: state.openButtonSettings
});

const mapDispatchToProps = (dispatch) => ({
 toggleOpen: () => {
   const action = openSettings();

   dispatch(action)
},
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)