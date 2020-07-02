import React, {Component} from 'react';
import {TranscForm} from "./transcription-form";
import {TranscList} from "./transcription-list";

import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import {Pomodoro} from "./pomodoro";
import {Break} from "./break";

import axios from 'axios';
import UserForm from "./components/UserForm";

class List extends Component{
    state = {
        tasks: null
    }
    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        if (user) {
            axios.get(`https://api.github.com/users/${user}`)
                .then((res) => {
                    const tasks = res.data.public_repos;
                    this.setState({ tasks });
                    console.log(res.data)
                })
        } else return;
    }

    constructor(){
        super();

        this.state = {myTransc: [
                {text: "Example Task", time: 1},
            ]};
        this.addTranscription = this.addTranscription.bind(this);
        this.removeTranscription = this.removeTranscription.bind(this);
    }

    addTranscription(val, valTime){
        let updateList = this.state.myTransc;
        updateList.push({text: val, time: valTime});
        this.setState({myTransc: updateList});
    }

    removeTranscription(task_id){
        task_id = task_id.replace('task_','');
        let updateList = this.state.myTransc;
        updateList.splice(task_id,1);
        this.setState({myTransc: updateList});
    }


    render() {

        const Form = () => (
            <TranscForm addTranscription={this.addTranscription}/>
        );
        const List = () => (
            <div>
                <UserForm getUser={this.getUser} />
                { this.state.tasks ? <p>Number of tasks: { this.state.tasks }</p> : <p>Please enter a username.</p> }
                {/*<TranscList myTransc={this.state.myTransc}
                        removeTranscription={this.removeTranscription}/>*/}

            </div>
        );

        return (
            <div className="list-css">
                <h3 id="white">
                    Tasks
                </h3>
                <hr id="list-hr"/>
                <Router>

                    <Link className="link-css" to="/list">
                        Tasks
                    </Link>
                    <br/>
                    <Link className="link-css" to="/form">Add Task +</Link>

                    <Route path="/form" component={Form} />
                    <Route path="/list" component={List} />

                </Router>


            </div>
        );
    }

}
export default List;
