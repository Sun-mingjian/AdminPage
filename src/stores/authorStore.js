"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionType = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _author = [];

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
        return _author;
    },
    getAuthorById:function(id){
        return _.find(_authos,{id:id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionType.CREATE_AUTHOR:
            _author.push(action.author);
            AuthorStore.emitChange();
    }
});

module.exports = AuthorStore;