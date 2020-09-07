import React from "react";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { IRootState } from "../../reducers";
import { getTodo } from "../../selectors";
import * as actions from '../../actions'
class TodoList extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        title: ''
      }
    }
    changeTitle = (event: any) => {
        this.setState({
            title: event.target.value
        })
    }
    render() {
        debugger
      return <div>
          <TextField 
            id="standard-basic" 
            label="Standard" 
            value = {this.state.title}
            onChange = {this.changeTitle}
        />
        <Button variant="contained" onClick = {() => this.props.setTodo(this.state.title)}>Default</Button>
        <div>
            {this.props.todo.elements.map((item: any) => <p>{item}</p>)}
        </div>
      </div>;
    }
  }
 
const mapStateToProps = (state: IRootState) => ({
    todo: getTodo(state)
})
  
const mapDispatchToProps = {
    setTodo: actions.setTodo
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
 
  