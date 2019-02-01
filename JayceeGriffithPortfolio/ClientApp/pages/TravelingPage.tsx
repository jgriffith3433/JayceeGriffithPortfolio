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
            <div className="text-center">
                <h2>I love to see and do different things</h2>
            </div>
            <div className="text-center">
                <p>Especially if they're out of the ordinary</p>
            </div>
            <div className="text-center">
                <h3>Trips</h3>
            </div>
            <div className="text-center">
                <h4>
                    <NavLink exact to={'/traveling/summer2018'}>Summer 2018</NavLink>
                </h4>
            </div>
        </div>;
    }
}