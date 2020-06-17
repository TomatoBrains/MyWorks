import React from "react";
import PostList_Like from "../PostList_Like";

class PostList_Comment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>My Comment</div>
        <PostList_Like />
      </div>
    );
  }
}

export default PostList_Comment;
