import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (cats.knowde_components) {
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
  }
};
