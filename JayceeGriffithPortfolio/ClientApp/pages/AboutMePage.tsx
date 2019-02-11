import * as React from "react";
import { RouteComponentProps } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Globals from "@Globals";

type Props = RouteComponentProps<{}>;

export default class AboutMePage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - About Me</title>
            </Helmet>
            <div className="jumbotron p-3 p-md-5 rounded bg-white">
                <div className="col-md-12 px-0">
                    <h1 className="display-4 font-italic">I enjoy computers, music, and reading.</h1>
                    <p className="lead my-3">I have lived in <b>Oklahom City, OK</b> and <b>Albuquerque, NM</b>. I currently live in <b>Reno, NV</b>.</p>
                    <p className="lead mb-0">
                        <div className="text-center externallinks">
                            <span><b>External profile links</b></span>
                            <p className="text-center">
                                <span>Github | </span>
                                <a href="https://github.com/jgriffith3433" target="_blank">http://github.com/jgriffith3433</a>
                            </p>
                            <p className="text-center">
                                <span>Sound Cloud | </span>
                                <a href="https://soundcloud.com/jacobsgriffith" target="_blank">https://soundcloud.com/jacobsgriffith</a>
                            </p>
                            <p className="text-center">
                                <span>Stack Overflow | </span>
                                <a href="https://stackoverflow.com/users/941632/jacobsgriffith" target="_blank">https://stackoverflow.com/users/941632/jacobsgriffith</a>
                            </p>
                            <p className="text-center">
                                <span>Itch.io | </span>
                                <a href="https://jgriffith3433.itch.io/lifeofgooba" target="_blank">https://jgriffith3433.itch.io/lifeofgooba</a>
                            </p>
                            <p className="text-center">
                                <span>Kickstarter | </span>
                                <a href="https://www.kickstarter.com/profile/jgriffith3433" target="_blank">https://www.kickstarter.com/profile/jgriffith3433</a>
                            </p>
                        </div>
                    </p>
                </div>
            </div>
            </div>;
    }
}