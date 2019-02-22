import { COMPONENTS_TYPES, DEFAULT_LABELS } from '../consts.js';

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  domc.addType(COMPONENTS_TYPES.knowde_latest_brands, {
    isComponent: el => {
      if (el && el.tagName == 'LATEST-BRANDS') {
        return { type: COMPONENTS_TYPES.knowde_latest_brands };
      }
    },
    // Define the Model
    model: {
      defaults: {
        'custom-name': DEFAULT_LABELS.knowde_latest_brands,
        tagName: 'latest-brands',
        droppable: false,
        stylable: false,
        copyable: false,
        editable: false
      }
    }
  });
};
