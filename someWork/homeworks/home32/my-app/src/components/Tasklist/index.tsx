import React from "react";
import { TasklistModel, Task } from "./models";
import "./style.css";

const testData = [
  {
    taskDescr: "Descr1",
    taskStatus: false,
  },
  {
    taskDescr: "Descr2",
    taskStatus: false,
  },
  {
    taskDescr: "Descr3",
    taskStatus: false,
  },
  {
    taskDescr: "Descr4",
    taskStatus: true,
  },
];

class Tasklist extends React.Component<
  TasklistModel.Props,
  TasklistModel.State
> {
  constructor(props: any) {
    super(props);
    this.state = {
      arrayOfTasks: testData,
      newTaskText: "",
    };
  }

  textChange = (e: any) => {
    this.setState({
      newTaskText: e.target.value,
    });
  };
  addNewTask = () => {
    const { arrayOfTasks, newTaskText } = this.state;
    this.setState({
      arrayOfTasks: [
        ...arrayOfTasks,
        {
          taskStatus: false,
          taskDescr: newTaskText,
        },
      ],
      newTaskText: "",
    });
  };
  taskStatusChange = (index: number, e: any) => {
    const { arrayOfTasks } = this.state;
    this.setState({
      arrayOfTasks: arrayOfTasks.map((item, i) =>
        i == index
          ? {
              ...item,
              taskStatus: e.target.checked,
            }
          : item
      ),
    });
  };
  taskDelete = (index: number) => {
    const { arrayOfTasks } = this.state;
    this.setState({
      arrayOfTasks: [
        ...arrayOfTasks.slice(0, index),
        ...arrayOfTasks.slice(index + 1),
      ],
    });
  };

  render() {
    return (
      <div>
        <h2>Task List</h2>
        <div className="row">
          <textarea
            onChange={this.textChange}
            value={this.state.newTaskText}
          ></textarea>
          <a className="btn" onClick={this.addNewTask}>
            Add task
          </a>
        </div>
        <div className="row">
          {this.state.arrayOfTasks.map((item, index) => {
            return (
              <div>
                <p
                  style={{
                    backgroundColor: item.taskStatus ? "green" : "red",
                  }}
                >
                  {item.taskDescr}
                </p>
                <input
                  type="checkbox"
                  checked={item.taskStatus}
                  onChange={(e: any) => this.taskStatusChange(index, e)}
                />
                <a className="btn" onClick={() => this.taskDelete(index)}>
                  Delete
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tasklist;
