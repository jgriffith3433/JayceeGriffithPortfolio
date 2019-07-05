import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { NavLink, Redirect } from "react-router-dom";
import StarWarsBooksImage from "@Images/starwarsbooks.jpg";

type Props = RouteComponentProps<{}>;

export default class ReadingPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Reading</title>
            </Helmet>
            <br />
            <br />
            <div className="text-center">
                <h1>I love the star wars books</h1>
                <h5>They are even better than the movies and you can read them chronologically</h5>
                <img src={StarWarsBooksImage} alt="Star Wars Books" className="img-fluid w-75" />
            </div>
            <div className="text-center">
                <h3>Something, something, something... Complete.</h3>
            </div>
            <div className="text-center">
                <ul className="list-group">
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/B00JN8H2TC/ref=cm_sw_em_r_mt_dp_U_MU1uCbF9FCBSZ" target="_blank">Into the Void: Star Wars (Dawn of the Jedi)</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345541324/ref=cm_sw_em_r_mt_dp_U_C41uCb9FHQ4BH" target="_blank">Star Wars: Lost Tribe of the Sith - The Collected Stories (Star Wars: Lost Tribe of the Sith - Legends)</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345511352/ref=cm_sw_em_r_mt_dp_U_k51uCbDBCV9PR" target="_blank">Star Wars: The Old Republic - Revan (Star Wars: The Old Republic - Legends)</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345511395/ref=cm_sw_em_r_mt_dp_U_P51uCbPA6BPE7" target="_blank">Star Wars: The Old Republic - Deceived (Star Wars: The Old Republic - Legends)</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345518594/ref=cm_sw_em_r_mt_dp_U_A61uCbNSRBSFT" target="_blank">Star Wars: Red Harvest</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345511336/ref=cm_sw_em_r_mt_dp_U_s71uCb3T663RH" target="_blank">Fatal Alliance (Star Wars: The Old Republic) (Star Wars: The Old Republic - Legends)</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345529421/ref=cm_sw_em_r_mt_dp_U_Z71uCbW0C197J" target="_blank">Annihilation: Star Wars Legends (The Old Republic) (Star Wars: The Old Republic - Legends)</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345522648/ref=cm_sw_em_r_mt_dp_U_q81uCbKK0TD18" target="_blank">Star Wars: Knight Errant</a></span>
                        <span> | </span>
                        <span>Completed</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345477375/ref=cm_sw_em_r_mt_dp_U_s91uCbRXD4FG9" target="_blank">Path of Destruction (Star Wars: Darth Bane, Book 1)</a></span>
                        <span> | </span>
                        <span>Currently Reading</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345477499/ref=cm_sw_em_r_mt_dp_U_u91uCb5930RYF" target="_blank">Rule of Two (Star Wars: Darth Bane, Book 2)</a></span>
                        <span> | </span>
                        <span>Queued</span>
                    </li>
                    <li className="list-group-item">
                        <span><a href="https://www.amazon.com/dp/0345511573/ref=cm_sw_em_r_mt_dp_U_q91uCb786RBNS" target="_blank">Dynasty of Evil (Star Wars: Darth Bane, Book 3)</a></span>
                        <span> | </span>
                        <span>Queued</span>
                    </li>
                </ul>
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
            <br />
        </div>;
    }
}