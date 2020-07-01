import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="header row">
                    <div id="left-side" className="col-md-8">
                        <img className="logo" height="40" src="https://pomofocus.io/icons/icon-white.png" />
                        <div className="title logo "><b>Pomofocus</b></div>
                    </div>
                    <div className="top-buttons col-md-4">
                        <div id="graph" className="col-md-1 bg-icons">
                            <a href="#">
                                <img height="20" src="https://pomofocus.io/icons/graph-white.png"/>
                                <span>Report</span>
                            </a>
                        </div>
                        <div id="user" className="col-md-1 bg-icons top-bottoms">
                            <a href="#">
                                <img height="20" src="https://pomofocus.io/icons/user-white.png"/>
                                <span>Login</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}