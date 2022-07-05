import { Command } from 'commander';

const p = new Command();

p
  .name('k6 test')
  .option('-p <s>', '脚本路径');

const opts = p.parse()
  .opts();
const baseUrl = 'http://127.0.0.1:7001';

let path = opts.p;
if (!path) {
  path = '.\\use\\test\\controller\\test.ts';
} else {
  path = `.\\use\\test\\${path}`;
}

const process = require('child_process');
process.spawn(
  `k6 run -e baseUrl=${baseUrl} ${path}`,
  {
    stdio: 'inherit',
    shell: true,
  } as any,
);
