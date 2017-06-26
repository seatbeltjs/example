import { Policy } from '@seatbelt/core';

@Policy.Register()
export class LocalHost {
  public controller (req: any, res: any) {
    console.log('policy working');
    return res.next();
  }
}
