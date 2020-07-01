import React from "react";
import axios from 'axios';

export class TranscList extends React.Component{

    constructor(){
        super();
        this.state = {
            posts : [],
            errorMsg: ''
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error =>{
                console.log(error);
                this.setState({errorMsg: 'error retreiving data'})
            })
    }

    removeTranscription(e){
        this.props.removeTranscription(e.target.parentNode.id);
    }

    render() {
        const {posts, errorMsg} = this.state;

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
                {
                    posts.lenght ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) :
                        null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }

}
