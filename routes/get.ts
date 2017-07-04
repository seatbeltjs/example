import { Log, Service, Route } from '@seatbelt/core';
import { Poke } from '../services/poke';

@Route.Register({
  path: '/',
  type: 'GET'
})
export class HomeRoute implements Route.BaseInterface {
  private log: Log = new Log('[GET, POST] /');

  @Service.Use('Poke') public pokeService: Poke;

  public controller (req: Route.Request.BaseInterface, res: Route.Response.BaseInterface) {
    this.log.debug('base controller called');

    return res.ok({message: 'hi, this is the base route, try creating a user by sending a get or post request to /user with a firstname, lastname, and email in the query params or post body'});
  }
}
