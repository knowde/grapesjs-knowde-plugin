import loadKnowdeComponents from './components/knowde.components';
import loadLayoutComponents from './components/layout.components';
import loadTypographyComponents from './components/typography.components';
import _s from 'underscore.string';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  loadKnowdeComponents(editor, config);
  loadLayoutComponents(editor, config);
  loadTypographyComponents(editor, config);
};
