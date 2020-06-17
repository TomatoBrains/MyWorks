import React from "react";
import { connect } from "react-redux";
import { IRootState } from "../../reducers";
import { getUser, getAllUsers } from "../../selectors";
import * as actions from "../../actions";
import { UsersModel } from "./models";
import { Link } from "react-router-dom";
import UsersTask from "../UsersTask";

class Users extends React.Component<any, UsersModel.State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      id: 0,
    };
  }
  setName = (e: any) => {
    this.setState({
      name: e.target.value,
    });
  };
  setSurName = (e: any) => {
    this.setState({
      surname: e.target.value,
    });
  };
  setId = () => {
    this.setState({
      id: this.state.id + 1,
    });
  };
  clearInput = () => {
    this.setState({
      name: "",
      surname: "",
    });
  };
  render() {
    return (
      <div>
        <div className="post__form">
          <div>
            <p>Name</p>
            <input value={this.state.name} onChange={(e) => this.setName(e)} />
          </div>
          <div>
            <p>SurName</p>
            <input
              value={this.state.surname}
              onChange={(e) => this.setSurName(e)}
            />
          </div>
          <div>
            <a
              onClick={() => {
                this.props.newUser(
                  this.state.name,
                  this.state.surname,
                  this.state.id
                );
                this.setId();
                this.clearInput();
              }}
            >
              Add new user
            </a>
          </div>
        </div>
        <div>
          {this.props.getAllUsers.elements.map((item: any, index: any) => (
            <div>
              <p>{item.name + " " + item.surname}</p>
              <p>{item.id}</p>
              <Link to={`/usersTask/${item.id}`}>Show task</Link>
              <a onClick={() => this.props.deleteUser(index)}>Delete</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  getAllUsers: getAllUsers(state),
  getUser: getUser(state) 
});
const mapDispatchToProps = {
  newUser: actions.newUser,
  deleteUser: actions.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
