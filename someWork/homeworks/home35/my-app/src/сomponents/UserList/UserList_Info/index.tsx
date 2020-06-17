import React from "react";
import { Link } from "react-router-dom";
import { UserInfoModel } from "./models";

class UserList_Info extends React.Component<any, UserInfoModel.State> {
  constructor(props: any) {
    super(props);
    this.state = {
      userData: {
        id:  0,
        email:  '',
        first_name:  '',
        last_name:  '',
        avatar: '',
      },
      userAd: {
        company:  '',
        url:'',
        text:  '',
      },
      id: this.props.match.params.id,
    };
  }
  componentDidMount() {
    fetch(`https://reqres.in/api/users/${this.state.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userData: json.data,
          userAd: json.ad,
        });
      });
  }
  render() {
    return (
      <div className="info">
        <div>
          <h2>Profile Info</h2>
          <p>{this.state.userData.first_name}</p>
          <p>{this.state.userData.last_name}</p>
          <p>{this.state.userData.email}</p>
          <p>{this.state.userData.id}</p>
          <p>{this.state.userAd.company}</p>
          <p>{this.state.userAd.url}</p>
          <p>{this.state.userAd.text}</p>
        </div>
        <Link to="/userlist">Back</Link>
      </div>
    );
  }
}
export default UserList_Info;
