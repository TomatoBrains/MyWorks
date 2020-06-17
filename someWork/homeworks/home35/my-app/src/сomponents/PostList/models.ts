export namespace PostListModel {
  export interface State {
    postList: Array<Post>;
    form: {
      inputTitle: string;
      textareaDescription: string;
    };
  }
  export interface Props {
    headerName: string;
    todo: any
  }
}

export class Post {
  title: string = "";
  description: string = "";
  like: boolean = false;
}
