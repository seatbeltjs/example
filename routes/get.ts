import { Log, Service, Route } from '@seatbelt/core';

@Route.Register({
  path: '/',
  type: 'GET'
})
export class HomeRoute implements Route.BaseRoute {
  private log: Log = new Log('[GET, POST] /');

  @Service.Use('Poke') public pokeService: any;
  @Service.UseAll() public services: any;

  public controller (req: any, res: any) {
    this.log.debug('base controller called');
    this.pokeService.poke();

    return res.send(200, {message: 'hi, this is the base route, try creating a user by sending a get or post request to /user with a firstname, lastname, and email in the query params or post body'});
  }
}
