import { DRestify } from '@seatbelt/server-restify';
// import { DHapi } from '@seatbelt/server-hapi';
// import { DExpress } from '@seatbelt/server-express';
// import { DKoa } from '@seatbelt/server-koa';
import { IServer } from '@seatbelt/core';

@DRestify()
// @DHapi()
// @DExpress()
// @DKoa()
export class Server implements IServer {}
