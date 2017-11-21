"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionType = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var AuthorActions = {
    createAuthor:function(author){
        var newAuthor = AuthorApi.saveAuthor(author);
        //go tell all the stores that an author was just created
        Dispatcher.dispatch({
            actionType: ActionType.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor:function(author){
        var updatedAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionType.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    }

};

module.exports = AuthorActions;