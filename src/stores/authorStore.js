"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionType = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({},EventEmitter.prototype,{
    addChangeListener: function(callBack){
        this.on(CHANGE_EVENT, callBack);
    },
    removeChangeListener:function(callBack){
        this.removeChangeListener(CHANGE_EVENT,callBack);
    },
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors:function(){
        return _authors;
    },
    getAuthorById:function(id){
        return _.find(_authors,{id:id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionType:INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionType.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionType.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors,{id:action.author.id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex,1,action.author);
            AuthorStore.emitChange();
            break;
        default:
            //no operations
    }
});

module.exports = AuthorStore;