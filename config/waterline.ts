import { Model } from '@seatbelt/orm-waterline';

export const waterlineConfig = new Model.Config({
  adapters: {
    memory: require('sails-memory')
  },
  connections: {
    default: {
      adapter: 'memory',
      schema: true
    }
  }
});
