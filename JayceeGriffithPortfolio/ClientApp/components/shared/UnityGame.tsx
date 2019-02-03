import * as React from "react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import Unity, { UnityContent } from "react-unity-webgl";
import Globals from "@Globals";

interface IUnityGameProps {
    match,
    location,
    history;
}

class UnityGame extends React.Component<IUnityGameProps, {}> {
    constructor(props) {
        super(props);
        this.unlisten = this.props.history.listen((location, action) => {
            Globals.currentLocation = location.pathname;
            if (Globals.currentLocation == "/") {
                Globals.prevLocation = "";
                Globals.nextLocation = "/portfolio";
            } else if (Globals.currentLocation == "/portfolio") {
                Globals.prevLocation = "/";
                Globals.nextLocation = "/reading";
            } else if (Globals.currentLocation == "/reading") {
                Globals.prevLocation = "/portfolio";
                Globals.nextLocation = "/";
            }
            this.JGWGame.send("GameController", "UpdatePageNavigation", "{ " +
                "currentLocation: " + Globals.currentLocation + ", " +
                "nextLocation: " + Globals.nextLocation + ", " +
                "prevLocation: " + Globals.prevLocation +
                " }");
        })
    }
    unlisten: any;

    componentDidMount() {
        Globals.currentLocation = this.props.location.pathname;
        Globals.setGameReady(false);
        if (typeof window !== 'undefined') {
            this.JGWGame = new UnityContent(
                "JayceeGriffithWebsiteGame/Build.json",
                "JayceeGriffithWebsiteGame/UnityLoader.js"
            );
            this.JGWGame.on("OnReady", () => {
                Globals.setGameReady(true);
                var preloader = document.getElementById("preloader");
                preloader.classList.add("hidden");
                var preloader = document.getElementById("unityGame");
                preloader.classList.add("disablepointer");
                this.JGWGame.send("GameController", "Connected");
            });
            this.JGWGame.on("GetPageNavigation", () => {
                if (Globals.currentLocation == "/") {
                    Globals.prevLocation = "";
                    Globals.nextLocation = "/portfolio";
                } else if (Globals.currentLocation == "/portfolio") {
                    Globals.prevLocation = "/";
                    Globals.nextLocation = "/reading";
                } else if (Globals.currentLocation == "/reading") {
                    Globals.prevLocation = "/portfolio";
                    Globals.nextLocation = "/";
                }

                this.JGWGame.send("GameController", "UpdatePageNavigation", "{ " +
                    "currentLocation: " + Globals.currentLocation + ", " +
                    "nextLocation: " + Globals.nextLocation + ", " +
                    "prevLocation: " + Globals.prevLocation +
                " }");
            });
            this.JGWGame.on("SetPage", page => {
                if (page != Globals.currentLocation) {
                    this.props.history.push(page);
                }
            });
            this.JGWGame.on("OpenNewTab", url => {
                var win = window.open(url, '_blank');
                win.focus();
            });
            ReactDOM.render(<Unity unityContent={this.JGWGame} />, document.getElementById("unityGame"));
        }
    };

    componentDidUpdate(prevProps) {
    };

    componentWillUnmount() {
        this.unlisten();
    }

    JGWGame: UnityContent;

    render() {
        const { match, location, history } = this.props;
        return <div id="unityGame" className="unityGame"></div>;
    }
}

export default withRouter(UnityGame);