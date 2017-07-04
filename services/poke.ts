import { Service, Log } from '@seatbelt/core';

@Service.Register()
export class Poke {
  private log: Log = new Log('PokeService');
  public poke() {
    this.log.debug('you have been poked');
  }
}
