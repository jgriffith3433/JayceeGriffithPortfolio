import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { NavLink, Redirect } from "react-router-dom";
import logo from "@Images/logo.png";

type Props = RouteComponentProps<{}>;

export default class Summer2018Page extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>Jaycee Griffith - Summer 2018</title>
            </Helmet>
        </div>;
    }
}