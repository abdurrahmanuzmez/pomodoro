import React, {Component} from 'react';
import {Header} from "./inc/header";

import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import {VideoPlayer} from "./inc/video-player";
import {Break} from "./inc/break";
import {Pomodoro} from "./inc/pomodoro";
import List from "./inc/list";

class App extends Component{

  render() {

    const Home = () => (
        <Pomodoro/>
    );
    const Player = () => (
        <Break />
    );

    return (
      <div className="App">

        <Header/>
        <hr />

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

      </div>
    );
  }

}
export default App;
