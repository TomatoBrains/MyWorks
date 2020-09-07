import React from "react";
import { TaskListModel, Task } from "./models";

import './style.css'
const testData = [
    {
        taskDescription: 'Description 1',
        taskStatus: false
    },
    {
        taskDescription: 'Description 2',
        taskStatus: false
    },
    {
        taskDescription:  'Description 3',
        taskStatus: true
    },
    {
        taskDescription: 'Description 4',
        taskStatus: false
    }
]

class TaskList extends React.Component<TaskListModel.Props, TaskListModel.State> {
    constructor(props: any) {
        super(props)
        this.state = {
            arrayOfTasks: testData,
            newTaskText: ''
        }
    }

    textChange = (e: any) => {
        this.setState({
            newTaskText: e.target.value
        })
    }
    addNewTask = () => {
       const {arrayOfTasks, newTaskText} = this.state; 

        this.setState({
            arrayOfTasks: [ ...arrayOfTasks, {
                taskStatus: false,
                taskDescription: newTaskText
            }],
            newTaskText: ''
        })
    }
    taskStatusChange = (index: number, event: any) => {
        const {arrayOfTasks} = this.state;
        debugger
        this.setState({
            arrayOfTasks: arrayOfTasks.map((item, i) => i == index ? {
                ...item,
                taskStatus: event.target.checked
            } : item)
        })
    }
    deleteTask = (index: number) => {
        const {arrayOfTasks} = this.state;
        debugger
        this.setState({
            arrayOfTasks: [
                ...arrayOfTasks.slice(0, index),
                ...arrayOfTasks.slice(index + 1)
            ]
        })
    }
    render() {
        const _self = this;
        return (
            <div>
                <h2>Task list</h2>
                <div className = "row">
                    <textarea onChange = {this.textChange} value = {this.state.newTaskText}></textarea>
                    <a className = 'btn' onClick = {this.addNewTask}>Add task</a>
                </div>
                <div>
                    {this.state.arrayOfTasks.map((item, index) => <div  className = "row">
                            <p style = {{
                                backgroundColor: item.taskStatus ? 'green' : 'red'
                            }}>{item.taskDescription}</p>
                            <input type = "checkbox" checked = {item.taskStatus} onChange = {(e: any) => this.taskStatusChange(index, e)}/>
                            <a className = 'btn' onClick = {() => this.deleteTask(index)}>Delete</a>
                        </div>
                    )}
                </div>
            </div>
            
        )
    }
}

export default TaskList