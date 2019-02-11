import * as React from "react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import Unity, { UnityContent } from "react-unity-webgl";
import Globals from "@Globals";
import { debug } from "util";
import { setTimeout } from "timers";

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
            this.updateNavigation();
        })
    }
    unlisten: any;

    updateNavigation() {
        if (Globals.currentLocation == "/") {
            Globals.prevLocation = "";
            Globals.nextLocation = "/portfolio";
            Globals.nextDropDown = false;
            Globals.prevDropDown = false;
        } else if (Globals.currentLocation == "/portfolio") {
            Globals.prevLocation = "/";
            Globals.nextLocation = "/about/me";
            Globals.nextDropDown = true;
            Globals.prevDropDown = false;
        } else if (Globals.currentLocation == "/about/me") {
            Globals.prevLocation = "/portfolio";
            Globals.nextLocation = "/about/music";
            Globals.nextDropDown = false;
            Globals.prevDropDown = true;
        } else if (Globals.currentLocation == "/about/music") {
            Globals.prevLocation = "/about/me";
            Globals.nextLocation = "/about/reading";
            Globals.nextDropDown = false;
            Globals.prevDropDown = false;
        } else if (Globals.currentLocation == "/about/reading") {
            Globals.prevLocation = "/about/music";
            Globals.nextLocation = "/";
            Globals.nextDropDown = true;
            Globals.prevDropDown = false;
        }
        this.JGWGame.send("GameController", "UpdatePageNavigation", "{ " +
            "currentLocation: " + Globals.currentLocation + ", " +
            "nextLocation: " + Globals.nextLocation + ", " +
            "nextDropDown: " + Globals.nextDropDown + ", " +
            "prevLocation: " + Globals.prevLocation + ", " +
            "prevDropDown: " + Globals.prevDropDown +
            " }");
    }

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
                document.getElementById("preloader").classList.add("loaded");
                setTimeout(function () {
                    document.getElementById("preloader").classList.add("hidden");
                }, 500);
                document.getElementById("unityGame").classList.add("disablepointer");
                this.JGWGame.send("GameController", "Connected");
            });
            this.JGWGame.on("GetPageNavigation", () => {
                this.updateNavigation();
            });
            this.JGWGame.on("GetPageWidth", () => {
                this.JGWGame.send("GameController", "UpdatePageWidth", document.getElementsByClassName("scrollbar-container")[0].clientWidth.toString());
                console.log(document.getElementsByClassName("scrollbar-container")[0].clientWidth.toString());
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