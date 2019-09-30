import { connect } from "react-redux";
import NewUserButton from "./NewUserButton";
import actions from "../actions";

const mapDispatchToProps = dispatch => ({
  onFetchUser: () => dispatch(actions.fetchUser)
});

export default connect(
  null,
  mapDispatchToProps
)(NewUserButton);
