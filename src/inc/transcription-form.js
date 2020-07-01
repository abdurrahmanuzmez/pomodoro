import React from 'react';

export class TranscForm extends React.Component{

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

    render() {
        return(
            <div>
                <div className="form">
                    <form className="input-wrapper" onSubmit={e =>this.addTranscription(e)}>
                        <input id="transcInput" className="input" type="text" placeholder="Text here..."/>
                        <input id="transcTimeInput" className="input" type="number" placeholder="Time here (minute)" />
                    </form>
                    <button type="button" className="add-btn" onClick={e => this.addTranscription(e)}>C'mon</button>
                </div>
            </div>
        )
    }
}