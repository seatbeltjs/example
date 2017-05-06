import { DPolicy, IPolicy, IPolicyController } from '@seatbelt/core';

@DPolicy()
export class LocalHost implements IPolicy {
  public controller (controller: IPolicyController) {
    console.log('policy working');
    return controller.next();
  }
}
