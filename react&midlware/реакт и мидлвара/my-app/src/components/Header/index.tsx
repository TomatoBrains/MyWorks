import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Menu, MenuItem, MenuList } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { IRootState } from "../../reducers";
import { getUsers, getTodo } from "../../selectors";

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
        }
    }
    componentDidMount() {
        debugger
    }
    navChange = (newValue: any) => {
        this.setState({
            value: newValue
        })
    }
    render() {
        return <div>
            <MenuList className = 'navigation'>
                <MenuItem><Link to = '/'>Home</Link></MenuItem>
                <MenuItem><Link to = '/users'>Users</Link></MenuItem>
            </MenuList >
        </div>;
    }
}

const mapStateToProps = (state: IRootState) => ({
    todo: getTodo(state)
})
  
const mapDispatchToProps = {
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
