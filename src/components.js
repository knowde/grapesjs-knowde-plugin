import loadKnowdeComponents from './components/knowde.components';
import loadLayoutComponents from './components/layout.components';
import loadBasicsComponents from './components/basics.components';
import _s from 'underscore.string';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  // Set classes to private to avoid changing styles for global classes
  const selectorClasses = [
    'container',
    'container-fluid',
    'row',
    'col',
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => 'col-' + v),
    'p'
  ];
  const privateCls = selectorClasses.map(v => '.' + v);

  editor.on('selector:add', selector => privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1));

  loadKnowdeComponents(editor, config);
  loadLayoutComponents(editor, config);
  loadBasicsComponents(editor, config);
};
