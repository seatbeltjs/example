import { DService, DRoute, DPolicy, IRoute, IController} from '@seatbelt/core';
import { DValidateRequest } from '@seatbelt/validators';

@DRoute({
  path: '/',
  type: ['GET', 'POST']
})
export class HomeRoute implements IRoute {
  @DService() public services: any;
  public models: any;
  @DPolicy('Localhost')
  @DValidateRequest((Joi) => ({
    email: Joi.string().email().required()
  }))
  public controller (controller: IController) {
    this.services.Poke.poke();
    return controller.send({ status: 200, json: controller });
  }
}
