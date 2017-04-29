import { DPolicy, IPolicy } from '../../seatbelt';

@DPolicy()
export class LocalHost implements IPolicy {
  public controller (route: any) {
    console.log('policy working');
    return route.next();
  }
}
