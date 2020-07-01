import React from 'react';
import axios from 'axios';

export class TranscForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            product_name: '',
            product_price: ''
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
        axios.post("https://arcane-reef-06137.herokuapp.com/api/products", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        const {product_name, product_price} = this.state;


        return(
            <div>
                <div className="form">
                    <form className="input-wrapper" onSubmit={this.submitHandler}>
                        <input id="transcInput" className="input" type="text" placeholder="Text here..." name="text" value={product_name} onChange={this.changeHandler}/>
                        <input id="transcTimeInput" className="input" type="number" placeholder="Time here (minute)" name="time" value={product_price} onChange={this.changeHandler}/>
                    </form>
                    <button type="submit" className="add-btn" onClick={e => this.addTranscription(e)}>C'mon</button>
                </div>
            </div>
        )
    }
}