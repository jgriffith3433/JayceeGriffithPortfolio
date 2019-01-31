import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { NavLink, Redirect } from "react-router-dom";
import logo from "@Images/logo.png";
import { Player } from 'video-react';

type Props = RouteComponentProps<{}>;

export default class PortfolioPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Portfolio</title>
            </Helmet>
            <div className="text-center">
                <h2>Here is a few things that I've done</h2>
            </div>
            <div className="text-center">
                <p>Some games I made years ago that I sold to Design3</p>
            </div>
            <div className="text-center videocontainer">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/j2jXD46B4Vw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br />
                {
                    //<NavLink exact to={'/spaceshooter'} className="btn btn-default">Play Space Shooter Game</NavLink>
                }
            </div>
            <div className="text-center videocontainer">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ns9sM42IP-I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <br />
                {
                    //<NavLink exact to={'/hoopjones'} className="btn btn-default">Play Hoop Jones Game</NavLink>
                }
            </div>
            <div className="text-center externallinks">
                <span><b>External links</b></span>
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
            </div>
        </div>;
    }
}