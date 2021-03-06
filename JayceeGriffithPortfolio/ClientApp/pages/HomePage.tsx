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
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Home</title>
            </Helmet>
            <div className="jumbotron p-3 p-md-5 rounded bg-white">
                <div className="mobile-only-content col-md-6 px-0">
                    <h1 className="display-4 font-italic">Welcome to my Web<del>site</del> game.</h1>
                    <p className="lead my-3">Navigate by <b>touching</b> the green boxes.</p>
                    <p className="lead mb-0">
                        <span>Don't see the game? That means you web browser doesn't support WebGL/WebAssembly Try using chrome.</span>
                    </p>
                    <p className="lead mb-0">
                        <span>Make sure to check out my <a href="https://drive.google.com/open?id=1x_J0KD_UN28wIOzOdzOprr4PpcYHh22x" target="_blank">Resume</a>.</span>
                    </p>
                </div>
                <div className="desktop-only-content col-md-6 px-0">
                    <h1 className="display-4 font-italic">Welcome to my Web<del>site</del> game.</h1>
                    <p className="lead my-3">Navigate with <b>wasd</b> or the <b>arrow keys</b></p>
                    <p className="lead my-3">Or by <b>clicking</b> the green boxes.</p>
                    <p className="lead my-3">Jump with <b>space</b></p>
                    <p className="lead mb-0">
                        <span>Don't see the game? That means you web browser doesn't support WebGL/WebAssembly Try using chrome.</span>
                    </p>
                    <p className="lead mb-0">
                        <span>Make sure to check out my <a href="https://drive.google.com/open?id=1x_J0KD_UN28wIOzOdzOprr4PpcYHh22x" target="_blank">Resume</a>.</span>
                    </p>
                </div>
            </div>
            </div>;
    }
}