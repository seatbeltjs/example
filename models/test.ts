import { DModel } from '@seatbelt/orm-waterline';

@DModel({
  connection: 'default',
  identity: 'test',
  attributes: {
    firstName: 'string',
    lastName: 'string'
  }
})
export class Test {}
