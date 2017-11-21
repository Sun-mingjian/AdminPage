"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionType = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');


var InitializeActions = {
    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionType.INITIALIZE,
            initialData:{
                authors:AuthorApi.getAllAuthors()
            }
        });
    }

};

module.exports = InitializeActions;