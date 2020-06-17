import React from "react";
import "./App.css";
import PostList from "./сomponents/PostList";
import UserList from "./сomponents/UserList";
import TodoList from "./сomponents/TodoList";
import Users from "./сomponents/Users";
import UsersTask from "./сomponents/UsersTask";
import UserList_Info from "./сomponents/UserList/UserList_Info";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/userlist">/userlist</Link>
        </li>
        <li>
          <Link to="/postlist">/postlist</Link>
        </li>
        <li>
          <Link to="/todoList">/todo</Link>
        </li>
        <li>
          <Link to="/users">/Users</Link>
        </li>
        <li>
          <Link to="/">/home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/userlist" component={UserList} />
        <Route exact path="/postlist" component={PostList} />
        <Route exact path="/todoList" component={TodoList} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/usersTask/:id" component={UsersTask} />
        <Route path="/userInfo/:id" component={UserList_Info} />
      </Switch>
    </div>
  );
}

export default App;
