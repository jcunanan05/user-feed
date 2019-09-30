import { connect } from "react-redux";
import UserList from "./UserList";

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(UserList);
