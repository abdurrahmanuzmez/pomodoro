import React, {Component} from 'react';
import {TaskForm} from "./tasks/TaskForm";

import {BrowserRouter as Router, Route, Link } from "react-router-dom"

import axios from 'axios';
import TaskList from "./tasks/TaskList";

class List extends Component{

    constructor(){
        super();
        this.state = { myList:[
                {
                    tasks: '',
                    time: '',
                }]
        };
        axios.get(`http://localhost:3000/jsons/json1`)
            .then((res) => {
                var a = Object.keys(res.data.response).length;
                for (var i = 0; i < a; i++){
                    let updateList = this.state.myList;
                    const updateTasks = res.data.response[i].task_name;
                    const updateTime = res.data.response[i].time_value;
                    updateList.push({tasks: updateTasks, time: updateTime});
                    this.setState({myList : updateList});
                }
            })
            .catch(error =>{
                console.log(error);
                this.setState({tasks: 'error retreiving data'})
            });
        this.handleChange = this.handleChange.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    handleChange(val, valTime){
        let updateList = this.state.myList;
        updateList.push({tasks: val, time: valTime});
        this.setState({myList: updateList});
    }

    removeTask(task_id){
        task_id = task_id.replace('task_','');
        let updateList = this.state.myList;
        updateList.splice(task_id,1);
        this.setState({myList: updateList});
    }


    render() {

        const Form = () => (
            <TaskForm addTranscription={this.handleChange}/>
        );
        const List = () => (
            <div>
                <TaskList myList={this.state.myList}
                          removeTask={this.removeTask}/>

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
