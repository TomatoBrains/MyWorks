import React from "react";
import { UserListModel } from "./models";
import UserList_Item from "./UserList_Item";

class UserList extends React.Component<any, UserListModel.State> {
  constructor(props: any) {
    super(props);
    this.state = {
      userList: [],
      currentPage: 1,
      allPages: 2,
    };
  }

  componentDidMount() {
    this.goToPage(this.state.currentPage);
  }
  totalPages = () => {
    let pages = [];
    for (let i = 1; i <= this.state.allPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  goToPage = (newPageNumber: any) => {
    fetch(`https://reqres.in/api/users?page=${newPageNumber}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userList: json.data,
          allPages: json.total_pages,
          currentPage: json.page,
        });
      });
  };

  render() {
    const pages = this.totalPages();
    return (
      <div>
        <div className="users">
          {this.state.userList.map((item) => (
            <UserList_Item item={item} />
          ))}
        </div>
        <div className="nav">
          <div>
            {this.state.currentPage < this.state.allPages ? null : (
              <a onClick={(e) => this.goToPage(this.state.currentPage - 1)}>
                Prev
              </a>
            )}
          </div>
          <div>
            {pages.map((item) => (
              <span onClick={(e) => this.goToPage(item)} className="page">
                {item}
              </span>
            ))}
          </div>
          <div>
            {this.state.currentPage >= this.state.allPages ? null : (
              <a onClick={(e) => this.goToPage(this.state.currentPage + 1)}>
                Next
              </a>
            )}
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default UserList;
