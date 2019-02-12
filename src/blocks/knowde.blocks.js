import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const c = config;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  if (cats.knowde_components) {
    if (blocks.latest_brands) {
      bm.add(COMPONENTS_TYPES.knowde_component + '-block', {
        label: c.labels.latest_brands,
        category: c.labels.knowde_components,
        attributes: { class: 'fa fa-feed' },
        content: {
          tagName: 'latest-brands',
          type: COMPONENTS_TYPES.knowde_component,
          content: 'Placeholder for producer latest brands'
        }
      });
    }
  }
};
