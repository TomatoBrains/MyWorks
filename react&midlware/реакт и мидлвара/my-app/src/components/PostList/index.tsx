import React from 'react'
import { PostListModel } from './models';
import PostList_Form from './PostList_Form';
import PostList_Item from './PostList_Item';
import { connect } from 'react-redux';
import { getUsers } from '../../selectors';
import { IRootState } from '../../reducers';

class PostList extends React.Component<PostListModel.Props, PostListModel.State> {
    constructor(props: any) {
        super(props);
        this.state = {
            postList: [],
            form: {
                inputTitle: '',
                textareaDescription: ''
            }
        }
    }
    
    fieldChange = (e: any, fieldName: string) => {
        this.setState({
            form: {
                ...this.state.form,
                [fieldName]: e.target.value
            }
        })
    }

    addPost = () => {
        this.setState({
            postList: [...this.state.postList, {
                title: this.state.form.inputTitle,
                description: this.state.form.textareaDescription,
                like: false
            }],
            form: {
                inputTitle: '',
                textareaDescription: ''
            }
        })

        
    }
    render() {
        return (
            <div>
                <PostList_Form 
                    title = {this.state.form.inputTitle}
                    description =  {this.state.form.textareaDescription}
                    fieldChange = {this.fieldChange}
                    addPost = {this.addPost} />

                {this.state.postList.map(item => <PostList_Item item = {item}/>)}

                {this.props.users.data.map((item: any) => <span>{item}</span>)}
            </div>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    users: getUsers(state)
})
  
const mapDispatchToProps = {
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)
  
