import { NgZone } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';
const microAppRegister = [
  {
    name: 'subone', // app name registered
    entry: '//localhost:4401',
    container: '#test',
    activeRule: '/#/subone',
  },
  {
    name: 'subtwo', // app name registered
    entry: '//localhost:4402',
    container: '#test',
    activeRule: '/#/subtwo',
  },
];
const init = () => {
  const zone = new NgZone({});
  zone.run(() => {
    registerMicroApps(microAppRegister);
  });
  start();
};

export { init };
