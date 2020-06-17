import React from "react";

class PostList_Like extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      like: false,
    };
  }
  likeStatusChange = (e: any) => {
    this.setState({
      like: e.target.cheked,
    });
  };
  render() {
    return (
      <div>
        <div className="post__input">
          <input
            className="input__like"
            type="checkbox"
            checked={this.state.like}
            onChange={(e: any) => this.likeStatusChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default PostList_Like;
