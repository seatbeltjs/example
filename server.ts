import { DRestify } from '@seatbelt/server-restify';
import { IServer } from '@seatbelt/core';

@DRestify()
export class Server implements IServer {
  public test() {
    console.log('hi');
  }
}
