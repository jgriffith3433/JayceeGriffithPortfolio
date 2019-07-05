import AuthorizedLayout from '@Layouts/AuthorizedLayout';
import GuestLayout from "@Layouts/GuestLayout";
import LoginPage from '@Pages/LoginPage';
import { AppRoute } from "@Components/shared/AppRoute";
import * as React from 'react';
import { Switch } from 'react-router-dom';
import HomePage from '@Pages/HomePage';
import PortfolioPage from '@Pages/PortfolioPage';
import ReadingPage from '@Pages/ReadingPage';
import AboutMePage from '@Pages/AboutMePage';
import MusicPage from '@Pages/MusicPage';
import GamingPage from '@Pages/GamingPage';
import VideosPage from '@Pages/VideosPage';
import AdminPage from '@Pages/AdminPage';

export const routes = <Switch>
    <AppRoute layout={GuestLayout} exact path="/login" component={LoginPage} />
    <AppRoute layout={GuestLayout} exact path="/" component={HomePage} />
    <AppRoute layout={GuestLayout} exact path="/portfolio" component={PortfolioPage} />
    <AppRoute layout={GuestLayout} exact path="/about/me" component={AboutMePage} />
    <AppRoute layout={GuestLayout} exact path="/about/music" component={MusicPage} />
    <AppRoute layout={GuestLayout} exact path="/about/gaming" component={GamingPage} />
    <AppRoute layout={GuestLayout} exact path="/about/videos" component={VideosPage} />
    <AppRoute layout={GuestLayout} exact path="/about/reading" component={ReadingPage} />
    <AppRoute layout={AuthorizedLayout} exact path="/admin" component={AdminPage} />
</Switch>;