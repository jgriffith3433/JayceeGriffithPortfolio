﻿import TopMenu from "@Components/shared/TopMenu";
import "@Styles/guestLayout.scss";
import * as React from "react";
import * as H from 'history';
import { RouteComponentProps } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "@Components/shared/Footer";
import UnityGame from "@Components/shared/UnityGame"

interface IProps {
    children: any;
    path: string;
}

type Props = IProps & RouteComponentProps<any> ;

export default class GuestLayout extends React.Component<Props, {}> {
    public render() {
        return <div>
            <div id="guestLayout" className="layout">
                <TopMenu />
                <div className="container container-content">
                    {this.props.children}
                </div>
                <ToastContainer />
                <UnityGame />
                <Footer />
            </div>
        </div>;
    }
}