import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import Globals from "@Globals";

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
            </div>;
    }
}