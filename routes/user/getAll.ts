import { Log, Route } from '@seatbelt/core';
import { Model } from '@seatbelt/orm-waterline';

@Route.Register({
  path: '/users',
  type: ['GET', 'POST', 'PUT']
})
export class UserGetAllRoute implements Route.BaseInterface {
  private log: Log = new Log('[GET, POST] /');

  @Model.Use('test') public testModel: any;

  public controller (req: Route.Request.BaseInterface, res: Route.Response.BaseInterface) {
    return this.testModel.find()
    .limit(1000)
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
