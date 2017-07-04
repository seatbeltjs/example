import { Policy, Log } from '@seatbelt/core';

@Policy.Register()
export class LocalHost implements Policy.BaseInterface {
  public log: Log = new Log('localhost policy');
  public controller (req: Policy.Request.BaseInterface, res: Policy.Response.BaseInterface) {
    this.log.verbose('policy working', req.allParams);
    return res.next();
  }
}
