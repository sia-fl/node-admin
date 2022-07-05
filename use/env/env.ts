import { Service } from 'typedi';
import { App } from '#/global';
import * as YAML from 'yaml';
import * as fs from 'fs';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';

@Service()
export default class Env {
  app: App;

  database: {
    default: DataSourceOptions,
    [key: string]: DataSourceOptions,
  };

  constructor() {
    const file = fs.readFileSync(__dirname + '/env.yaml', 'utf8');
    const config = YAML.parse(file);
    for (const key in config) {
      this[key] = config[key];
    }
  }
}
