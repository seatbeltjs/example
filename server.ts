import { DRestify } from '@seatbelt/server-restify';
// import { DHapi } from '@seatbelt/server-hapi';
// import { DExpress } from '@seatbelt/server-express';
// import { DKoa } from '@seatbelt/server-koa';
import { IServer } from '@seatbelt/core';
import { waterlinePlugin } from '@seatbelt/orm-waterline';

@DRestify()
// @DHapi()
// @DExpress()
// @DKoa()
export class Server implements IServer {
  public plugins = [
    waterlinePlugin({
      adapters: {
        memory: require('sails-memory')
      },
      connections: {
        default: {
          adapter: 'memory',
          schema: true
        }
        // default: {
        //   adapter: 'mongo',
        //   url: process.env.MONGOLAB_URI,
        //   schema: true
        // }
      }
    })
  ];
}
