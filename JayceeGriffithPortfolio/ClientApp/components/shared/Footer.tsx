import * as React from "react";

export default class Footer extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return <footer className="footer text-center">
            {
                /*<div className="text-center externallinks">
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
            <p>Copyright (C) 2019 Jaycee Griffith</p>*/
            }
        </footer>;
    }
}