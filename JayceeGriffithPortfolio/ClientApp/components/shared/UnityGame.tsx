import * as React from "react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import Unity, { UnityContent } from "react-unity-webgl";

interface IUnityGameProps {
    match,
    location,
    history;
}


class UnityGame extends React.Component<IUnityGameProps, {}> {
    constructor(props) {
        super(props);
        this.unlisten = this.props.history.listen((location, action) => {
            this.location = location.pathname;
            this.JGWGame.send("GameController", "FromReactUpdatePage", this.location);
        })
    }
    unlisten: any;
    location = this.props.location.pathname;

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.JGWGame = new UnityContent(
                "JayceeGriffithWebsiteGame/Build.json",
                "JayceeGriffithWebsiteGame/UnityLoader.js"
            );
            this.JGWGame.on("SetPage", page => {
                if (page != this.location) {
                    this.props.history.push(page);
                }
            });
            this.JGWGame.on("OnReady", () => {
                this.JGWGame.send("GameController", "FromReactUpdatePage", this.location);
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
        return <div id="unityGame"></div>;
    }
}

export default withRouter(UnityGame);