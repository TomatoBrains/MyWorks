import React from "react";
import { connect } from "react-redux";
import { IRootState } from "../../reducers";
import { getUserDetails, getUserTasks } from "../../selectors";
import * as actions from '../../actions'
import './styles.css'
import { TextField, Button } from "@material-ui/core";

export interface DetailsUser_State {
    task: any
}
export interface DetailsUser_Props {
    match: any,
    user: any,
    getUsers: any,
    tasks: any,
    addUserTask: any
}

class DetailsUser extends React.Component<DetailsUser_Props, DetailsUser_State> {
    constructor(props: any) {
        super(props);
        this.state = {
            task: {
                taskId: -1,
                taskTitle: '',
                taskStatus: false
            }
        }
    }

    componentDidMount() {
        this.props.getUsers()
    }
    handleFieldChange = (value: any, name: any) => {
        this.setState({
            task: {
                ...this.state.task,
                [name]: value
            }
        })
    }
    addTask = () => {
        this.props.addUserTask({
            ...this.state.task,
            taskId: this.props.tasks ? this.props.tasks.listOfTasks.length : 0
        }, this.props.match.params.id);
        this.setState({
            task: {
                taskId: -1,
                taskTitle: '',
                taskStatus: false
            }
        })
    }
    render() {
        return <div>
            <p>{this.props.user.name}</p>
            
            <p>{this.props.user.email}</p>
            
            <p>{this.props.user.phone}</p>
            <form className = "addUser">
                <TextField
                    value = {this.state.task.taskTitle}
                    label="Name"
                    onChange = {(e) => this.handleFieldChange(e.target.value, 'taskTitle')}
                />
                <Button size="small" onClick = {this.addTask}>Edit</Button>
            </form>
            <div>
                Tasks
                {this.props.tasks ? this.props.tasks.listOfTasks.map((item: any) => 
                <p>{item.taskTitle}</p>) : ''}
                <div className = "row">
                    <div className = "col">

                    </div>
                    <div className = "col">

                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state: IRootState, ownProps: any) => ({
    user: getUserDetails(state, ownProps.match.params.id),
    tasks: getUserTasks(state, ownProps.match.params.id)
})

const mapDispatchToProps = {
    getUsers: actions.getUsers,
    addUserTask: actions.addUserTask
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsUser)
