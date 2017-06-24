import { DService, DRoute, DPolicy, DValidateRequest, IRoute, IController} from '@seatbelt/core';

@DRoute({
  path: '/',
  type: ['GET', 'POST']
})
export class HomeRoute {
  @DService() public services: any;
  // public models: any;
  @DPolicy('Localhost')
  @DValidateRequest((Joi) => ({
    email: Joi.string().email().required()
  }))
  public controller (req: any, res: any) {
    // this.services.Poke.poke();
    return res.send(200, req.allParams);
  }
}
