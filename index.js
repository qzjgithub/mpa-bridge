'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (enter, cr, single) {
			if (!single && typeof window['define'] === "function") {
						window['define']([], function () {
									return function (param, pr) {
												if (pr.store && cr.reducers) {
															pr.store.replaceReducer((0, _redux.combineReducers)(_extends({}, pr.reducers || {}, cr.reducers)));
															cr.store = pr.store;
												}
												if (pr.actions && cr.actions) {
															cr.actions = Object.assign(pr.actions, or.actions);
												} else {
															cr.actions = pr.actions || cr.actions || {};
												}
												enter(param, cr);
									};
						});
			} else {
						enter(null, cr || {});
			}
};

var _redux = require('redux');