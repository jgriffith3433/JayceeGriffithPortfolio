import * as React from "react";
import { RouteComponentProps } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Globals from "@Globals";
import YouTube from "react-youtube";

type Props = RouteComponentProps<{}>;

export default class SocialPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Social Media</title>
            </Helmet>
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">

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
                                <p>
                                    <a href="https://www.twitch.tv/bozoattacks" target="_blank">Twitch</a>
                                </p>
                                <p>
                                    <a href="https://www.youtube.com/channel/UCyRTvIbl2R3XCmANV2PZ_Bw" target="_blank">Youtube (Tutorials)</a>
                                </p>
                                <p>
                                    <a href="https://www.youtube.com/channel/UCFLILXvLRNRTHOBZVvXw-bg" target="_blank">Youtube (Gaming)</a>
                                </p>
                                <p>
                                    <a href="https://www.youtube.com/channel/UCqQzEq6KTr3pwza2bKhilfg" target="_blank">Youtube (3D Design/Videography)</a>
                                </p>
                            </div>
                        </div>
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
            </div>;
    }
}