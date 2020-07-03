import React from "react";
import soundfile from '../../alarm-clock-sound.mp3'


export class Pomodoro extends React.Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 1500, isStart: false };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.plusCounter = this.plusCounter.bind(this);
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        } else if(this.state.isStart === true){
            window.location.reload(false);
        }
        this.setState({
            isStart: !this.state.isStart
        })
    }

    plusCounter(){
        let seconds = this.state.seconds + 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            var audio = new Audio(soundfile);
            audio.play();
        }
    }


    render() {
        const label = this.state.isStart ? 'RESTART' : 'START';

        return(
            <div className="pomodoro-buttons">
                <span className="pomodoro-counter">
                    {this.state.time.m}:{this.state.time.s}
                </span>
                <br />

                <div  className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <button className="pomodoro-action-btn col-md-8" onClick={this.startTimer}>{label}</button>
                        <div className="col-md-2" />
                    </div>
                </div>
            </div>
        )
    }

}
