import { DRoute, DValidateRequest, IRoute, IController } from '@seatbelt/core';
import * as Joi from 'joi';

export interface T {
  stats: string;
}
@DRoute({
  path: '/',
  type: ['GET', 'POST'],
  policies: [
    'LocalHost'
  ]
})
export class HomeRoute implements IRoute {
  @DValidateRequest(Joi.object().keys({
    email: Joi.string().email().required()
  }))
  public controller (controller: IController) {
    return controller.send({ status: 200, json: controller.params });
  }
}
