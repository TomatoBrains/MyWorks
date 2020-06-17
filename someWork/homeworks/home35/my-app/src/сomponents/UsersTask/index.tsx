import React from "react";
import { connect } from "react-redux";
import { IRootState } from "../../reducers";
import { getTasks, getUser, getAllUsers } from "../../selectors";
import * as actions from "../../actions";

class UsersTask extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      taskList: {
        taskId: 0,
        taskBody: "",
        taskStatus: false,
      },
    };
  }
  setTask = (e: any) => {
    const taskId = this.state.taskId;
    this.setState({
      taskBody: e.target.value,
      taskStatus: false,
      taskId: taskId + 1,
    });
  };
  clearInput = () => {
    this.setState({
      taskBody: "",
    });
  };
  render() {
    return (
      <div>
        <div className="post__form">
          <div>
            <p>Task</p>
            <input
              value={this.state.taskBody}
              onChange={(e) => this.setTask(e)}
            />
          </div>
          <div></div>
          <div>
            <a
              onClick={() => {
                this.props.addTask(this.state.taskBody);
                this.clearInput();
              }}
            >
              Add new task
            </a>
          </div>
        </div>
        <div>
          {this.props.userTask.elements.map((item: any, index: any) => (
            <div>
              {this.state.taskStatus == true ? console.log(1) : null}
              <p>{item.taskBody}</p>
              <a
                onClick={() => {
                  this.props.closeTask(index);
                }}
              >
                Close task
              </a>
            </div>
          ))}
        </div>
              <div>{this.props.match.params.id}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  userTask: getTasks(state),
  users: getUser(state),
  getAllUsers: getAllUsers(state),
});
const mapDispatchToProps = {
  addTask: actions.addTask,
  closeTask: actions.closeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTask);
