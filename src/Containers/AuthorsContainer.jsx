import { connect } from "react-redux";
import Authors from "../Components/Authors";
import { deleteUser, updateUser, userData } from "../Redux/Actions/UserAction";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  userData: (data) => dispatch(userData(data)),
  deleteUser: (id) => dispatch(deleteUser(id)),
  updateUser : (id) => dispatch(updateUser(id))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
