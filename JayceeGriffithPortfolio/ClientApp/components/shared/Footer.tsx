import * as React from "react";

export default class Footer extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return <footer className="footer text-center">
            <p>View on <a href="https://github.com/jgriffith3433">GitHub</a></p>
            <p>Copyright (c) 2019 Jaycee Griffith</p>
        </footer>;
    }
}