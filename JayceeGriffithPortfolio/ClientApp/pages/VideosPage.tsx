import * as React from "react";
import { RouteComponentProps } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Globals from "@Globals";
import YouTube from "react-youtube";

type Props = RouteComponentProps<{}>;

export default class VideosPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Videos</title>
            </Helmet>
            <div>
                <div className="row text-center mt-5">
                    <div className="col-md-12">
                        <h5>Some of the videos I've made.</h5>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <iframe className="w-100" style={{height: "400px"}} src="https://www.youtube.com/embed/6BgYMTZVwiM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-6 mt-5">
                        <iframe className="w-100" style={{ height: "400px" }} src="https://www.youtube.com/embed/PaeAOf1h3T0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <iframe className="w-100" style={{ height: "400px" }} src="https://www.youtube.com/embed/rWcarhcE3K4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-6 mt-5">
                        <iframe className="w-100" style={{ height: "400px" }} src="https://www.youtube.com/embed/videoseries?list=PLGC6WeMQIqkYheztleu4u1aWf6Z3Putgj" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <iframe className="w-100" style={{ height: "400px" }} src="https://www.youtube.com/embed/videoseries?list=PLYc6nTigbs7jyKPjcl9HfeBrOdUESLZcU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-6 mt-5">
                        <iframe className="w-100" style={{ height: "400px" }} src="https://www.youtube.com/embed/videoseries?list=PLYc6nTigbs7hcRHFOkNsyfinMFBmk-e3p" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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