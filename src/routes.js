"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name='app' path='/' handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homepage')}></DefaultRoute>
        <Route name="authors" handler={require('./components/authors/authorPage')}></Route>
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')}></Route>
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')}></Route>
        <Route name="about" handler={require('./components/about/aboutPage')}></Route>
        <NotFoundRoute handler={require('./components/notFoundPage')}></NotFoundRoute>
        <Redirect from="about-us" to="about"></Redirect>
        <Redirect from="awthors" to="authors"/>
        <Redirect from="about/*" to="about"/>
    </Route>
);

module.exports = routes;