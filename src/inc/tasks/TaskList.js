import React from 'react';

export class TaskList extends React.Component{

    removeTask(e){
        this.props.removeTask(e.target.parentNode.id);
    }

    render() {
        const items = this.props.myList.map((elem, i) =>{
            let task_id = 'task_' + i;
            return (
                <li key={i} id={task_id}>
                    <span className="transc-text">{elem.tasks}</span>
                    <span className="time"> Time: {elem.time} minute | </span>
                    <span className="delete" onClick={e => this.removeTask(e)}> [Delete]</span>
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}
export default TaskList;

