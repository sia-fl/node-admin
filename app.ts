import { useKoaServer } from 'routing-controllers';
import { Application } from 'egg';
import init, { routingConfigs } from './use/init';

class AppBootHook {
  app: Application;

  constructor(app) {
    this.app = app;
  }

  // noinspection JSUnusedGlobalSymbols
  async didReady() {
    await init();
    useKoaServer(this.app, routingConfigs);
  }
}

module.exports = AppBootHook;
