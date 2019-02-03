import * as React from "react";
import { RouteComponentProps } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Globals from "@Globals";

type Props = RouteComponentProps<{}>;

export default class HomePage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const isMobile = window.innerWidth <= 500;
        if (isMobile) {
            return <div>
                <Helmet>
                    <title>Jaycee Griffith - Home</title>
                </Helmet>
                <div className="jumbotron p-3 p-md-5 rounded bg-white">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Welcome to my Web<del>site</del>game.</h1>
                        <p className="lead my-3">Navigate by <b>tilting</b> your device</p>
                        <p className="lead mb-0">
                            <span>Make sure to check out my <NavLink exact to={'/portfolio'}>portfolio</NavLink></span>
                        </p>
                    </div>
                </div>
            </div>;
        }
        else {
            return <div>
                <Helmet>
                    <title>Jaycee Griffith - Home</title>
                </Helmet>
                <div className="jumbotron p-3 p-md-5 rounded bg-white">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Welcome to my Web<del>site</del>game.</h1>
                        <p className="lead my-3">Navigate with <b>wasd</b> or the <b>arrow keys</b></p>
                        <p className="lead my-3">Jump with <b>space</b></p>
                        <p className="lead mb-0">
                            <span>Fly by pressing <b>f</b>, try not to get lost! ;)</span>
                        </p>
                        <p className="lead mb-0">
                            <span>Too slow? Hold <b>shift</b>.</span>
                        </p>
                        <p className="lead mb-0">
                            <span>Make sure to check out my <NavLink exact to={'/portfolio'}>portfolio</NavLink></span>
                        </p>
                    </div>
                </div>
            </div>;
        }
    }
}