import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import logo from "@Images/logo.png";

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
                <h2>Here are a few things I've done</h2>
            </div>
            <div className="text-center externallinks">
                <hr></hr>
                <span><b>External links</b></span>
            </div>
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
        </div>;
    }
}