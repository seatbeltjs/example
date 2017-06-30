import { Log, Service, Route, Request, Response } from '@seatbelt/core';

@Route.Register({
  path: '/',
  type: 'GET'
})
export class HomeRoute implements Route.BaseRoute {
  private log: Log = new Log('[GET, POST] /');

  @Service.Use('Poke') public pokeService: any;
  @Service.UseAll() public services: any;

  public controller (req: Request.Base, res: Response.Base) {
    this.log.debug('base controller called');
    this.pokeService.poke();

    return res.ok({message: 'hi, this is the base route, try creating a user by sending a get or post request to /user with a firstname, lastname, and email in the query params or post body'});
  }
}
