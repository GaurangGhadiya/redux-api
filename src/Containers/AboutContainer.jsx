import { connect } from "react-redux";
import About from "../Components/About";
import { saveUser, updateUser } from "../Redux/Actions/UserAction";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(updateUser(data)),
  saveUser: (data) => dispatch(saveUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
