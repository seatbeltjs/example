import { DRoute, IRoute, IController} from '@seatbelt/core';
import { DValidateRequest } from '@seatbelt/validators'
import * as Joi from 'joi';

@DRoute({
  path: '/',
  type: ['GET', 'POST'],
  policies: [
    'LocalHost'
  ]
})
export class HomeRoute implements IRoute {
  @DValidateRequest({
    email: Joi.string().email().required()
  })
  public controller (controller: IController) {
    return controller.send({ status: 200, json: controller });
  }
}
