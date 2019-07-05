import * as React from "react";
import { withRouter } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import Globals from "@Globals";
import AccountService from "@Services/AccountService";
import { Dropdown } from "bootstrap3-native";

import bind from 'bind-decorator';

class TopMenu extends React.Component<{}, { logoutAction: boolean }> {

    constructor(props) {
        super(props);
        this.state = { logoutAction: false };
    }

    @bind
    async onClickSignOut(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        await AccountService.logout();
        this.setState({ logoutAction: true });
    }

    private aboutDropdown: HTMLAnchorElement;
    //private blogDropdown: HTMLAnchorElement;

    componentDidMount() {
        var aboutMeDropdown = new Dropdown(this.aboutDropdown);
        //var blogDropdown = new Dropdown(this.blogDropdown);
    }

    componentDidUpdate() {
    }

    render() {
        if (this.state.logoutAction) {
            window.location.reload();
        }
        return <nav className="navbar navbar-expand-md navbar-light bg-light">
            <NavLink exact to={'/'} className="navbar-brand">JG</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink exact to={'/'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to={'/portfolio'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Portfolio</NavLink>
                    </li>
                    
                    <li className="dropdown">
                        <a href="#" ref={x => this.aboutDropdown = x} className="dropdown-toggle nav-link" style={{ "fontSize": "18px" }} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <span className="">About</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <NavLink exact to={'/about/me'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to={'/about/music'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Music</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to={'/about/gaming'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Gaming</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to={'/about/videos'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Videos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to={'/about/reading'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Reading</NavLink>
                            </li>
                        </ul>
                    </li>

                    {
                        /*
                        <li className="dropdown">
                            <a href="#" ref={x => this.blogDropdown = x} className="dropdown-toggle nav-link" style={{ "fontSize": "18px" }} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <span className="">Blog</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <NavLink exact to={'/blog/traveling'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Traveling</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to={'/blog/traveling/summer2018'} style={{ "fontSize": "18px" }} className="nav-link" activeClassName="active">Summer 2018</NavLink>
                                </li>
                            </ul>
                        </li>
                        */
                        /*
                        <li><NavLink exact to={'/admin'} activeClassName="active">Admin</NavLink></li>
                        <li className="dropdown">
                            <a href="#" ref={x => this.elDropdown = x} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                {Globals.serviceUser ? Globals.serviceUser.login : null}&nbsp;
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                {Globals.serviceUser ? (
                                    <li><a href="#" onClick={this.onClickSignOut}>Sign out</a></li>
                                ) : (
                                    <li><a href="/login">Sign in</a></li>
                                )}
                            </ul>
                        </li>
                        */
                    }
                </ul>
            </div>
        </nav>
    }
}

export default withRouter(TopMenu as any);