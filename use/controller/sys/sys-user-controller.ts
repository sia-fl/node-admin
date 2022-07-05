import 'reflect-metadata';
import BaseController from '../base-controller';
import { Controller, Get, Param, QueryParams } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { EntityManager } from 'typeorm';
import { SysUser } from '@model/sys/sys-user';

@Service()
@Controller('/sys/user')
class SysUserController extends BaseController {
  @Inject()
  orm: EntityManager;

  @Get('/')
  async list(@QueryParams() body: SysUser) {
    return await this.orm.findBy(SysUser, body);
  }

  @Get('/:id')
  async get(@Param('id') id: string) {
    return await this.orm.findOneBy(SysUser, { id });
  }
}

export default SysUserController;
