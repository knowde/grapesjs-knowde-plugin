import openImport from './commands/import.commands';
import { cmdClear, cmdDeviceDesktop, cmdDeviceMobile, cmdDeviceTablet, cmdImport, cmdSave } from './commands/consts';

export default (editor, config = {}) => {
  const cm = editor.Commands;

  cm.add(cmdImport, openImport(editor, config));
  cm.add(cmdSave, (e, sender) => {
    console.log(...arguments);
    sender && sender.set('active'); // turn off the button
    e.store();
  });
  cm.add(cmdClear, e => confirm('Are you sure to clean the canvas?') && e.runCommand('core:canvas-clear'));
  cm.add(cmdDeviceDesktop, e => e.setDevice('Desktop'));
  cm.add(cmdDeviceTablet, e => e.setDevice('Tablet'));
  cm.add(cmdDeviceMobile, e => e.setDevice('Mobile portrait'));
};
