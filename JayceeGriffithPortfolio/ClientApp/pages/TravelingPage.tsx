import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { NavLink, Redirect } from "react-router-dom";

type Props = RouteComponentProps<{}>;

export default class TravelingPage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Traveling</title>
            </Helmet>
        </div>;
    }
}