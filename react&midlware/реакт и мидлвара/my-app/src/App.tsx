import React from 'react'
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import TodoList from './components/TodoList';
import PostList from './components/PostList';

import { Route, Switch, Router, BrowserRouter, Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";
import Header from './components/Header';
import UsersList from './components/UserDetailsInfo';
import DetailsUser from './components/DetailsUser'
const lightMuiTheme = getMuiTheme(lightBaseTheme);

/*

Функциональный подход
function Welcome() {
  return <h1>Hello</h1>;
}

export default Welcome;

*/

/*
Классовый подход
class Welcome extends React.Component<any, any> {
  render() {
    return <h1>Привет</h1>;
  }
}
*/

/*
Функциональный подход с пропсами
function Welcome(props: any) {
  return <h1>Hello {props.name}</h1>;
}


export default Welcome;*/


function Hello() {
  return (<div>        
      <Button variant="contained">Default</Button>
    </div>
  )
}

function Hello1() {
  return (<div>        
      <Button variant="contained">Default1</Button>
    </div>
  )
}
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      parentName: 'App',
      counter: 0
    }
  }

  countFunction = () => {
    const counter = this.state.counter;
    this.setState({
      counter: counter + 1
    })
  }
 
  render() {
    return <div>
       <MuiThemeProvider muiTheme={lightMuiTheme}>

          <Header />
          <Switch>
            <Route exact path='/' component={TodoList} />
            <Route exact path='/users' component={UsersList} />
            <Route path='/users/:id' component={DetailsUser} />

          </Switch>
      
        </MuiThemeProvider>     
    </div>
  }
}

export default App;



