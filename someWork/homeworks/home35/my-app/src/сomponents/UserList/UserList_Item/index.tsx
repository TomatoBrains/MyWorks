import React from "react";
import { Link } from "react-router-dom";

class UserList_Item extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user">
        <div>
          {this.props.item.first_name}
          {this.props.item.last_name}
        </div>
        <img src={this.props.item.avatar} alt="" />
        <div>
          <Link to={`/userInfo/${this.props.item.id}`}>More Info</Link>
        </div>
      </div>
    );
  }
}

export default UserList_Item;
