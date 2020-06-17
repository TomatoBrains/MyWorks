import React from "react";
import { Post } from "../models";
import PostList_Comment from "../PostList_Comment";
import PostList_Like from "../PostList_Like";

interface Props {
  item: Post;
}

class PostList_Item extends React.Component<Props, any> {
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
      <div className="post__item">
        <div>
          <h3>Title</h3>
          <p>{this.props.item.title}</p>
          <h3>Description</h3>
          <p>{this.props.item.description}</p>
          <h3>Comment</h3>
          <PostList_Comment />
        </div>
        <PostList_Like />
      </div>
    );
  }
}

export default PostList_Item;
