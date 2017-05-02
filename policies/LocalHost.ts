// import { DPolicy, IPolicy } from '../../core/src';
//
// @DPolicy()
export class LocalHost {
  public controller (route: any) {
    console.log('policy working');
    return route.next();
  }
}
