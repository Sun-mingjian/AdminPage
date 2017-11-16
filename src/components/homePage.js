"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>Hello this is a React app</p>
            </div>
        );
    }

});

module.exports = Home;