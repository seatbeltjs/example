// import { DRestify } from '@seatbelt/server-restify';
import { DHapi } from '@seatbelt/server-hapi';
// import { DExpress } from '@seatbelt/server-express';
// import { DKoa } from '@seatbelt/server-koa';
import { IServer } from '@seatbelt/core';

@DHapi()
export class Server implements IServer {
  public test() {
    console.log('hi');
  }
}
