import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { withRouter, NavLink, Redirect } from "react-router-dom";
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
import kittenface from "@Images/kittenface.jpg";
import kittenfull from "@Images/kittenfull.jpg";
import niccolo from "@Images/niccolo.png";
import boy from "@Images/boy.jpg";
import gooba from "@Images/gooba.jpg";
import swattrainer from "@Images/swattrainer.jpg";
import Globals from "@Globals";


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
            <div className="text-center">
                <h2>Here is a few things that I've done</h2>
            </div>
            <div>
                <Carousel className="col-md" showArrows={true} showThumbs={false}>
                    <div>
                        <img src={kittenfull} />
                        <p className="legend">
                            <span>Kitten Fully Rigged </span>
                            <span>Feel free to download the kitten | </span>
                            <a href="https://drive.google.com/open?id=1w56ctmWSgPDhRB7fKY-v-waFzBPImjZy" target="_blank">Kitten Red_Final.zip</a>
                        </p>
                    </div>
                    <div>
                        <img src={kittenface} />
                        <p className="legend">
                            <span>3ds Max Kitten Fur </span>
                            <span>Feel free to download the kitten | </span>
                            <a href="https://drive.google.com/open?id=1w56ctmWSgPDhRB7fKY-v-waFzBPImjZy" target="_blank">Kitten Red_Final.zip</a>
                        </p>
                    </div>
                    <div>
                        <img src={gooba} />
                        <p className="legend">
                            <span>Download and play Life of Gooba | </span>
                            <a href="https://jgriffith3433.itch.io/lifeofgooba" target="_blank">Itch.io game page</a>
                        </p>
                    </div>
                    <div>
                        <img src={niccolo} />
                        <p className="legend">Low Poly Character Modeling</p>
                    </div>
                    <div>
                        <img src={swattrainer} />
                        <p className="legend">UDK training simulation</p>
                    </div>
                    <div>
                        <img src={boy} />
                        <p className="legend">3ds Max Smiling Boy</p>
                    </div>
                    <div>
                        <iframe style={{ marginTop: '50px' }} width="560" height="560" src="https://www.youtube.com/embed/j2jXD46B4Vw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <p className="legend">
                            <span>To play the Space Shooter Game, download and extract the zip file. Then use internet explorer and download the web player, don't worry it's safe and comes directly from Unity3d.com | </span>
                            <a href="https://drive.google.com/open?id=1Y2UwkA_pACRiDt2OCTH38uRfwbM_1AZW" target="_blank">spaceshooter.zip</a>
                        </p>
                    </div>
                    <div>
                        <iframe style={{ marginTop: '50px' }} width="560" height="560" src="https://www.youtube.com/embed/ns9sM42IP-I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <p className="legend">
                            <span>To play the Hoop Jones Game, download and extract the zip file. Then use internet explorer and download the web player, don't worry it's safe and comes directly from Unity3d.com | </span>
                            <a href="https://drive.google.com/open?id=1hyRouxDJZufhvFK6tULyUaqJVrcTnrkw" target="_blank">hoopjones.zip</a>
                        </p>
                    </div>
                </Carousel>
            </div>
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
        </div>;
    }
}

export default withRouter(PortfolioPage);