import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const c = config;
  const category = { id: 'typography', label: DEFAULT_LABELS.typography };
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (!cats.typography) {
    return;
  }

  if (blocks.paragraph) {
    bm.add('typography-paragraph-block', {
      label: config.labels.paragraph,
      category,
      attributes: { class: 'fa fa-paragraph' },
      content: {
        type: COMPONENTS_TYPES.paragraph_component,
        content: 'Double click to edit text...'
      }
    });
  }
};
