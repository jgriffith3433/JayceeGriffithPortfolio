import AuthorizedLayout from '@Layouts/AuthorizedLayout';
import GuestLayout from "@Layouts/GuestLayout";
import LoginPage from '@Pages/LoginPage';
import { AppRoute } from "@Components/shared/AppRoute";
import * as React from 'react';
import { Switch } from 'react-router-dom';
import HomePage from '@Pages/HomePage';
import PortfolioPage from '@Pages/PortfolioPage';
import TravelingPage from '@Pages/TravelingPage';
import Summer2018Page from '@Pages/Summer2018Page';
import ReadingPage from '@Pages/ReadingPage';
import AdminPage from '@Pages/AdminPage';

export const routes = <Switch>
    <AppRoute layout={GuestLayout} exact path="/login" component={LoginPage} />
    <AppRoute layout={GuestLayout} exact path="/" component={HomePage} />
    <AppRoute layout={GuestLayout} exact path="/portfolio" component={PortfolioPage} />
    <AppRoute layout={GuestLayout} exact path="/traveling" component={TravelingPage} />
    <AppRoute layout={GuestLayout} exact path="/traveling/summer2018" component={Summer2018Page} />
    <AppRoute layout={GuestLayout} exact path="/reading" component={ReadingPage} />
    <AppRoute layout={GuestLayout} exact path="/unitygames/spaceshooter/WebPlayer.html" />
    <AppRoute layout={AuthorizedLayout} exact path="/admin" component={AdminPage} />
</Switch>;