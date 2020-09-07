import React from 'react'
import {Post} from '../models'
interface Props {
    item: Post
}

class PostList_Item extends React.Component<Props, any> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <p>{this.props.item.title}</p>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

export default PostList_Item