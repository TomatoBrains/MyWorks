import React from "react";
import { connect } from 'react-redux'
import { IRootState } from "../../reducers";

import { getUsers } from '../../selectors'

import * as actions from '../../actions'
import './styles.css'
import { Card, CardContent, Typography, CardActions, Button, Modal, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

class User {
    name: string = '';
    username: string = '';
    email: string = '';
    phone: string = '';
    website: string = '';
    company: boolean = false;
}

class UsersList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            user: null
        }
    }
    componentDidMount() {
        this.props.getUsers();
    }
    hadleClose = () => {
        this.setState({
            showModal: false
        })
    }
    showModal = () => {
        this.setState({
            showModal: true,
            user: new User()
        })
    }
    handleFieldChange = (value: any, name: any) => {
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value

            }
        })
    }
    render() {
        debugger
        return <div> 

            <Button size="small" onClick = {this.showModal}>Add User</Button>

            <div style = {{
                display: 'flex',
                flexWrap: 'wrap'
            }}>

          
           {this.props.users.data.map((item: any) => (
                <Card  style = {{
                   margin: '15px'
                }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {item.phone}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography  color="textSecondary">
                    {item.website}
                  </Typography>
                  <Typography variant="body2" component="p">
                  
                    {item.company.name}
                    <br />
                    {item.company.catchPhrase}
                    <br />
                    {item.company.bs}

                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
                  <Link to = {`users/${item.id}`}>Show more</Link>
                </CardActions>
               </Card>
           ))}
            <Modal
                open={this.state.showModal}
                onClose={this.hadleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {this.state.user ? this.renderForm() : <div></div>}
            </Modal>
        </div></div>;
    }

    renderForm = () => {
        const {user} = this.state;
        return (
            <form className = "addUser">
                <TextField
    
                    label="Name"
                    onChange = {(e) => this.handleFieldChange(e.target.value, 'name')}
                    value = {user.name}
                />
            </form>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    users: getUsers(state)
})
  
const mapDispatchToProps = {
    getUsers: actions.getUsers,
    addUser: actions.addUser,
    editUser: actions.editUser
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList)
  
