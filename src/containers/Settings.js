import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { openSettings, setEmail, setPassword, submitLogin } from "../actions/chat"




const mapStateToProps = (state) => ({
  setOpen: state.openButtonSettings,
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
 toggleOpen: () => {
   const action = openSettings();

   dispatch(action)
  },
  setEmail: (newValue) => {
    const action = setEmail(newValue);

    dispatch(action)
  },
  setPassword: (newValue) => {
    const action = setPassword(newValue);
    dispatch(action)
  },

  submitLogin: () => {
    const action = submitLogin();
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)