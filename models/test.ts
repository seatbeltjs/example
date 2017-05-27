import { DRegisterModel } from '@seatbelt/orm-waterline';

@DRegisterModel({
  connection: 'default',
  identity: 'test',
  attributes: {
    firstName: 'string',
    lastName: 'string'
  }
})
export class Test {}
