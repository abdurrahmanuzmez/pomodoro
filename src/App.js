import React, {Component} from 'react';
import {Header} from "./inc/nav-footer/header";

import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import {Break} from "./inc/timer/break";
import {Pomodoro} from "./inc/timer/pomodoro";
import List from "./inc/list";
import {Footer} from "./inc/nav-footer/footer";

class App extends Component{
  render() {

    const Home = () => (
        <Pomodoro/>
    );
    const Player = () => (
        <Break />
    );


    return (
      <div className="App" id="main">

        <Header/>
        <hr id="header-hr"/>

        <div className="timer">
          <Router>
            <ul className="pomodoro-buttons">
              <li className="pomodoro-btn">
                <Link className="link-css" to="/">
                    Pomodoro
                </Link>
              </li>
              <li>
                <Link className="link-css" to="/break">Brake</Link>
              </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/break" component={Player} />

          </Router>

        </div>
        <List />
        <Footer />
      </div>
    );
  }

}
export default App;
