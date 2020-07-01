import React from 'react';

export class TranscForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            task: '',
            time: ''
        }
    }
/*
    addTranscription(e){
        e.preventDefault();
        const inp = document.getElementById('transcInput');
        const inpTime = document.getElementById('transcTimeInput');
        const val = inp.value;
        const valTime = inpTime.value;
        inp.value = '';
        inpTime.value = '';
        this.props.addTranscription(val, valTime);
    }
    //e =>this.addTranscription(e)
*/
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })

    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const {task, time} = this.state;


        return(
            <div>
                <div className="form">
                    <form className="input-wrapper" onSubmit={this.submitHandler}>
                        <input id="transcInput" className="input" type="text" placeholder="Text here..." name="text" value={task} onChange={this.changeHandler}/>
                        <input id="transcTimeInput" className="input" type="number" placeholder="Time here (minute)" name="time" value={time} onChange={this.changeHandler}/>
                    </form>
                    <button type="submit" className="add-btn" onClick={e => this.addTranscription(e)}>C'mon</button>
                </div>
            </div>
        )
    }
}