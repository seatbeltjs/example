// import { DRoute, IRoute, DValidateRequest } from '../../core/src';
// const Joi = require('joi');
//
// @DRoute({
//   path: '/',
//   type: ['GET', 'POST'],
//   policies: [
//     'LocalHost'
//   ]
// })
export class HomeRoute {
  // @DValidateRequest(Joi.object().keys({
  //   email: Joi.string().email().required()
  // }))
  public controller (route: any) {
    return route.reply(route.params);
  }
}
