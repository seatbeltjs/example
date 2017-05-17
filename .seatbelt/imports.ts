import * as Request0 from '/Users/thomas/me/example/policies/LocalHost';
import * as Request1 from '/Users/thomas/me/example/routes/get';
import * as Request2 from '/Users/thomas/me/example/server';
import * as Request3 from '/Users/thomas/me/example/services/poke';

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

server.__seatbelt_strap__(routes)
