import { Policy, Log } from '@seatbelt/core';

@Policy.Register()
export class LocalHost {
  public log: Log = new Log('localhost policy');
  public controller (req: any, res: any) {
    this.log.verbose('policy working', req.allParams);
    return res.next();
  }
}
