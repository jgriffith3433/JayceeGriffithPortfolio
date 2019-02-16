import * as React from "react";
import { RouteComponentProps } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Globals from "@Globals";
import profilepic from "@Images/profilepic.jpg";

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
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={profilepic} className="w-100" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4 font-italic">I enjoy computers, reading, and music.</h1>
                        <h2 className="lead my-3">I have lived in <b>Oklahom City, OK</b> and <b>Albuquerque, NM</b>. I currently live in <b>Reno, NV</b>.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="lead mt-5">
                            <div>
                                <span><b>External profile links</b></span>
                                <p>
                                    <a href="https://github.com/jgriffith3433" target="_blank">Github</a>
                                </p>
                                <p>
                                    <a href="https://jgriffith3433.itch.io/lifeofgooba" target="_blank">Itch.io</a>
                                </p>
                                <p>
                                    <a href="https://www.kickstarter.com/profile/jgriffith3433" target="_blank">Kickstarter</a>
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com/in/jaycee-griffith-760bb7116/" target="_blank">LinkedIn</a>
                                </p>
                                <p>
                                    <a href="https://soundcloud.com/jacobsgriffith" target="_blank">Sound Cloud</a>
                                </p>
                                <p>
                                    <a href="https://stackoverflow.com/users/941632/jacobsgriffith" target="_blank">Stack Overflow</a>
                                </p>
                                <p>
                                    <a href="https://trello.com/jayceegriffith" target="_blank">Trello</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>;
    }
}