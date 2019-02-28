import grapesjs from 'grapesjs';
import { DEFAULT_BLOCKS, DEFAULT_LABELS, DEFAULT_CATEGORIES } from './consts';
import loadCommands from './commands';
import loadTraits from './traits';
import loadComponents from './components';
import loadBlocks from './blocks';
import loadPanels from './panels';

import './style.scss';

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
      blocks: { ...DEFAULT_BLOCKS, ...opts_blocks },
      labels: { ...DEFAULT_LABELS, ...opts_labels },
      blockCategories: { ...DEFAULT_CATEGORIES, ...opts_categories },
      gridDevices: true
    },
    ...opts
  };
  // Add initial styles into editor (visible for frontend, saved to DB)
  // editor.addComponents(`
  //   <style>
  //     /* Layout */
  //
  //
  //   </style>
  // `);

  // Add components
  loadComponents(editor, options);

  loadTraits(editor, options);

  // Add commands
  loadCommands(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add panels
  loadPanels(editor, options);
});
