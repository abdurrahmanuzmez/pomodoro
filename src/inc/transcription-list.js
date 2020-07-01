import React from "react";

export class TranscList extends React.Component{

    removeTranscription(e){
        this.props.removeTranscription(e.target.parentNode.id);
    }

    render() {
        const items = this.props.myTransc.map((elem, i) =>{
           let task_id = 'task_' + i;
           return (
               <li key={i} id={task_id} className={elem.status}>
                   <span className="time">Time: {elem.time} minute | </span>
                   <span className="transc-text">{elem.text}</span>
                   <span className="delete" onClick={e =>this.removeTranscription(e)}> [Delete]</span>
               </li>

           )
        });
        return(
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }

}
