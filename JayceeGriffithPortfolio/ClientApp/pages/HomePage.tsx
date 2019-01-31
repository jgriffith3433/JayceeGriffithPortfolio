import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import logo from "@Images/logo.png";

type Props = RouteComponentProps<{}>;

export default class HomePage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Home</title>
            </Helmet>
            <p className="text-center" style={{"fontSize": "22px"}}>Welcome to my website, it's bare bones right now. Feel free to check out my portfolio!</p>
            </div>;
    }
}