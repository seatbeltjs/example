'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _seatbelt_core = require('@seatbelt/core');
var Joi = require('joi');
var _seatbelt_serverRestify = require('@seatbelt/server-restify');

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let LocalHost = class LocalHost {
    controller(controller) {
        console.log('policy working');
        return controller.next();
    }
};
LocalHost = __decorate([
    _seatbelt_core.DPolicy()
], LocalHost);


var Request0 = Object.freeze({
	get LocalHost () { return LocalHost; }
});

let HomeRoute = class HomeRoute {
    controller(controller) {
        return controller.send({ status: 200, json: controller.params });
    }
};
__decorate([
    _seatbelt_core.DValidateRequest(Joi.object().keys({
        email: Joi.string().email().required()
    }))
], HomeRoute.prototype, "controller", null);
HomeRoute = __decorate([
    _seatbelt_core.DRoute({
        path: '/',
        type: ['GET', 'POST'],
        policies: [
            'LocalHost'
        ]
    })
], HomeRoute);


var Request1 = Object.freeze({
	get HomeRoute () { return HomeRoute; }
});

let Server = class Server {
    test() {
        console.log('hi');
    }
};
Server = __decorate([
    _seatbelt_serverRestify.DRestify()
], Server);


var Request2 = Object.freeze({
	get Server () { return Server; }
});

const exportsObject = {};

if (Request0 && typeof Request0 === 'object') {
  Object.keys(Request0).forEach(variable => {
    if (Request0[variable] && Request0[variable].prototype) {
      exportsObject[variable + '__0'] = new Request0[variable]();
    }
  });
}

if (Request1 && typeof Request1 === 'object') {
  Object.keys(Request1).forEach(variable => {
    if (Request1[variable] && Request1[variable].prototype) {
      exportsObject[variable + '__1'] = new Request1[variable]();
    }
  });
}

if (Request2 && typeof Request2 === 'object') {
  Object.keys(Request2).forEach(variable => {
    if (Request2[variable] && Request2[variable].prototype) {
      exportsObject[variable + '__2'] = new Request2[variable]();
    }
  });
}

function allImports() {
  return exportsObject;
}

exports.allImports = allImports;
