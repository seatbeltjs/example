var _seatbelt_validators = require('@seatbelt/validators');
var _seatbelt_serverRestify = require('@seatbelt/server-restify');

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
                            return originalFunction.apply(this, [controls, ...params]);
                        };
                        const policyControls = Object.assign({}, controls, { next });
                        return policyRegister[policyName](policyControls, ...params);
                    };
                });
            }
        }
    };
}

const serviceRegister = {};
function DService(serviceName) {
    return (OriginalClassConstructor, wrappedName, valueObject) => {
        if (typeof OriginalClassConstructor === 'function') {
            serviceRegister[OriginalClassConstructor.name] = new OriginalClassConstructor();
        }
        else {
            if (!serviceName) {
                OriginalClassConstructor[wrappedName] = serviceRegister;
            }
            else {
                OriginalClassConstructor[wrappedName] = serviceRegister[serviceName];
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

let HomeRoute = class HomeRoute {
    controller(controller) {
        console.log('poke', this.Poke);
        this.services.Poke.poke();
        return controller.send({ status: 200, json: controller });
    }
};
__decorate([
    DService()
], HomeRoute.prototype, "services", void 0);
__decorate([
    DService('Poke')
], HomeRoute.prototype, "Poke", void 0);
__decorate([
    DPolicy('Localhost'),
    _seatbelt_validators.DValidateRequest((Joi) => ({
        email: Joi.string().email().required()
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
    _seatbelt_serverRestify.DRestify()
], Server);


var Request2 = Object.freeze({
	get Server () { return Server; }
});

let Poke = class Poke {
    poke() {
        console.log('poke');
    }
};
Poke = __decorate([
    DService()
], Poke);


var Request3 = Object.freeze({
	get Poke () { return Poke; }
});

const routes = [];
let server;
if (Request0 && typeof Request0 === 'object') {
  Object.keys(Request0).forEach(variable => {
    if (Request0[variable] && Request0[variable].prototype) {
      const newItem = new Request0[variable]();
      if (newItem.__seatbelt__ === 'route') {
        routes.push(newItem);
      }
      if (newItem.__seatbelt__ === 'server') {
        server = newItem;
      }
    }
  });
}

if (Request1 && typeof Request1 === 'object') {
  Object.keys(Request1).forEach(variable => {
    if (Request1[variable] && Request1[variable].prototype) {
      const newItem = new Request1[variable]();
      if (newItem.__seatbelt__ === 'route') {
        routes.push(newItem);
      }
      if (newItem.__seatbelt__ === 'server') {
        server = newItem;
      }
    }
  });
}

if (Request2 && typeof Request2 === 'object') {
  Object.keys(Request2).forEach(variable => {
    if (Request2[variable] && Request2[variable].prototype) {
      const newItem = new Request2[variable]();
      if (newItem.__seatbelt__ === 'route') {
        routes.push(newItem);
      }
      if (newItem.__seatbelt__ === 'server') {
        server = newItem;
      }
    }
  });
}

if (Request3 && typeof Request3 === 'object') {
  Object.keys(Request3).forEach(variable => {
    if (Request3[variable] && Request3[variable].prototype) {
      const newItem = new Request3[variable]();
      if (newItem.__seatbelt__ === 'route') {
        routes.push(newItem);
      }
      if (newItem.__seatbelt__ === 'server') {
        server = newItem;
      }
    }
  });
}

server.__seatbelt_strap__(routes);
