import { Controller as BC } from 'egg';
import { Controller, Get } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import Env from '@env';

@Service()
@Controller()
class BaseController extends BC {
  @Inject()
  env: Env;

  constructor() {
    super({ app: {} } as any);
  }

  @Get('/hi')
  hi() {
    return 'hi ' + this.env.app.name;
  }
}

export default BaseController;
