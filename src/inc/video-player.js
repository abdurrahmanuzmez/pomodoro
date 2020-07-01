import React from 'react'
export class VideoPlayer extends React.Component{

    constructor(){
        super();
        this.state = {
            curTime : null
        };
        this.state = {
            transc : null
        }
    }

    componentDidMount(){
        var vid = document.getElementById("myVideo");
        var videoCurrentTime = vid.currentTime;
        var videoTime = Math.floor(vid.duration);
        setInterval( () => {
            this.setState({
                curTime : new Date().getSeconds()
            })
        }, 1000);

    }
    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        const items = this.props.myTransc.map((elem, i) =>{
            let curTime = document.getElementById("time-content");
            if (elem.time === curTime){
                this.setState({transc : elem.text});
                console.log("beklee")
            }else {
                console.log("didn't work")
            }
            return(
                <li>
                    <span>
                        {this.state.transc}
                    </span>
                </li>
            )
        });
        return (
            <div>
                <video controls muted autoPlay="true" id="myVideo" width="320" height="176">
                    <source src="animation.mp4" type="video/mp4" />
                </video>
                <div id="time-content">
                    <div> { this.state.curTime } </div>
                </div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}
