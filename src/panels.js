import {
  cmdClear,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  cmdImport,
  cmdPreview,
  cmdSave
} from './commands/consts';

export default (editor, config = {}) => {
  const pn = editor.Panels;
  const eConfig = editor.getConfig();
  const crc = 'create-comp';
  const mvc = 'move-comp';
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';

  eConfig.showDevices = 0;

  pn.getPanels().reset([
    {
      id: 'commands',
      buttons: [{}]
    },
    {
      id: 'options',
      buttons: [
        // {
        //   id: swv,
        //   command: swv,
        //   context: swv,
        //   className: 'fa fa-square-o'
        // },
        {
          id: cmdPreview,
          command: cmdPreview,
          attributes: { title: 'Preview' },
          className: 'fa fa-eye'
        },
        {
          id: ful,
          command: ful,
          context: ful,
          className: 'fa fa-arrows-alt'
        },
        {
          id: expt,
          className: 'fa fa-code',
          command: e => e.runCommand(expt)
        },
        {
          id: 'undo',
          className: 'fa fa-undo',
          command: e => e.runCommand('core:undo')
        },
        {
          id: 'redo',
          className: 'fa fa-repeat',
          command: e => e.runCommand('core:redo')
        },
        {
          id: cmdImport,
          className: 'fa fa-download',
          command: e => e.runCommand(cmdImport, { force: 1 })
        },
        {
          id: cmdClear,
          className: 'fa fa-trash',
          command: e => e.runCommand(cmdClear)
        },
        {
          id: cmdSave,
          className: 'fa fa-floppy-o',
          command: cmdSave,
          attributes: { title: 'Save' }
        }
      ]
    },
    {
      id: 'views',
      buttons: [
        {
          id: osm,
          command: osm,
          active: true,
          className: 'fa fa-paint-brush'
        },
        {
          id: otm,
          command: otm,
          className: 'fa fa-cog'
        },
        {
          id: ola,
          command: ola,
          className: 'fa fa-bars'
        },
        {
          id: obl,
          command: obl,
          className: 'fa fa-th-large'
        }
      ]
    }
  ]);

  // Add devices buttons
  const panelDevices = pn.addPanel({ id: 'devices-c' });
  panelDevices.get('buttons').add([
    {
      id: cmdDeviceDesktop,
      command: cmdDeviceDesktop,
      className: 'fa fa-desktop',
      active: 1
    },
    {
      id: cmdDeviceTablet,
      command: cmdDeviceTablet,
      className: 'fa fa-tablet'
    },
    {
      id: cmdDeviceMobile,
      command: cmdDeviceMobile,
      className: 'fa fa-mobile'
    }
  ]);

  const openBl = pn.getButton('views', obl);
  editor.on('load', () => openBl && openBl.set('active', 1));

  // On component change show the Style Manager
  editor.on('component:selected', () => {
    const openSmBtn = pn.getButton('views', osm);
    const openLayersBtn = pn.getButton('views', ola);

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn && openSmBtn.set('active', 1);
    }
  });

  pn.addButton('options', []);
};
