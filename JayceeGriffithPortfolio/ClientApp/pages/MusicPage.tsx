import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { NavLink, Redirect } from "react-router-dom";
import StarWarsBooksImage from "@Images/starwarsbooks.jpg";

type Props = RouteComponentProps<{}>;

export default class MusicPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Music</title>
            </Helmet>
            <br />
            <br />
            <div className="text-center">
                <h2>Listen to some of my sounds</h2>
            </div>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/47547303&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>;
    }
}