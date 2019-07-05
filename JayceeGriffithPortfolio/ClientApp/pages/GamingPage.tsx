import * as React from "react";
import { RouteComponentProps } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Globals from "@Globals";
import YouTube from "react-youtube";

type Props = RouteComponentProps<{}>;

export default class GamingPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Gaming</title>
            </Helmet>
            <div className="mt-5">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h5>I play overwatch, final fantasy, call of duty, any Id Software game, I really enjoy coop games that require teamwork.</h5>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <iframe src="https://player.twitch.tv/?autoplay=false&collection=IkwiIXL0zxQZ8A" frameBorder="0" allowFullScreen={true} scrolling="no" className="w-100" style={{ height: "400px"}}></iframe>
                        <a href="https://www.twitch.tv/collections/IkwiIXL0zxQZ8A?tt_content=text_link&tt_medium=vod_embed" style={{ padding: "2px 0px 4px", display: "block", width: "345px", fontWeight: "normal", fontSize: "10px", textDecoration: "underline" }}>Watch Final Fantasy X Play-through from BozoAttacks on www.twitch.tv</a>
                    </div>
                    <div className="col-md-6">
                        <iframe src="https://player.twitch.tv/?autoplay=false&collection=Sq8UZ0U-0BRjDQ" frameBorder="0" allowFullScreen={true} scrolling="no" className="w-100" style={{ height: "400px" }}></iframe>
                        <a href="https://www.twitch.tv/collections/Sq8UZ0U-0BRjDQ?tt_content=text_link&tt_medium=vod_embed" style={{ padding: "2px 0px 4px", display: "block", width: "345px", fontWeight: "normal", fontSize: "10px", textDecoration: "underline" }}>Watch Final Fantasy XII: The Zodiac Age Play-through from BozoAttacks on www.twitch.tv</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LyXqQCUhOVw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </div>;
    }
}