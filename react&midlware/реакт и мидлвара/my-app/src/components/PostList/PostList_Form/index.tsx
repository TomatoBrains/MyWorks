import React from 'react'

interface PostList_FormProps {
    title: string,
    description: string,
    fieldChange: any
    addPost: any
}

class PostList_Form extends React.Component<PostList_FormProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <div>

                    Title
                    <input value = {this.props.title} onChange = {
                        (e) => this.props.fieldChange(e, 'inputTitle')
                    }/>
                </div>
                <div>
                    Description
                    <textarea value = {this.props.description}  onChange = {
                        (e) => this.props.fieldChange(e, 'textareaDescription')
                    }/>
                </div>
                <div>
                    <a onClick = {this.props.addPost}>Add</a>
                </div>
            </div>
        )
    }
}

export default PostList_Form