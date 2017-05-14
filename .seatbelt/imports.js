'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Joi = require('joi');
var _seatbelt_serverHapi = require('@seatbelt/server-hapi');

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function DRoute(config) {
    return function (OriginalClassConstructor) {
        return class extends OriginalClassConstructor {
            constructor() {
                super();
                if (typeof config.type === 'string') {
                    config.type = [config.type];
                }
                if (typeof config.path === 'string') {
                    config.path = [config.path];
                }
                if (!config.policies) {
                    config.policies = [];
                }
                if (typeof config.policies === 'string') {
                    config.policies = [config.policies];
                }
                this.__seatbelt_config__ = config;
                this.__seatbelt__ = 'route';
            }
        };
    };
}

const policyRegister = {};
function DPolicy(policyNames) {
    return (OriginalClassConstructor, wrappedName, valueObject) => {
        if (typeof OriginalClassConstructor === 'function') {
            return class extends OriginalClassConstructor {
                constructor() {
                    super();
                    this.__name__ = OriginalClassConstructor.name;
                    this.__seatbelt__ = 'policy';
                    policyRegister[OriginalClassConstructor.name.toLowerCase()] = this.controller;
                }
                ;
            };
        }
        else if (valueObject && typeof valueObject.value === 'function') {
            if (typeof policyNames === 'string') {
                policyNames = [policyNames];
            }
            if (Array.isArray(policyNames)) {
                policyNames.forEach(policyName => {
                    policyName = policyName.toLowerCase();
                    const originalFunction = valueObject.value;
                    valueObject.value = function (controls, ...params) {
                        const next = () => {
                            return originalFunction(controls, ...params);
                        };
                        const policyControls = Object.assign({}, controls, { next });
                        return policyRegister[policyName](policyControls, ...params);
                    };
                });
            }
        }
    };
}

let LocalHost = class LocalHost {
    controller(controller) {
        console.log('policy working');
        return controller.next();
    }
};
LocalHost = __decorate([
    DPolicy()
], LocalHost);


var Request0 = Object.freeze({
	get LocalHost () { return LocalHost; }
});

function DValidateRequest(requiredParams) {
    return function (hostClass, functionName, functionAttributes) {
        const originalMethod = functionAttributes.value;
        functionAttributes.value = (controller, serverController) => {
            Joi.validate(controller.params, Joi.object().keys(requiredParams(Joi)), (err) => {
                if (!err) {
                    return originalMethod(controller, serverController);
                }
                else {
                    controller.send({ status: 400, json: err });
                }
            });
        };
    };
}

let HomeRoute = class HomeRoute {
    controller(controller) {
        return controller.send({ status: 200, json: controller });
    }
};
__decorate([
    DPolicy('Localhost'),
    DValidateRequest((Joi$$1) => ({
        email: Joi$$1.string().email().required()
    }))
], HomeRoute.prototype, "controller", null);
HomeRoute = __decorate([
    DRoute({
        path: '/',
        type: ['GET', 'POST']
    })
], HomeRoute);


var Request1 = Object.freeze({
	get HomeRoute () { return HomeRoute; }
});

let Server = class Server {
};
Server = __decorate([
    _seatbelt_serverHapi.DHapi()
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
