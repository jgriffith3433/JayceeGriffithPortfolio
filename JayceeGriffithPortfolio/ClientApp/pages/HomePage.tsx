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
            <p className="text-center" style={{"fontSize": "52px"}}>Happy coding!</p>
            </div>;
    }
}