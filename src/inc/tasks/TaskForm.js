import React from 'react';
import axios from 'axios';

export class TaskForm extends React.Component{

    state = {
        task_name: '',
        time_value: '',
    }

    addTranscription(e){
        e.preventDefault();
    }
    //e =>this.addTranscription(e)

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const inp = document.getElementById('task');
        const inpTime = document.getElementById('time');
        const val = inp.value;
        const valTime = inpTime.value;
        inp.value = '';
        inpTime.value = '';
        this.props.handleSubmit(val, valTime);

        const task = {
            task_name: this.state.task,
            time_value: this.state.time,
        };

        axios.post(`http://localhost:3000/jsons/json1`, {task})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="container">
                        <div className="row">
                            <label className="col-md-12">
                                <input id="task"
                                       type="text"
                                       name="task"
                                       placeholder="Type Task Name"
                                       onChange={this.handleChange} />
                                <input id="time timeInput"
                                       type="number"
                                       name="task"
                                       placeholder="Type Task Time"
                                       onChange={this.handleChange} />
                                <br />
                            </label>
                            <div className="col-md-4"/>
                            <button type="submit" className="add-btn col-md-4">Add</button>
                            <div className="col-md-4"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
