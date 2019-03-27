import { COMPONENTS_TYPES } from '../consts.js';
import { DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (!cats.basics) {
    return;
  }

  const textType = domc.getType('text');
  const textModel = textType.model;
  const textView = textType.view;

  const linkType = domc.getType('link');
  const linkModel = linkType.model;
  const linkView = linkType.view;

  if (blocks.paragraph) {
    domc.addType(COMPONENTS_TYPES.paragraph_component, {
      extend: 'text',
      isComponent: el => {
        console.log(el.dataset);

        if (el && el.tagName && el.tagName == 'DIV' && el.dataset.isParagraph) {
          return { type: COMPONENTS_TYPES.paragraph_component };
        }
      },
      model: {
        defaults: {
          'custom-name': DEFAULT_LABELS.paragraph,
          tagName: 'div',
          attributes: { 'data-is-paragraph': 'true' },
          // classes: ['paragraph'],
          traits: [
            {
              type: 'class_select',
              options: [{ value: '', name: 'No' }, { value: 'lead', name: 'Yes' }],
              label: 'Lead?'
            }
          ] //.concat(textModel.prototype.defaults.traits)
        }
      }
    });
  }
};
