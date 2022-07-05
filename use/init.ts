import 'reflect-metadata';
import 'module-alias/register';
import * as orm from 'typeorm';
import { Container } from 'typedi';
import Env from '@env';
import { EntityManager } from 'typeorm';
import { RoutingControllersOptions, useContainer } from 'routing-controllers';
import * as path from 'path';

export const routingConfigs: RoutingControllersOptions = {
  controllers: [ path.join(__dirname, '/controller/**/*.ts') ],
};

export default async function init() {
  const config = Container.get(Env);
  const dataSource = new orm.DataSource({
    ...config.database.default,
    entities: [ path.join(__dirname, '/model/**/*.ts') ],
  });
  await dataSource.initialize();
  Container.set(orm.DataSource, dataSource);
  Container.set(EntityManager, dataSource.manager);
  useContainer(Container);
}
