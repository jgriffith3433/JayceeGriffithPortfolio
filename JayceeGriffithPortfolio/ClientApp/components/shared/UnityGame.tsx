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
            this.JGWGame.send("GameController", "LoadPage", location.pathname);
        })
    }
    unlisten: any;

    putontop(element) {
        element.classList.add("layeriframe");
        setTimeout(() => {
            element.classList.remove("layeriframe");
        }, 2000);
    };

    simulate(element, eventName, a) {
        var options = this.extend({
            pointerX: 0,
            pointerY: 0,
            button: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            bubbles: true,
            cancelable: true
        }, a || {});
        var oEvent, eventType = null;

        for (var name in this.eventMatchers) {
            if (this.eventMatchers[name].test(eventName)) {
                eventType = name;
                break;
            }
        }

        if (!eventType)
            throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

        if (document.createEvent) {
            oEvent = document.createEvent(eventType);
            if (eventType == 'HTMLEvents') {
                oEvent.initEvent(eventName, options.bubbles, options.cancelable);
            }
            else {
                oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                    options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                    options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
            }
            element.dispatchEvent(oEvent);
        }
        /*else {
            options.clientX = options.pointerX;
            options.clientY = options.pointerY;
            var evt = document.createEventObject();
            oEvent = extend(evt, options);
            element.fireEvent('on' + eventName, oEvent);
        }*/
        return element;
    };

    extend(destination, source) {
        for (var property in source) {
            destination[property] = source[property];
        }
        return destination;
    };

    eventMatchers = {
        'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
        'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out|wheel))$/
    };

    getAllElementsFromPoint = (x, y) => {
        var elements = [];
        var item = document.elementFromPoint(x, y);
        var lastItem;
        while (item && item !== lastItem && item !== document.body && item !== document.documentElement) {
            if (item.classList) {
                elements.push(item);
                // temporarily disable pointer events element so we can see what's underneath it
                item.classList.add("fakehidden");
                // prevent possible infinite loop by remembering this item
                lastItem = item;
                item = document.elementFromPoint(x, y);
            }
        }
        // restore display property
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.remove("fakehidden");
            }
        }
        return elements;
    };

    updateDimensions = () => {
        var canvas = document.getElementById("#canvas");
        var reactApp = document.getElementById("react-app");
        if (canvas && reactApp) {
            canvas.setAttribute("width", reactApp.clientWidth.toString());
            canvas.setAttribute("height", reactApp.clientHeight.toString());
            this.JGWGame.send("GameController", "UpdateDimensions", "{" +
                "width: " + reactApp.clientWidth.toString() + ", " +
                "height: " + reactApp.clientHeight.toString() +
                " }"
            );
        }
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
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
                this.JGWGame.send("GameController", "Connected");
                this.JGWGame.send("GameController", "LoadPage", this.props.location.pathname);
            });
            this.JGWGame.on("SetPage", page => {
                if (page != this.props.location.pathname) {
                    this.props.history.push(page);
                }
            });
            this.JGWGame.on("GetDimensions", page => {
                this.updateDimensions();
            });
            this.JGWGame.on("OpenNewTab", url => {
                var win = window.open(url, '_blank');
                win.focus();
            });
            this.JGWGame.on("MouseEvent", mouseEventStr => {
                var mouseEvent = JSON.parse(mouseEventStr);
                if (mouseEvent) {
                    //fix y: unity begins bottom left, web browsers begin top left
                    mouseEvent.pointerY = document.getElementById("react-app").clientHeight - mouseEvent.pointerY;
                    if (mouseEvent.type == "scroll") {
                        //document.body.scrollTop = document.body.scrollTop - (mouseEvent.scroll * 100);
                        document.body.scrollTop = 0;
                        var scrollbarContainer = document.getElementsByClassName("scrollbar-container")[0];
                        scrollbarContainer.scrollTop = scrollbarContainer.scrollTop - (mouseEvent.scroll * 100);
                    }
                    else {
                        if (mouseEvent.type != "mousemove") {
                            //var unityGameElem = document.getElementById("unityGame");
                            //unityGameElem.classList.add("disablepointer");
                            //console.log(mouseEvent);
                            var curElems = this.getAllElementsFromPoint(mouseEvent.pointerX, mouseEvent.pointerY);
                            //var curElem = document.elementFromPoint(mouseEvent.pointerX, mouseEvent.pointerY);
                            if (curElems.length > 0) {
                                for (var i = 0; i < curElems.length; i++) {
                                    if (curElems[i].tagName.toLowerCase() == 'iframe') {
                                        this.putontop(curElems[i]);
                                    }
                                    this.simulate(curElems[i], mouseEvent.type, mouseEvent);
                                    //unityGameElem.classList.remove("disablepointer");
                                    var mouseTest = document.getElementById("mouseTest");
                                    if (mouseTest) {
                                        mouseTest.style.left = mouseEvent.pointerX + "px";
                                        mouseTest.style.top = mouseEvent.pointerY + "px";
                                    }
                                }
                            }
                        }
                    }
                }
            });

            if (window['supported']) {
                ReactDOM.render(<Unity unityContent={this.JGWGame} />, document.getElementById("unityGame"));
            } else {
                var unityGameElem = document.getElementById("unityGame");
                unityGameElem.parentNode.removeChild(unityGameElem);
            }
        }
    };

    componentDidUpdate(prevProps) {
    };

    componentWillUnmount() {
        this.unlisten();
        window.removeEventListener("resize", this.updateDimensions);
    }

    JGWGame: UnityContent;

    render() {
        const { match, location, history } = this.props;
        return <div>
            <div id="mouseTest" className="mouseTest"></div>
            <div id="unityGame" className="unityGame"></div>
        </div>;
    }
}

export default withRouter(UnityGame);