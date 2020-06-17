import React from "react";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { IRootState } from "../../reducers";
import { getTodo } from "../../selectors";
import * as actions from "../../actions";

class TodoList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      todoArray: [this.props.todo.elemets],
    };
  }

  changeTitle = (event: any) => {
    this.setState({
      title: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <TextField
          id="standard-basic"
          label="Standard"
          value={this.state.title}
          onChange={this.changeTitle}
        />
        <Button
          variant="contained"
          onClick={() => this.props.setTodo(this.state.title)}
        >
          Default
        </Button>
        <div>
          {this.props.todo.elements.map((item: any, index: any) => (
            <div>
              <p>#{index}</p>
              <p>{item}</p>
              <button onClick={() => this.props.editTodo(index)}>Edit</button>
              <button onClick={() => this.props.deleteTodo(index)}>
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  todo: getTodo(state),
});
const mapDispatchToProps = {
  setTodo: actions.setTodo,
  deleteTodo: actions.deleteTodo,
  editTodo: actions.editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
