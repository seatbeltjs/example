import { Log, Route, Policy, Validate } from '@seatbelt/core';
import { Model } from '@seatbelt/orm-waterline';

@Route.Register({
  path: 'user',
  type: ['GET', 'POST']
})
export class UserCreateRoute implements Route.BaseRoute {
  private log: Log = new Log('[GET, POST] /');

  @Model.UseAll() public models: any;
  @Model.Use('test') public testModel: any;

  @Policy.Use('Localhost')
  @Validate.Request((Joi) => ({
    email: Joi.string().email().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required()
  }))
  public controller (req: any, res: any) {
    return this.testModel.create(req.allParams)
    .then((modelCreated: any) => {
      this.log.debug('model created');
      return res.send(200, modelCreated);
    })
    .catch((err: Error) => {
      this.log.error(err);
      return res.send(500, err);
    });
  }
}
