import * as React from "react";

export default class Footer extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return <footer className="footer text-center">
            <p>Copyright (C) 2019 Jaycee Griffith</p>
        </footer>;
    }
}