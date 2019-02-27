import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (!cats.knowde_components) {
    return;
  }
  if (blocks.knowde_components_latest_brands) {
    bm.add(COMPONENTS_TYPES.knowde_latest_brands + '-block', {
      label: c.labels.knowde_components_latest_brands,
      category: c.labels.knowde_components,
      attributes: { class: 'fa fa-feed' },
      content: {
        tagName: 'latest-brands',
        type: COMPONENTS_TYPES.knowde_latest_brands
      }
    });
  }

  if (blocks.knowde_components_counter) {
    bm.add(COMPONENTS_TYPES.knowde_counter + '-block', {
      label: c.labels.knowde_components_counter,
      category: c.labels.knowde_components,
      attributes: { class: 'fa fa-number' },
      content: {
        tagName: 'simple-counter',
        type: COMPONENTS_TYPES.knowde_counter
      }
    });
  }
};
