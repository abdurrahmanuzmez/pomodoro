import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <hr id="footer-hr"/>
                <div className="container">
                    <div className="row" id="my-name">
                        <div className="col-md-2" />
                        <div className="title col-md-4">
                            Abdurrahman Üzmez
                        </div>
                        <div className="title col-md-1">
                            -
                        </div>
                        <div className="title col-md-4">
                            <a className="footer-link" href="https://uzmez.co" target="_blank">UZMEZ.CO</a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
