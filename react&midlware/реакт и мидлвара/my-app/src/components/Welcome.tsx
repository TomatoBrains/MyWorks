import React from "react";

class Welcome extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
          message: ''
      }
    }

    componentDidMount() {
        debugger
        console.log(new Date())
    }
    componentWillMount() {
        debugger
        console.log(new Date())
    }
    componentWillUnmount() {
        debugger
        console.log(new Date());
    }
    componentWillReceiveProps(nextProps: any) {
        debugger
        if(nextProps.counter > 3) {
            this.setState({
                message: 'ALIARMA, clicks more then 3'
            })
        }
    }
    render() {
      return <div>
        {this.state.message ? <h1>{this.state.message}</h1> : <h1>Hello {this.props.counter}</h1>}
      </div>;
    }
  }
  
export default Welcome;
  