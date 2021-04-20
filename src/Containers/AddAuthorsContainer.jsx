import { addUser } from "../Redux/Actions/UserAction";

import { connect } from "react-redux";
import AddAuthors from "../Components/AddAuthors";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(addUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAuthors);