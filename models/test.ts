import { Model } from '@seatbelt/orm-waterline';

export const TestModel = new Model.Register({
  connection: 'default',
  identity: 'test',
  attributes: {
    firstName: 'string',
    lastName: 'string',
    email: 'email'
  }
});
