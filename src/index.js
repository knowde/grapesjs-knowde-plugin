import grapesjs from 'grapesjs';
import { DEFAULT_BLOCKS, DEFAULT_LABELS, DEFAULT_CATEGORIES } from './consts';
import loadCommands from './commands';
import loadTraits from './traits';
import loadComponents from './components';
import loadBlocks from './blocks';
import loadPanels from './panels';
import loadDevices from './devices';

export default grapesjs.plugins.add('grapesjs-knowde-plugin', (editor, opts = {}) => {
  window.editor = editor;

  const opts_blocks = opts.blocks || {};
  const opts_labels = opts.labels || {};
  const opts_categories = opts.blockCategories || {};
  delete opts['blocks'];
  delete opts['labels'];
  delete opts['blockCategories'];

  const options = {
    ...{
      blocks: {...DEFAULT_BLOCKS, ...opts_blocks},
      labels: {...DEFAULT_LABELS, ...opts_labels},
      blockCategories: {...DEFAULT_CATEGORIES, ...opts_categories},
      gridDevices: true,
      gridDevicesPanel: true
    },
    ...opts
  };

  editor.addComponents(`
    <style>
      /* Layout */
      .gjs-dashed .container, .gjs-dashed .container-fluid,
      .gjs-dashed .row,
      .gjs-dashed .col, .gjs-dashed [class^="col-"] {
        min-height: 1.5rem !important;
      }
      .gjs-dashed .w-100 {
        min-height: .25rem !important;
        background-color: rgba(0,0,0,0.1);
      }
      .gjs-dashed img {
        min-width: 25px;
        min-height: 25px;
        background-color: rgba(0,0,0,0.5);
      }
      /* Components */
      
      .gjs-dashed .btn-group,
      .gjs-dashed .btn-toolbar {
        padding-right: 1.5rem !important;
        min-height: 1.5rem !important;
      }
    
      
    </style>
  `);

  loadDevices(editor, options);

  // Add components
  loadComponents(editor, options);

  loadTraits(editor, options);

  // Add commands
  loadCommands(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add panels
  loadPanels(editor, options);

  // TODO Remove
  // editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 }))
});
