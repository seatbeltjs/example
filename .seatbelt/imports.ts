import * as Request0 from '/Users/thomas/me/example/policies/LocalHost';
import * as Request1 from '/Users/thomas/me/example/routes/get';
import * as Request2 from '/Users/thomas/me/example/server';

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

export function allImports() {
  return exportsObject;
}
