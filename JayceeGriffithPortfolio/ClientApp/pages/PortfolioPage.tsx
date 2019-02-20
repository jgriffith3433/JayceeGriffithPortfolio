import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { withRouter, NavLink, Redirect } from "react-router-dom";
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
import kittenface from "@Images/kittenface.jpg";
import kittenfull from "@Images/kittenfull.jpg";
import niccolo from "@Images/niccolo.jpg";
import boy from "@Images/boy.jpg";
import gooba from "@Images/gooba.jpg";
import swattrainer from "@Images/swattrainer.jpg";
import zelda from "@Images/zelda.jpg";
import Globals from "@Globals";
import YouTube from "react-youtube";


type Props = RouteComponentProps<{}>;

class PortfolioPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Portfolio</title>
            </Helmet>
            <div className="text-center lead mb-0 mt-5">
                <h2>Make sure to check out my <a href="https://drive.google.com/open?id=1x_J0KD_UN28wIOzOdzOprr4PpcYHh22x" target="_blank">Resume</a>.</h2>
            </div>
            <div>
                <Carousel className="col-md" showArrows={true} showThumbs={false} infiniteLoop={true} swipeable={false}>
                    <div>
                        <img src={kittenfull} className="w-50 desktop-only-content-inline" />
                        <img src={kittenfull} className="w-75 mobile-only-content-inline" />
                        <p className="legend">
                            <span>Cinema 4D Kitten Fully Rigged </span>
                            <span>Feel free to download the kitten | </span>
                            <a href="https://drive.google.com/open?id=1w56ctmWSgPDhRB7fKY-v-waFzBPImjZy" target="_blank">Kitten Red_Final.zip</a>
                        </p>
                    </div>
                    <div>
                        <img src={kittenface} className="w-50 desktop-only-content-inline" />
                        <img src={kittenface} className="w-50 mobile-only-content-inline" />
                        <p className="legend">
                            <span>Cinema 4D Kitten Fully Rigged </span>
                            <span>Feel free to download the kitten | </span>
                            <a href="https://drive.google.com/open?id=1w56ctmWSgPDhRB7fKY-v-waFzBPImjZy" target="_blank">Kitten Red_Final.zip</a>
                        </p>
                    </div>
                    <div>
                        <img src={gooba} className="w-50 desktop-only-content-inline" />
                        <img src={gooba} className="w-50 mobile-only-content-inline" />
                        <p className="legend">
                            <span>Download and play Life of Gooba | </span>
                            <a href="https://jgriffith3433.itch.io/lifeofgooba" target="_blank">Itch.io game page</a>
                        </p>
                    </div>
                    <div>
                        <img src={niccolo} className="w-50 desktop-only-content-inline" />
                        <img src={niccolo} className="w-50 mobile-only-content-inline" />
                        <p className="legend">Low Poly Character Modeling</p>
                    </div>
                    <div>
                        <img src={boy} className="w-50 desktop-only-content-inline" />
                        <img src={boy} className="w-50 mobile-only-content-inline" />
                        <p className="legend">3ds Max Smiling Boy</p>
                    </div>
                    {
                        /*<div>
                            <YouTube videoId="j2jXD46B4Vw" className="w-75 h-50 mt-5" />
                            <p className="legend">
                                <span>To play the Space Shooter Game, download and extract the zip file. Then use internet explorer and download the web player, don't worry it's safe and comes directly from Unity3d.com | </span>
                                <a href="https://drive.google.com/open?id=1Y2UwkA_pACRiDt2OCTH38uRfwbM_1AZW" target="_blank">spaceshooter.zip</a>
                            </p>
                        </div>
                        <div>
                            <YouTube videoId="ns9sM42IP-I" className="w-75 h-50 mt-5" />
                            <p className="legend">
                                <span>To play the Hoop Jones Game, download and extract the zip file. Then use internet explorer and download the web player, don't worry it's safe and comes directly from Unity3d.com | </span>
                                <a href="https://drive.google.com/open?id=1hyRouxDJZufhvFK6tULyUaqJVrcTnrkw" target="_blank">hoopjones.zip</a>
                            </p>
                        </div>*/
                    }
                    <div>
                        <img src={swattrainer} className="w-50 desktop-only-content-inline" />
                        <img src={swattrainer} className="w-50 mobile-only-content-inline" />
                        <p className="legend">UDK training simulation</p>
                    </div>
                    <div>
                        <img src={zelda} className="w-50 desktop-only-content-inline" />
                        <img src={zelda} className="w-50 mobile-only-content-inline" />
                        <p className="legend">
                            <span>Zelda-style camera | </span>
                            <span>Feel free to download the project | </span>
                            <a href="https://drive.google.com/open?id=1RcWA2-y2mBGhg3QYobmNaovrYf3F4TNn" target="_blank">zelda.zip</a>
                        </p>
                    </div>
                </Carousel>
            </div>
        </div>;
    }
}

export default withRouter(PortfolioPage);